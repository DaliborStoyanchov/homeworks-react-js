import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import PlanetPage from "./Pages/PlanetPage/PlanetPage";

function App() {
  const appTitle = "StarWars API Planets App";

  const navbarLinkData = [
    {
      text: "Home",
      link: "/home",
    },
    {
      text: "About Us",
      link: "/about-us",
    },
    {
      text: "Planets",
      link: "/planets",
    },
    {
      text: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="App">
      <Header navbarLinkData={navbarLinkData} appTitle={appTitle} />
      <main>
        <PlanetPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
