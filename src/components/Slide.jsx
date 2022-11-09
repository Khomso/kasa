import { Slide } from "react-slideshow-image";
import { accommodationSheet } from "../data/accommodation";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const SlideShow = () => {
  return (
    <Slide className="containerslide" {...properties}>
      <div>
        <ul>
          {accommodationSheet.map((slide) => (
            //   <div key={house.id}>
            <div key={slide.id}>
              <img
                className="img_size"
                src={slide.pictures}
                alt="Piece de logement"
              />
            </div>
          ))}
        </ul>
      </div>
    </Slide>
  );
};

export default SlideShow;
