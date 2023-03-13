import styled from "styled-components";

export const Imagen = styled.img`
  width: 80px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 40px;
`;

export const Card = styled.div`
  border-radius: 10px;
  background-color: #80808088;
  text-align: center;
  padding: 20px;
  display: flex;
  gap: 20px;
  align-items: center;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 3px white;
  }
`;
