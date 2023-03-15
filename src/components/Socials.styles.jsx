import styled from "styled-components";

export const LogoWrapper = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;

  @media (max-width: 700px) {
    position: static;
    height: 20vh;
  }
`;

export const Logo = styled.img`
  width: 30px;
  margin: 10px;
  filter: invert(1);
`;
