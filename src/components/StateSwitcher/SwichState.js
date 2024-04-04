import { useContext, useState } from "react";
import { StateContext } from "../../context/StateContext";
import { ThemeContext } from "../../context/ThemeContext";
import classes from "./SwitchState.module.scss";
import { DataContext } from "../../context/DataContext";

const SwitchState = (props) => {
  const { setState } = useContext(StateContext);

  const {theme} = useContext(ThemeContext)

  const {cityName} = useContext(DataContext)


  const[isOn, setIsOn] = useState(true)
  const setDailyStateHandle = () => {
    setState("daily");
    setIsOn(false)
  };
  const setWeeklyStateHandle = () => {
    setState("weekly");
    setIsOn(true)
  };

  
  return (
    <div className={`${classes.switch} ${classes[theme]}`}>
      <h2>{cityName}</h2>
      <div>
        <button
          onClick={setWeeklyStateHandle}
          className={`${classes.button} ${isOn ? classes.on : ''}`}
        >
          weekly
        </button>
        <button
          onClick={setDailyStateHandle}
          className={`${classes.button} ${!isOn ? classes.on : ''}`}
        >
          daily
        </button>
      </div>
    </div>
  );
};

export default SwitchState;
