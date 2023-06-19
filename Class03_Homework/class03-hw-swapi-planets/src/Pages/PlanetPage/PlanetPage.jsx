import "./PlanetPage.css";
import React from "react";
import axios from "axios";
import PlanetList from "../../Components/PlanetList/PlanetList";
import PlanetDetails from "../../Components/PlanetDetails/PlanetDetails";
import Button from "../../Components/Button/Button";

class PlanetPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: [],
      selectedPlanet: null,
      pageNumber: 1,
      isPlanetDetailsShown: true,
    };
  }

  componentDidMount() {
    console.log("Component mounted");
    this.fetchPlanets();
  }

  fetchPlanets() {
    const { pageNumber } = this.state;

    axios
      .get(`https://swapi.dev/api/planets/?page=${pageNumber}`)
      .then((response) => {
        this.setState({
          planet: response.data.results,
        });
      });
  }

  nextClick() {
    this.setState(
      (prevState) => {
        if (prevState.pageNumber >= 6) return prevState;

        return { pageNumber: prevState.pageNumber + 1 };
      },

      () => {
        this.fetchPlanets();
      }
    );
  }

  previousClick() {
    this.setState(
      (prevState) => {
        if (prevState.pageNumber === 1) return prevState;

        return { pageNumber: prevState.pageNumber - 1 };
      },

      () => {
        this.fetchPlanets();
      }
    );
  }

  onSelectPlanet(planetIndex) {
    this.setState((prevState) => ({
      selectedPlanet: prevState.planet[planetIndex],
    }));
  }

  render() {
    return (
      <>
        <div className="info-btns">
          <>
            <h3>
              Planet List: <br />
            </h3>
            <p>Page No. {this.state.pageNumber} of 6</p>
          </>
          <>
            <Button
              btnText="Previous Page"
              onBtnClick={this.previousClick.bind(this)}
            />
            <Button
              btnText="Next Page"
              onBtnClick={this.nextClick.bind(this)}
            />
          </>
        </div>
        <div className="PlanetPage">
          <PlanetList
            planet={this.state.planet}
            selectedPlanet={this.state.selectedPlanet}
            onSelectPlanet={this.onSelectPlanet.bind(this)}
          />
          {this.state.isPlanetDetailsShown && (
            <PlanetDetails selectedPlanet={this.state.selectedPlanet} />
          )}
        </div>
      </>
    );
  }
}

export default PlanetPage;
