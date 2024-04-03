import "./DailyCard.scss";
import WeatherIcon from "../UI/WeatherIcon";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const DailyCard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
    <li className={`${""} ${theme}`}>
    </li>
    </>
  );
};

export default DailyCard;
