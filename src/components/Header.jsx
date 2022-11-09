import logo from "../assets/logo.png";
import "../styles/Header.css"

function Header() {
  return (
    <div className="flex_head">
      <img src={logo} alt="Logo de Kasa" />
      <ul className="flex_nav">
        <li>Accueil</li>
        <li>A Propos</li>
      </ul>
    </div>
  );
}

export default Header;
