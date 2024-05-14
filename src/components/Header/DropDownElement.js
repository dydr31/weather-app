import { useScroll } from "framer-motion";
import classes from "./DropDownElement.module.scss";
import { useState } from "react";
import { useContext } from "react";
import { StateContext } from "../../context/StateContext";
import { DataContext } from "../../context/DataContext";
import { ThemeContext } from "../../context/ThemeContext";

export const DropDownElement = (props) => {
  const { theme } = useContext(ThemeContext);
  const {setShowDropDown, setClearCityInput } = useContext(StateContext);
  const {setCityName} = useContext(DataContext);

  const { setCoords } = useContext(DataContext);

  const onClickHandler = () => {
    setShowDropDown(false);
    setCoords(props.data.lat, props.data.lon);
    setCityName(trimCityName(props.data.name));
    setClearCityInput(true)
  };

  const trimCityName = (name) => {
    let index = name.indexOf(",");
    let trimmed = name.slice(0, index);
    return trimmed;
  };

  return (
    <>
      <li
        onClick={onClickHandler}
        className={`${classes.li} ${classes[theme]}`}
      >
        <p>{props.data.name}</p>
      </li>
    </>
  );
};
