import React, { useState, useContext, useRef } from "react";
import classes from "./Header.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import placeholder from "../../assets/navigation.png";
import sun_logo from "../../assets/sun_logo.png";
import menu from '../../assets/menu.png'
import { DataContext } from "../../context/DataContext";
import { getCities } from "../../util/functions";

function validateCity(str) {
  str = str.trim().toLowerCase();
  str = str.slice(0, 1).toUpperCase() + str.slice(1);
  return str;
}

const Header = (props) => {
  const { theme } = useContext(ThemeContext);

  const cityRef = useRef(null)

  const { setCityName} = useContext(DataContext)

  const [data, setData] = useState([{}])

  const sumbitCityHandler = async (event) => {
    event.preventDefault();
    setCityName(validateCity(cityRef.current.value))
    let res = await getCities(validateCity(cityRef.current.value))
    setData(res)
  };



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
          ref={cityRef}
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
