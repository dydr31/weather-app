import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Weekly from "./components/Weekly/Weekly";
import React, { useState, useEffect, useContext } from "react";
import Daily from "./components/Daily/Daily";
import { ThemeContext } from "./context/ThemeContext";
import SwitchTheme from "./components/UI/SwitchTheme";
import { StateContext } from "./context/StateContext";
import SwitchState from "./components/UI/SwichState";

function App() {
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(StateContext);

  const [city, setCity] = useState("Moscow");

  const cityHandler = (city) => {
    setCity(city);
    getCityCoords();
  };

  const [coords, setCoords] = useState({
    latitude: 55.741469,
    longitude: 37.615561,
  });

  const [showError, setShowError] = useState(false);
  async function getCityCoords() {
    const response = await fetch(
      "https://geocode.maps.co/search?q=" + city
    );
    const data = await response.json();

    if (data.length === 0) {
      setShowError(true);
    } else {
      setShowError(false);
      setCoords({ latitude: data[0].lat, longitude: data[0].lon });
    }
  }

  useEffect(() => {
    getCityCoords();
  }, [city]);

  const [units, setUnits] = useState(true);
  const unitsHandler = (isC) => {
    setUnits(isC);
  };



  return (
    <div className={`${classes[theme]} ${classes.background}`}>
      <Header
        city={cityHandler}
        isC={unitsHandler}
        showError={showError}
      />
      {!showError && <SwitchState/>}

      {showError === false && state === "weekly" && (
        <Weekly isC={units} city={city} coords={coords} />
      )}

      {showError === false && state === "daily" && <Daily coords={coords} />}

      <SwitchTheme />
      <footer className={classes.footer}>
        <p>copyright by copyright</p>
        <a
          href="https://www.flaticon.com/free-icons"
          title="icons"
          className="link"
        >
          Icons created by Freepik - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default App;
