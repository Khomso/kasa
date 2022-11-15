import { useState } from "react";
import "../styles/CollapseCard.css";

function CollapseCard() {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div>
      <div className="head-card">
        <p>Fiabilité</p>
        <button onClick={() => setIsOpen(false)}>fermer</button>
      </div>
      <div className="boby-card">
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les information sont
          régulièrement vérifiés par nos équipes.
        </p>
      </div>
    </div>
  ) : (
    <div className="head-card">
      <p>Fiabilité</p>
      <button onClick={() => setIsOpen(true)}>Ouvrir</button>
    </div>
  );
}

export default CollapseCard;
