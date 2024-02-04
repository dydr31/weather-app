import React, { useState, useContext } from "react";
import classes from "./Header.module.scss";
import { ThemeContext } from "../context/ThemeContext";
import placeholder from "../assets/navigation.png";
import sun_logo from "../assets/sun_logo.png";
import menu from '../assets/menu.png'

function validateCity(str) {
  str = str.trim().toLowerCase();
  str = str.slice(0, 1).toUpperCase() + str.slice(1);
  return str;
}

const Header = (props) => {
  const [city, setCity] = useState("");
  const [chosenCity, setChosenCity] = useState("Moscow");

  const onChangeCityHandler = (event) => {
    setCity(event.target.value);
  };

  const sumbitCityHandler = (event) => {
    event.preventDefault();
    setCity(validateCity(city));
    props.city(validateCity(city));
    setChosenCity(validateCity(city));
  };

  const [coords, setCoords] = useState("");

  function getPosition() {
    navigator.geolocation.getCurrentPosition((data) => {
      setCoords({
        latitude: Math.round(data.coords.latitude * 100) / 100,
        longitude: Math.round(data.coords.longitude * 100) / 100,
      });
    });
  }

  if (coords != "") {
    getCityName();
  }

  async function getCityName() {
    const response = await fetch(
      // "http://api.positionstack.com/v1/reverse?access_key=4dc172c7fa828ee07eed13c50dd6adae&query=" +
      
      'https://geocode.maps.co/reverse?lat=' +
        coords.latitude +
        '&lon=' + 
        coords.longitude
    );
    const result = await response.json();
    console.log(result)
    // props.city(result.address.city)
    // return result.address.city
    // console.log(result.data[0].county)
    // props.city(result.data[0].county);
    // return result.data[0].county;
  }

  const { theme } = useContext(ThemeContext);

  const menuClickHandle = data => {
    props.menu(true)
  }

  return (
    <header className={`${theme} ${classes.header}`}>

      <div className={classes.logo}>
        <img src={sun_logo} className={classes["logo-image"]} alt='logo'/>
        <h1 className={classes.h1}>Weather App</h1>
      </div>

      <form onSubmit={sumbitCityHandler}>
        <input
          className={classes["text-input"]}
          type="text"
          placeholder="Search"
          value={city}
          onChange={onChangeCityHandler}
          required
        />
        {props.showError && <p className={classes["error-message-placeholder"]}>Error: Invalid city name</p>}
        {/* <button onClick={getPosition} className="nav-button">
          <img src={placeholder} className={`${"nav-image"}`} />
        </button> */}
      </form>
    </header>
  );
};

export default Header;
