import { useEffect } from "react";
import styled from "styled-components";
import usePages from "./usePages";

const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
`;

export const HeaderButtons = () => {
  const { index, setIndex } = usePages();

  return (
    <DivButtons>
      <Button disabled={index == 1} onClick={() => setIndex(index - 1)}>Página anterior</Button>
      <Button onClick={() => setIndex(index + 1)}>Próxima página</Button>
    </DivButtons>
  );
};
