import React, { useContext } from "react";
import arrow from "../../assets/right-arrow.png";
import { ThemeContext } from "../../context/ThemeContext";
import classes from './Wind.module.scss'


const Wind = props => {
    const {theme} = useContext(ThemeContext)

    let style={}
  let dir = props.dir;
  let wind_dir = "";
  if (dir <= 22.5 || dir > 337.5) {
    wind_dir = "N";
    style = {
      transform: "rotateZ(90deg)",
    };
  } else if (dir > 22.5 && dir <= 67.5) {
    wind_dir = "NE";
    style = {
      transform: "rotateZ(135deg)",
    };
  } else if (dir > 67.5 && dir <= 112.5) {
    wind_dir = "E";
    style = {
      transform: "rotateZ(180deg)",
    };
  } else if (dir > 112.5 && dir <= 157.5) {
    wind_dir = "SE";
    style = {
      transform: "rotateZ(225deg)",
    };
  } else if (dir > 157.5 && dir <= 202.5) {
    wind_dir = "S";
    style = {
      transform: "rotateZ(270deg)",
    };
  } else if (dir > 202.5 && dir <= 247.5) {
    wind_dir = "SW";
    style = {
      transform: "rotateZ(315deg)",
    };
  } else if (dir > 247.5 && dir <= 292.5) {
    wind_dir = "W";
  } else if (dir > 292.5 && dir <= 337.5) {
    wind_dir = "NW";
    style = {
      transform: "rotateZ(45deg)",
    };
  }

  let image = <img src={arrow} className={`${classes["arrow-image"]} ${classes[theme]}`} style={style} alt='arrow'/>;
    return (
        <React.Fragment >
            <div className={classes[theme]}>
            {wind_dir} {image}
            </div>
        </React.Fragment>
        
    )
}

export default Wind