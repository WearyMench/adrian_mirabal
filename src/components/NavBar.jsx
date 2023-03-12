import "./NavBar.styles.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav" id="nav">
      <ul>
        <li>
          <NavLink to="/adrian_mirabal/">Home</NavLink>
        </li>
        <li>
          <a href="/adrian_mirabal/#about">About</a>
        </li>
        <li>
          <a href="/adrian_mirabal/#skills">Skills</a>
        </li>
        <li>
          <NavLink to="/adrian_mirabal/works">Works</NavLink>
        </li>
        <li>
          <NavLink to="/adrian_mirabal/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
