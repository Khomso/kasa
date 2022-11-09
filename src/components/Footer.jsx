import logo from "../assets/logo.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="flex_center">
      <div className="flex_colum">
        <img className="filter" src={logo} alt="Logo de Kasa" />
        <p> c 2020 Kasa. All rights reserved </p>
      </div>
      
    </div>
  );
}

export default Footer;
