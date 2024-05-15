import React, { useState, useContext, useRef } from "react";
import classes from "./Header.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import sun_logo from "../../assets/sun_logo.png";
import menu from "../../assets/menu.png";
import { StateContext } from "../../context/StateContext";
import { SearchingForm } from "./SearchingForm";
import { SearchingMenu } from "../Mobile/SearchingMenu";


const Header = () => {
  const { theme } = useContext(ThemeContext);

  const {mobileSearch, setMobileSearch} = useContext(StateContext)

  const mobileSearchHandler = () => {
    setMobileSearch(true)
  }

  return (
    <>
      <header className={`${theme} ${classes.header}`}>
        <div className={classes.logo}>
          <img src={sun_logo} className={classes["logo-image"]} alt="logo" />
          {/* <img src={menu} className={classes["menu-image"]} alt="menu" onClick={mobileSearchHandler}/> */}
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
