import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import classes from "./AverageParametersCard.module.scss";
import Wind from "../UI/Wind";

const AverageParametersCard = (props) => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`${classes.card} ${classes[theme]}`}>
      <ul className={classes.list}>
        <li>{props.time}</li>
        <li className={classes.temp}>{props.data.avg_temperature_2m}°</li>
        <hr></hr>
        <li>{props.data.avg_apparent_temperature}°</li>
        <hr></hr>
        <li> {props.data.precipitation}mm</li>
        <li> {props.data.precipitation_probability}%</li>
        <hr></hr>
        <li> {props.data.relativehumidity_2m}%</li>
        <hr></hr>
        <li>
          <p>{props.data.surface_pressure}</p> mmhg{" "}
        </li>
        <hr></hr>
        <li>
          <p>{props.data.windspeed_10m} km/h</p>
          <Wind dir={props.data.winddirection_10m} />
        </li>
      </ul>
    </div>
  );
};

export default AverageParametersCard;
