import "./NavBar.styles.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/portfolio/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/works">Works</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
