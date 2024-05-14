import { useScroll } from "framer-motion";
import classes from "./DropDownElement.module.scss";
import { useState } from "react";
import { useContext } from "react";
import { StateContext } from "../../context/StateContext";
import { DataContext } from "../../context/DataContext";
import { ThemeContext } from "../../context/ThemeContext";

export const DropDownElement = (props) => {
  const { theme } = useContext(ThemeContext);
  const setShow = useContext(StateContext).setShowDropDown;
  const setCityName = useContext(DataContext).setCityName;

  const { setCoords } = useContext(DataContext);

  const onClickHandler = () => {
    setShow(false);
    setCoords(props.data.lat, props.data.lon);
    setCityName(trimCityName(props.data.name));
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
