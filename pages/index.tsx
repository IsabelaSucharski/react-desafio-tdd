/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Exchanges } from "./Exchanges";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px;
`;

const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const DivPesquisa = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
`;

export interface ICoin {
  id: number;
  name: string;
  year_established: number;
  country: string;
  description: number;
  image: string;
  url: number;
  has_trading_incentive: boolean;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
}

const Home: NextPage = () => {
  const [data, setData] = useState<ICoin[]>([]);
  const [newData, setNewData] = useState<ICoin[]>([]);
  const [index, setIndex] = useState(1);
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/exchanges/?per_page=100&page=${index}`
    )
      .then((res) => res.json())
      .then(setData);
  }, [index]);

  // useEffect(() => {
  //   let newData = data.filter(({ name }) => {
  //     return name.includes(nameFilter);
  //   });
  //   setNewData(newData);
  // }, [nameFilter]);

  useEffect(() => {
    if (data) {
      setNewData(
        data.filter((item: any) =>
          item.name.toLowerCase().includes(nameFilter.toLowerCase())
        )
      );
    } else {
      setNewData([]);
    }
  }, [data, nameFilter]);

  return (
    <Container>
      <DivButtons>
        <Button
          disabled={index == 1}
          onClick={() => [
            setIndex(index - 1),
            setNameFilter(""),
            setData([]),
            setNewData([]),
          ]}
        >
          P??gina anterior
        </Button>
        <Button
          disabled={!data.length}
          onClick={() => [
            setIndex(index + 1),
            setNameFilter(""),
            setData([]),
            setNewData([]),
          ]}
        >
          Pr??xima p??gina
        </Button>
      </DivButtons>

      <DivPesquisa>
        <label>
          Filtrar por nome:
          <input
            type="text"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </label>
        {nameFilter && (
          <p>
            Exibindo {newData.length} de {data.length}
          </p>
        )}
      </DivPesquisa>

      {!newData.length && !data.length && <div>Sem dados</div>}
      {/* 
      {!newData.length &&
        data.map((c) => {
          return <Exchanges coin={c} key={c.id} />;
        })} */}

      {newData.map((c, index) => {
        return <Exchanges coin={c} key={index} />;
      })}
    </Container>
  );
};

export default Home;
