import React from "react";
import { useLoaderData } from "react-router-dom";
import CollapseCard from "../components/CollapseCard";
import RatingStar from "../components/RatingStar";
import Tags from "../components/Tags";
import "../styles/Logement.css";
// import SlideShow from "../components/Slide";
// import ImageSlider from "../components/ImageSlider";

const Logement = () => {
  const house = useLoaderData();
  // const slides = [
  //   <p>photo a mettre ici</p>
  // ];

  return (
    <div>
      {/* <div className="containerStyles">
        <ImageSlider slides={slides} />
      </div> */}

      {/* <SlideShow pictures={house.pictures} /> */}
      <div className="logement-flex">
        <div>
          <h1>{house.title}</h1>
          <p>{house.location}</p>
        </div>
        <div className="avatar-flex">
          <h2>{house.host.name}</h2>
          <img
            className="img-logement"
            src={house.host.picture}
            alt="Portrait de la personne"
          />
        </div>
      </div>
      <div className="logement-flex">
        <Tags tags={house.tags} />
        <RatingStar rating={house.rating} />
      </div>
      <div className="collapse-flex">
        <div className="logement-size">
          <CollapseCard title="Description" content={house.description} />
        </div>
        <div className="logement-size">
          <CollapseCard title="Equipements" content={house.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Logement;
