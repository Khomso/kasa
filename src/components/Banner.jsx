import coastline from "../assets/coastline.png";
import "../styles/Banner.css";

function Banner() {
  return (
    <div
      className="flex_banner"
      style={{
        background: `url(${coastline}) center/cover no-repeat`,
      }}
    >
      <div className="banner-title">
        <h1 className="media-title">Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Banner;
