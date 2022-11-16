import React from "react";
import BannerMount from "../components/BannerMount";
import CollapseCard from "../components/CollapseCard";

const title = "Fiabilité";

const description =
  "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les information sont régulièrement vérifiés par nos équipes.";

const About = () => {
  return (
    <div>
      <BannerMount />
      <CollapseCard title={title} content={description}/>
    </div>
  );
};

export default About;
