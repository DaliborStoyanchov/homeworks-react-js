import React from "react";
import "./PlanetList.css";
import PlanetListItem from "../PlanetListItem/PlanetListItem";

class PlanetList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {!this.props.planet.length && <div className="Loading">Loading...</div>}
        {!!this.props.planet.length && (
          <ul className="PlanetList">
            {this.props.planet.map((planet, planetIndex) => (
              <PlanetListItem
                onSelectPlanet={this.props.onSelectPlanet}
                isSelected={this.props.selectedPlanet?.name === planet.name}
                key={planet.name + planetIndex}
                name={planet.name}
                planetIndex={planetIndex}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default PlanetList;
