import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./SwitchTheme.scss";

const SwitchTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOn, setIsOn] = useState(false);

  const switchToLight = () => {
    setTheme("light");
    setIsOn(true);
  };

  const switchToDark = () => {
    setTheme("dark");
    setIsOn(false);
  };

  useEffect(() => {
    let time = new Date().getHours();
    if (time > 6 && time < 19) {
      setTheme("light");
      setIsOn(true)
    }
    else{

    }
  }, [])


  return (
    <div className={`${theme} ${"switch-menu"}`}>
      <p>Theme:</p>
      <button
        onClick={switchToLight}
        className={`  ${"switch-button"} ${isOn ? "on" : "off"}`}
      >
        light
      </button>
      <button
        onClick={switchToDark}
        className={`  ${"switch-button"} ${isOn ? "off" : "on"}`}
      >
        dark
      </button>
    </div>
  );
};

export default SwitchTheme;
