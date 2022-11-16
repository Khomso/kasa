import coastline from "../assets/coastline.png"
import "../styles/Banner.css"

function Banner() {
  return (
    <div className="flex_banner">
        <img className="img-radius" src={coastline} alt="Paysage de litoral"/>
        <h1 className="absolute_position">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;