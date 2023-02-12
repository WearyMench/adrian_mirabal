import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body{
    margin: 0;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    background-color: black;
    color: white;
    text-align: center;
    justify-content: center;
    font-family: 'Playfair Display', serif;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  color: white;
`;

export const Span = styled.span`
  display: block;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

export const Image = styled.img`
  width: 30px;
  margin: 10px;
  filter: invert(1);
`;
