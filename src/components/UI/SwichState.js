import { useContext, useState } from "react";
import { StateContext } from "../../context/StateContext";
import { ThemeContext } from "../../context/ThemeContext";
import classes from "./SwitchState.module.scss";

const SwitchState = (props) => {
  const { state, setS } = useContext(StateContext);
  const {theme} = useContext(ThemeContext)
  const[isOn, setIsOn] = useState(true)
  const setDailyStateHandle = () => {
    setS("daily");
    setIsOn(false)
  };
  const setWeeklyStateHandle = () => {
    setS("weekly");
    setIsOn(true)
  };

  
  return (
    <div className={`${classes.switch} ${classes[theme]}`}>
      <h2>{props.city}</h2>
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
