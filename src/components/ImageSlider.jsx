import React, { useState } from "react";
import "../styles/ImageSlider.css"

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
      <button className="prev" onClick={slidePrev}>
        &lt;
      </button>
      <button className="next" onClick={slideNext}>
        &gt;
      </button>
      <p className="count">
        {currentImageIndex + 1} / {slides.length}
      </p>
    </div>
  );
};

export default ImageSlider;
