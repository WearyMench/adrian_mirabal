import styled, { keyframes } from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 200px;
  margin-top: 12%;
  margin-bottom: 230px;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: white;
`;

export const Span = styled.span`
  display: block;
  color: #00b2df;
  font-family: "Tilt Prism";
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Image = styled.img`
  width: 450px;
  border-radius: 30%;
`;

export const Blob = styled.img`
  width: 430px;
  animation: ${rotate} 5s linear infinite;
  position: absolute;
  top: 140px;
  z-index: -1;
`;

export const AboutWrapper = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 130px;
  background-color: #3d3c3cc2;
`;
