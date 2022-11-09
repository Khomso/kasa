import { useState } from "react";

function CollapseCard() {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div>
      <div>
          <p>
            Fiabilité
          </p>
      </div>
      <div>
        <button onClick={() => setIsOpen(false)}>fermer</button>
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale.Les
          photos sont conformes aux logements, et toutes les information sont
          régulièrement vérifiés par nos équipes
        </p>
      </div>
    </div>
  ) : (
    <button onClick={() => setIsOpen(true)}>Ouvrir</button>
  );
}

export default CollapseCard;
