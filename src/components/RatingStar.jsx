import React from "react";
import redStar from "../assets/redStar.png";
import silverStar from "../assets/silverStar.png";
import "../styles/RatingStar.css";

const Rating = (props) => {
    const stars = []
  
    for (let index = 0; index < 5; index++) {
      if (index < props.rating) {
        stars.push(<img key={`star_${index}`} src={redStar} alt="etoile rouge"  />)
      } else {
        stars.push(<img key={`star_${index}`} src={silverStar} alt="etoile grise" />)
      }
    }
    return (
      <div className="rating-star">
        {stars}
      </div>
    )
  }


export default Rating;
