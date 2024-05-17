import classes from "./WeeklyTodayCard.module.scss";
import WeatherIcon from "../UI/WeatherIcon";
import Date from "../UI/Date";
import Temperature from "../UI/Temperature";
import { ThemeContext } from "../../context/ThemeContext";
import React, { useContext } from "react";
import Wind from "../UI/Wind";

const WeeklyTodayCard = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  let time = "";

  if (data.time != undefined) {
    time = data.time;
  }

  // let uv = 0;
  // if (data.uv){
  //   uv = data.uv
  // }

  return (
    <>
    {console.log(data)}
      <li className={`${classes.today} ${theme}`}>
        <Date time={time} text={"Today, "} />

        <div className={classes["main-elements"]}>
          <WeatherIcon weathercode={data.weathercode} isNight={false} />
          <Temperature tMax={Math.round(data.temperature_2m)} tMin={data.tMin} />

        </div>

        <ul className={classes["today__list"]}>
          <li className={classes["today__list_element"]}>
            <p>feels like:</p>
            <p>{Math.round(data.apparent_temperature)}</p>
          </li>

          <li className={classes["today__list_element"]}>
            <p>percipitations:</p>
            <p>{Math.round(data.precipitation_probability / 10) * 10}%</p>
          </li>

          <li className={classes["today__list_element"]}>
            <p>wind:</p>
            <div className={classes["wind"]}>
              <p className={classes["wind-text"]}>{data.windspeed_10m} km/h,</p>
              <Wind dir={data.winddirection_10m} />
            </div>
          </li>
        </ul>
      </li>
    </>
  );
};

export default WeeklyTodayCard;
