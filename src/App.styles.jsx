import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body{
    background-color: black;
    color: white;
    text-align: center;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  color: white;
`;

export const Span = styled.span`
  display: block;
`;

export const Image = styled.img`
  width: 30px;
  margin: 10px;
  filter: invert(1);
`;
