import sun from "../../assets/sun.png";
import rain from "../../assets/rain.png";
import fog from "../../assets/fog.png";
import hail from "../../assets/hail.png";
import cloudy from "../../assets/cloudy.png";
import cloudyNight from "../../assets/cloudy-night.png";
import night from "../../assets/night.png";

import "./WeatherIcon.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Sun = { img: sun, alt: "sunny" };
const Rain = { img: rain, alt: "rain" };
const Fog = { img: fog, alt: "fog" };
const Cloudy = { img: cloudy, alt: "cloudy" };
const CloudyNight = { img: cloudyNight, alt: "cloudy" };
const Night = { img: night, alt: "cloudless" };

const WeatherIcon = (props) => {
  const { theme } = useContext(ThemeContext);
  let text = "";
  const isSmall = props.small;

  let weathercode = props.weathercode;
  text = weathercode;
  let icon = "";
  if (weathercode < 3 && props.isNight === false) {
    icon = Sun;
  } else if (weathercode < 3 && props.isNight === true) {
    icon = Night;
  } else if (weathercode === 3 && props.isNight === true) {
    icon = CloudyNight;
  } else if (weathercode === 3 && props.isNight === false) {
    icon = Cloudy;
  } else if (weathercode >= 40 && weathercode <= 49) {
    icon = Fog;
    text = "fog";
  } else if (
    (weathercode >= 60 && weathercode <= 69) ||
    (weathercode >= 80 && weathercode <= 82)
  ) {
    icon = Rain;
  } else if ((weathercode >= 87 && weathercode <= 90) || weathercode >= 93) {
    icon = hail;
  } else {
    text = weathercode;
  }

  return (
    <>
      {console.log(weathercode)}
      <img
        className={`${"icon"} ${theme}
         
         `}
        src={icon.img}
        alt={icon.alt}
        title={icon.alt}
      />
      {/* <p> {text} </p> */}
    </>
  );
};

export default WeatherIcon;
