import styled, { createGlobalStyle } from "styled-components";
import pattern from "./assets/y-so-serious.png";

export const Global = createGlobalStyle`
  body{
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url(${pattern});
    color: white;
    font-family: 'Playfair Display', serif;
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

export const Logo = styled.img`
  width: 30px;
  margin: 10px;
  filter: invert(1);
`;
