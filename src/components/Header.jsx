import logo from "../assets/logo.png";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex_head">
      <img src={logo} alt="Logo de Kasa" />
      <ul className="flex_nav">
        <NavLink to="/">
          <li className="nav_li">Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li className="nav_li">A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Header;
