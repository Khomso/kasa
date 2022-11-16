import { useState } from "react";
import "../styles/CollapseCard.css";
import arrowClose from "../assets/arrowClose.png";
import arrowOpen from "../assets/arrowOpen.png";

function CollapseCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div>
      <div className="head-card">
        <p>{props.title}</p>
        <div className="collapse-center">
          <img
            src={arrowOpen}
            alt="flèche vers le bas"
            onClick={() => setIsOpen(false)}
          ></img>
        </div>
      </div>
      <div className="boby-card">
        <p>{props.content}</p>
      </div>
    </div>
  ) : (
    <div className="head-card">
      <p>{props.title}</p>
      <div className="collapse-center">
        <img
          src={arrowClose}
          alt="flèche vers le haut"
          onClick={() => setIsOpen(true)}
        ></img>
      </div>
    </div>
  );
}

export default CollapseCard;
