import styled, { createGlobalStyle } from "styled-components";
import pattern from "./assets/y-so-serious.png";

export const Global = createGlobalStyle`
  body{
    margin: 0px;
    padding: 0px;
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url(${pattern});
    color: white;
    font-family: 'Playfair Display', serif;
  }
`;
