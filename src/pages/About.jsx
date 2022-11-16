import React from "react";
import BannerMount from "../components/BannerMount";
import CollapseCard from "../components/CollapseCard";
import "../styles/About.css";

const fiabilité =
  "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les information sont régulièrement vérifiés par nos équipes.";
const respect =
  "La bienvaillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme";

const service =
  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question";
const sécurité =
  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,chaque logement correspond aus critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes ";
const About = () => {
  return (
    <div>
      <BannerMount />
      <div className="collapse-about">
        <CollapseCard className="" title="Fiabilité" content={fiabilité} />
        <CollapseCard title="Respect" content={respect} />
        <CollapseCard title="Service" content={service} />
        <CollapseCard title="Sécurité" content={sécurité} />
      </div>
    </div>
  );
};

export default About;
