import React, { useState, useContext, useRef } from "react";
import classes from "./Header.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import sun_logo from "../../assets/sun_logo.png";
import { StateContext } from "../../context/StateContext";
import { SearchingForm } from "./SearchingForm";


const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <header className={`${theme} ${classes.header}`}>
        <div className={classes.logo}>
          <img src={sun_logo} className={classes["logo-image"]} alt="logo" />
          <h1 className={classes.h1}>Weather App</h1>
        </div>
        <div className={classes["dont-show-on-mobile"]}>
          <SearchingForm />
        </div>
        {/* {mobileSearch && <SearchingMenu/>} */}
      </header>
    </>
  );
};

export default Header;
