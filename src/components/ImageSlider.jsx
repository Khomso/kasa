import React from "react";
import { useState } from "react";

const ImageSlider = ({ slides }) => {
  // const img = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };
  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div style={sliderStyles}>
      <div style={leftArrow} onClick={goToPrevious}>
        v
      </div>
      <div style={rightArrow} onClick={goToNext}>
        v
      </div>
      <div style={slideStyles}></div>
      <div styles={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} style={dotStyles} onClick= {goToSlide(slideIndex)} >.....</div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
