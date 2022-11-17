import { accommodationSheet } from "../data/accommodation";
import "../styles/HousingList.css";
import { NavLink } from "react-router-dom";

function HousingList() {
  return (
    <div className="flex-centre">
      <ul className="flex-house">
        {accommodationSheet.map((house) => (
          <div className="card" key={house.id}>
            <NavLink to={`/logement/${house.id}`}>
              <img className="img" src={house.cover} alt="logement" />
              <p className="title-in-img">{house.title}</p>
            </NavLink>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default HousingList;
