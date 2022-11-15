import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const SlideShow = (props) => {
  return (
    <Slide className="slide-container" {...properties}>
      {props.pictures.map((picture) => (
        <div className="each-slide" key={picture}>
          <img className="img_size" src={picture} alt="Piece de logement" />
        </div>
      ))}
    </Slide>
  );
};

export default SlideShow;
