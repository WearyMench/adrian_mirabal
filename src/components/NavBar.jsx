import "./NavBar.styles.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/adrian_mirabal/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/adrian_mirabal/about">About</NavLink>
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
