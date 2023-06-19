import "./PlanetPage.css";
import React from "react";
import axios from "axios";
import PlanetList from "../../Components/PlanetList/PlanetList";
import PlanetDetails from "../../Components/PlanetDetails/PlanetDetails";
import Button from "../../Components/Button/Button";
import { useState, useEffect } from "react";

const PlanetPage = (props) => {
  const [planet, setPlanet] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isPlanetDetailsShown, setIsPlanetDetailsShown] = useState(true);

  const onSelectPlanet = (planetIndex) => {
    setSelectedPlanet(planet[planetIndex]);
  };

  useEffect(() => {
    console.log("Component mounted");
    fetchPlanets();
  }, [pageNumber]);

  const fetchPlanets = async () => {
    const response = await axios.get(
      `https://swapi.dev/api/planets/?page=${pageNumber}`
    );
    setPlanet(response.data.results);
  };

  const nextClick = () => {
    if (pageNumber >= 6) return;
    setPageNumber(pageNumber + 1);

    () => fetchPlanets;
  };

  const previousClick = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);

    () => fetchPlanets;
  };

  return (
    <>
      <div className="info-btns">
        <>
          <h3>
            Planet List: <br />
          </h3>
          <p>Page No. {pageNumber} of 6</p>
        </>
        <>
          <Button
            btnText="Previous Page"
            onBtnClick={previousClick}
            btnStyle={{ visibility: pageNumber === 1 ? "hidden" : "visible" }}
          />
          <Button
            btnText="Next Page"
            onBtnClick={nextClick}
            btnStyle={{ visibility: pageNumber >= 6 ? "hidden" : "visible" }}
          />
        </>
      </div>
      <div className="PlanetPage">
        <PlanetList
          planet={planet}
          selectedPlanet={selectedPlanet}
          onSelectPlanet={onSelectPlanet}
        />
        {isPlanetDetailsShown && (
          <PlanetDetails selectedPlanet={selectedPlanet} />
        )}
      </div>
    </>
  );
};

export default PlanetPage;
