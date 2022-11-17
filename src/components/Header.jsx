import logo from "../assets/logo.png";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const getActiveClassName = ({ isActive }) =>
    isActive ? "active-link nav_li" : "nav_li";
  return (
    <div className="flex_head">
      <img className="media-logo" src={logo} alt="Logo de Kasa" />
      <ul className="flex_nav">
        <NavLink className={getActiveClassName} to="/">
          Accueil
        </NavLink>
        <NavLink className={getActiveClassName} to="/about">
          A Propos
        </NavLink>
      </ul>
    </div>
  );
}

export default Header;
