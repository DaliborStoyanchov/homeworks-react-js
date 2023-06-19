import "./PlanetList.css";
import PlanetListItem from "../PlanetListItem/PlanetListItem";

const PlanetList = (props) => {
  return (
    <>
      {!props.planet.length && <div className="Loading">Loading...</div>}
      {!!props.planet.length && (
        <ul className="PlanetList">
          {props.planet.map((planet, planetIndex) => (
            <PlanetListItem
              onSelectPlanet={props.onSelectPlanet}
              isSelected={props.selectedPlanet?.name === planet.name}
              key={planet.name + planetIndex}
              name={planet.name}
              planetIndex={planetIndex}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default PlanetList;
