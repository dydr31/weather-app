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

  let uv = 0;
  if (data.uv){
    uv = data.uv
  }

  return (
    <>
    
      <li className={`${classes.today} ${theme}`}>
        <Date time={time} text={"Today, "} />

        <div className={classes["main-elements"]}>
          <WeatherIcon weathercode={data.wcode} isNight={false} />
          <Temperature tMax={data.tMax} tMin={data.tMin} />
        </div>

        <ul className={classes["today__list"]}>
          <li className={classes["today__list_element"]}>
            <p>uv index:</p>
            <p>{Math.round(uv)}</p>
          </li>

          <li className={classes["today__list_element"]}>
            <p>percipitations:</p>
            <p>{Math.round(data.prcp_prob / 10) * 10}%</p>
          </li>

          <li className={classes["today__list_element"]}>
            <p>wind:</p>
            <div className={classes["wind"]}>
              <p className={classes["wind-text"]}>{data.wind} km/h,</p>
              <Wind dir={data.wind_dir} />
            </div>
          </li>
        </ul>
      </li>
    </>
  );
};

export default WeeklyTodayCard;
