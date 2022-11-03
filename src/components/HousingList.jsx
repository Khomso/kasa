import { accommodationSheet } from "../data/accommodation";
import "../styles/HousingList.css";

function HousingList() {
  return (
    <div>
        <ul className="flex">
      {accommodationSheet.map((house) => (
        <div className="card" key={house.id}>
          <img className="img" src={house.cover} alt="logement" />
          <p>{house.title}</p>
        </div>
      ))}
    </ul>
    </div>
    
  );
}

export default HousingList;
