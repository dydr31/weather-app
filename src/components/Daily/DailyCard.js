import "./DailyCard.scss";
import WeatherIcon from "../UI/WeatherIcon";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const DailyCard = (props) => {
  const { theme } = useContext(ThemeContext);
  let hour = props.data.time.getHours();
  let isNight = false;
  if (hour >= 19 || hour <= 4) {
    isNight = true;
  }
  return (
    <li className={`${"list-element"} ${theme}`}>
      <div className='hour'>{hour}:00</div>
      <div className='icon-container'>
        <WeatherIcon
          weathercode={props.data.weathercode}
          small={true}
          isNight={isNight}

        />
        
      </div>

      <div className='temp'>{props.data.temperature_2m}</div>
    </li>
  );
};

export default DailyCard;
