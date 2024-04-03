import { useScroll } from "framer-motion";
import classes from "./DropDownElement.module.scss";
import { useState } from "react";
import { useContext } from "react";
import { StateContext } from "../../context/StateContext";
import { DataContext } from "../../context/DataContext";

export const DropDownElement = (props) => {
  const setShow = useContext(StateContext).setShowDropDown;
  const setCityName = useContext(DataContext).setCityName

  const { setCoords } = useContext(DataContext)

  const onClickHandler = () => {
   setShow(false)
   setCoords(props.data.lat, props.data.lon)
   setCityName(trimCityName(props.data.name))

  };

  const trimCityName = (name) => {
    let index = name.indexOf(',')
    let trimmed = name.slice(0,index)
    return trimmed
  }

  const dataCtx = useContext(DataContext)
  return (
    <>{console.log(dataCtx)}
    <li onClick={onClickHandler} className={classes.li}>
      <p>{props.data.name}</p>
    </li>
    </>
  );
};
