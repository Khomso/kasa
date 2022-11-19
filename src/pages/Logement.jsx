import React from "react";
import { useLoaderData } from "react-router-dom";
import CollapseCard from "../components/CollapseCard";
import RatingStar from "../components/RatingStar";
import Tags from "../components/Tags";
import "../styles/Logement.css";
import ImageSlider from "../components/ImageSlider";


const Logement = () => {
  const house = useLoaderData();
  
  return (
    <div>
      <ImageSlider slides={house.pictures} />

      <div className="logement-flex">
        <div>
          <div>
            <h1>{house.title}</h1>
            <p>{house.location}</p>
          </div>
          <Tags tags={house.tags} />
        </div>
        <div className="media-responsive">
          <div className="avatar-flex">
            <h2>{house.host.name}</h2>
            <img
              className="img-logement"
              src={house.host.picture}
              alt="Portrait de la personne"
            />
          </div>
          <RatingStar rating={house.rating} />
        </div>
      </div>
      <div className="collapse-flex">
        <div className="logement-size">
          <CollapseCard title="Description">
            <p>{house.description}</p>
          </CollapseCard>
        </div>
        <div className="logement-size">
          <CollapseCard title="Equipements">
            <ul>
              {house.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </CollapseCard>
        </div>
      </div>
    </div>
  );
};

export default Logement;
