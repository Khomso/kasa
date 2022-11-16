import { useState } from "react";
import "../styles/CollapseCard.css";
import arrowClose from "../assets/arrowClose.png";
import arrowOpen from "../assets/arrowOpen.png";

function CollapseCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div>
      <div className="head-card" onClick={() => setIsOpen(false)}>
        <p>{props.title}</p>
        <div className="collapse-center">
          <img
            src={arrowOpen}
            alt="flèche vers le bas"
            
          ></img>
        </div>
      </div>
      <div className="boby-card">
        <p>{props.content}</p>
      </div>
    </div>
  ) : (
    <div className="head-card" onClick={() => setIsOpen(true)}>
      <p>{props.title}</p>
      <div className="collapse-center">
        <img
          src={arrowClose}
          alt="flèche vers le haut"
          
        ></img>
      </div>
    </div>
  );
}

export default CollapseCard;
