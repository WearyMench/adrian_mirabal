import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navi = styled.nav`
  width: ${(props) => props.extend && "100%"};
  height: ${(props) => (props.extend ? "100vh" : "55px")};
  background-color: ${(props) => (props.extend ? "#00b2df7d" : "transparent")};
  position: absolute;
  right: 40px;
  top: 20px;
`;

export const NavBarUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
export const ExtendedNavBarUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 700px) {
    display: none;
  }

  &:hover {
    text-decoration: underline #00b2df;
  }
`;

export const NavbarA = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 700px) {
    display: none;
  }

  &:hover {
    text-decoration: underline #00b2df;
  }
`;
export const ExtendedNavbarNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline #00b2df;
  }
`;

export const ExtendedNavbarA = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline #00b2df;
  }
`;

export const ButtonNv = styled.button`
  width: 70px;
  background: none;
  color: white;
  border: none;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;
