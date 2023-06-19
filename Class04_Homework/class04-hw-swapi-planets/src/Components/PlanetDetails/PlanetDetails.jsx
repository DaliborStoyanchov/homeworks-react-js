import "./PlanetDetails.css";

const PlanetDetails = (props) => {
  return (
    <div className="PlanetDetails">
      <div className="details-container">
        {!props.selectedPlanet && (
          <div className="placeholder-container">No Planet Selected</div>
        )}
        {props.selectedPlanet && (
          <>
            <div>
              <strong>Name: </strong>
              {props.selectedPlanet.name}
            </div>
            <div>
              <strong>Rotation Period: </strong>
              {props.selectedPlanet.rotation_period}
            </div>
            <div>
              <strong>Orbital Period: </strong>
              {props.selectedPlanet.orbital_period}
            </div>
            <div>
              <strong>Diameter: </strong>
              {props.selectedPlanet.diameter}
            </div>
            <div>
              <strong>Climate: </strong>
              {props.selectedPlanet.climate}
            </div>
            <div>
              <strong>Gravity: </strong>
              {props.selectedPlanet.gravity}
            </div>
            <div>
              <strong>Terrain: </strong>
              {props.selectedPlanet.terrain}
            </div>
            <div>
              <strong>Surface Water: </strong>
              {props.selectedPlanet.surface_water}
            </div>
            <div>
              <strong>Population: </strong>
              {props.selectedPlanet.population}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlanetDetails;
