import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import './SwitchTheme.scss'

const SwitchTheme = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOn, setIsOn] = useState (true)

  const switchToC = () => {
    setTheme("light");
    setIsOn(true)
  };

  const switchToF = () => {
    setTheme("dark");
    setIsOn(false)
  };

  

  return (
    <div className={`${theme} ${'switch-menu'}`}>
      <p>Theme:</p>
      <button onClick={switchToC} className={`  ${'switch-button'} ${isOn ? 'on':'off'}` } >light</button>
      <button onClick={switchToF} className={`  ${'switch-button'} ${isOn ? 'off':'on'}` }>dark</button>
    </div>
  );
};

export default SwitchTheme;
