import { useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./WeeklyCard.scss"
import WeatherIcon from "../UI/WeatherIcon";
import Date from "../UI/Date";
import Temperature from "../UI/Temperature";

const WeeklyCard = (props) => {
  const { theme } = useContext(ThemeContext);

  let isC = props.data.isC;
  let tMax = props.data.tMax;
  let tMin = props.data.tMin;
  if (isC === false) {
    tMax = Math.round((tMax * 9) / 5) + 32;
    tMin = Math.round((tMin * 9) / 5) + 32;
  }

  return (
    <li className={`${theme} ${"card"}`}>
      <Date time={props.data.time} />

      <div className="other">
        <WeatherIcon weathercode={props.data.weathercode} isNight={false}/>
        <Temperature
          isC={props.data.isC}
          tMax={props.data.tMax}
          tMin={props.data.tMin}
        />
      </div>
    </li>
  );
};

export default WeeklyCard;
