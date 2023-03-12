import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #3d3c3cc2;
  padding-top: 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "empty text arrow";
  align-items: center;
`;

export const Text = styled.p`
  grid-area: text;
  text-align: center;
`;

export const ArrowCont = styled.div`
  grid-area: arrow;
  text-align: center;
`;

export const Arrow = styled.a`
  &:hover {
    border: 3px dashed #00b2df;
    border-radius: 50%;
    padding: 3px;
    padding-top: 10px;
  }
`;
