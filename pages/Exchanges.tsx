import Image from "next/image";
import styled from "styled-components";

const DivCoin = styled.div`
  border: 1px;
  border-color: black;
  border-radius: 5px;
  background-color: gray;
  padding: 5px;
  margin-bottom: 20px;
  width: 100%;
  height: 250px;
`;
const DivImage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Exchanges = ({ coin }: any) => {
  return (
    <DivCoin>
      <DivImage>
        <Image src={`/${coin.image}`} width={70} height={50} alt="img"></Image>
        <h3>{coin.name}</h3>
      </DivImage>
      <p>{coin.image}</p>
      <p>{coin.year_established}</p>
      <p>{coin.country}</p>
      <p>{coin.trust_score}</p>
      <p>{coin.trade_volume_24h_btc}</p>
    </DivCoin>
  );
};
