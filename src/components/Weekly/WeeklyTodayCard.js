import "./WeeklyTodayCard.scss";
import WeatherIcon from "../UI/WeatherIcon";
import Date from "../UI/Date";
import Temperature from "../UI/Temperature";
import { ThemeContext } from "../../context/ThemeContext";
import React, { useContext } from "react";
import Wind from "../UI/Wind";

const WeeklyTodayCard = (props) => {
  const { theme } = useContext(ThemeContext);

  let time = "";
  if (props.data.time != undefined) {
    time = props.data.time;
  }

  return (
    <li className={`${"today"} ${theme}`}>
      <Date time={time} text={"Today, "} />

      <div className="main-elements">
        <WeatherIcon weathercode={props.data.wcode} isNight={false} />
        <Temperature
          isC={props.isC}
          tMax={props.data.tMax}
          tMin={props.data.tMin}
        />
      </div>

      <ul className="today__list">
        <li className="today__list_element">
          <p>uv index:</p>
          <p>{Math.round(props.data.uv)}</p>
        </li>

        <li className="today__list_element">
          <p>percipitations probability:</p>
          <p>{Math.round(props.data.prcp_prob / 10) * 10}%</p>
        </li>

        <li className="today__list_element">
          <p>wind:</p>
          <p>
            {props.data.wind} km/h, <Wind dir={props.data.wind_direction} />
          </p>
        </li>
      </ul>
    </li>
  );
};

export default WeeklyTodayCard;
