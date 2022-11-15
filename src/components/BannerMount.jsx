import mount from "../assets/mount.png";
import "../styles/BannerMount.css";

function Mount() {
  return (
    <div className="flex-centre">
      <img className="img-radius" src={mount} alt="Paysage de montagne" />
    </div>
  );
}

export default Mount;
