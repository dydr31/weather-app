import React, { useState, useContext, useRef } from "react";
import classes from "./Header.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import sun_logo from "../../assets/sun_logo.png";
import { DataContext } from "../../context/DataContext";
import { getCities } from "../../util/functions";
import { DropDown } from "./DropDown";
import { StateContext } from "../../context/StateContext";

function validateCity(str) {
  str = str.trim().toLowerCase();
  str = str.slice(0, 1).toUpperCase() + str.slice(1);
  return str;
}

const Header = () => {
  const { theme } = useContext(ThemeContext);

  const cityRef = useRef(null);

  const { setShowDropDown } = useContext(StateContext);

  const [data, setData] = useState([{}]);

  const sumbitCityHandler = async (event) => {
    event.preventDefault();
    let res = await getCities(validateCity(cityRef.current.value));
    setData(res);
    setShowDropDown(true);
  };

  return (
    <>
      <header className={`${theme} ${classes.header}`}>
        <div className={classes.logo}>
          <img src={sun_logo} className={classes["logo-image"]} alt="logo" />
          <h1 className={classes.h1}>Weather App</h1>
        </div>

        <form onSubmit={sumbitCityHandler} className={classes.elements}>
          <input
            className={`${classes["text-input"]} ${classes[theme]}`}
            type="text"
            placeholder="Search"
            ref={cityRef}
            required
          />
          <DropDown data={data} />
        </form>
      </header>
    </>
  );
};

export default Header;
