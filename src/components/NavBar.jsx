import {
  NavbarNavLink,
  NavbarA,
  Navi,
  ButtonNv,
  ExtendedNavbarA,
  ExtendedNavbarNavLink,
  NavBarUL,
  ExtendedNavBarUL,
} from "./NavBar.styles";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function NavBar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExtendNavbar(false);
  }, [location]);

  return (
    <Navi id="nav" extend={extendNavbar}>
      <NavBarUL>
        <li>
          <NavbarNavLink to="/adrian_mirabal/">Home</NavbarNavLink>
        </li>
        <li>
          <NavbarA href="/adrian_mirabal/#about">About</NavbarA>
        </li>
        <li>
          <NavbarA href="/adrian_mirabal/#skills">Skills</NavbarA>
        </li>
        <li>
          <NavbarNavLink to="/adrian_mirabal/works">Works</NavbarNavLink>
        </li>
        <li>
          <NavbarNavLink to="/adrian_mirabal/contact">Contact</NavbarNavLink>
        </li>
        <ButtonNv
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
        </ButtonNv>
      </NavBarUL>
      {extendNavbar && (
        <ExtendedNavBarUL>
          <li>
            <ExtendedNavbarNavLink to="/adrian_mirabal/">
              Home
            </ExtendedNavbarNavLink>
          </li>
          <li>
            <ExtendedNavbarA href="/adrian_mirabal/#about">
              About
            </ExtendedNavbarA>
          </li>
          <li>
            <ExtendedNavbarA href="/adrian_mirabal/#skills">
              Skills
            </ExtendedNavbarA>
          </li>
          <li>
            <ExtendedNavbarNavLink to="/adrian_mirabal/works">
              Works
            </ExtendedNavbarNavLink>
          </li>
          <li>
            <ExtendedNavbarNavLink to="/adrian_mirabal/contact">
              Contact
            </ExtendedNavbarNavLink>
          </li>
        </ExtendedNavBarUL>
      )}
    </Navi>
  );
}

export default NavBar;
