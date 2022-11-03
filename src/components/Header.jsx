import logo from "../assets/logo.png";
function Header() {
  return (
    <div>
      <img src={logo} alt="Logo de Kasa" />
      <ul>
        <li>Accueil</li>
        <li>A Propos</li>
      </ul>
    </div>
  );
}

export default Header;
