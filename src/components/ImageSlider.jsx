import React, { useState } from "react";
import "../styles/ImageSlider.css";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";

const ImageSlider = (props) => {
  const { slides } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slidePrev = () => {
    setCurrentImageIndex((index) => {
      const nextIndex = index - 1;

      if (nextIndex < 0) {
        return slides.length - 1;
      }
      return nextIndex;
    });
  };
  const slideNext = () => {
    setCurrentImageIndex((index) => {
      const nextIndex = index + 1;
      if (nextIndex >= slides.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  return (
    <div
      className="slide"
      style={{
        background: `url(${slides[currentImageIndex]}) center/cover no-repeat`,
      }}
    >
      {slides.length > 1 && (
        <React.Fragment>
          <button className="prev">
            <img
              onClick={slidePrev}
              src={arrowLeft}
              alt="fleche pointant vers la gauche"
            />
          </button>
          <button className="next">
            <img
              onClick={slideNext}
              src={arrowRight}
              alt="fleche pointant vers la droite"
            />
          </button>
          <p className="count">
            {currentImageIndex + 1} / {slides.length}
          </p>
        </React.Fragment>
      )}
    </div>
  );
};

export default ImageSlider;
