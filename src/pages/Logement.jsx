import React from "react";
import { useLoaderData } from "react-router-dom";
import CollapseCard from "../components/CollapseCard";
import "../styles/Logement.css";
// import SlideShow from "../components/Slide";
// import ImageSlider from "../components/ImageSlider";

const Logement = () => {
  const house = useLoaderData();
  console.log(house);
  // const slides = [];

  // const containerStyles = {
  //     with: "500px",
  //     height: "280px",
  //     margin : "0 auto",
  // }

  return (
    <div>
      {/* <div style={containerStyles}>
              <ImageSlider slides= {slides} />  
            </div> */}

      {/* <SlideShow pictures={house.pictures} /> */}
      <div className="logement-flex">
        <div>
          <h1>{house.title}</h1>
          <p>{house.location}</p>
        </div>
        <div className="logement-flex">
          <h2>{house.host.name}</h2>
          <img
            className="img-logement"
            src={house.host.picture}
            alt="Portrait de la personne"
          />
        </div>
      </div>
      <div className="logement-flex">
        <ul className="categories">
            <li>{house.tags}</li>
            <li>{house.tags}</li>
        </ul>
        <div>{house.rating}</div>
      </div>
      <div className="collapse-flex">
        <CollapseCard className="logement-size" title="description" content={house.description} />
        <CollapseCard className="logement-size" title="équipements" content={house.equipments} />
      </div>
    </div>
  );
};

export default Logement;
