import "./Temperature.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ColorBackground from "./ColorBackground";

const Temperature = (props) => {
  const { theme } = useContext(ThemeContext);

  //   let colorCodeB = 0;
  //   let colorCodeG = 0;
  //   let colorCodeR = 0;
  //   if (props.tMax > 0) {
  //     colorCodeG = 190 - props.tMax;
  //     colorCodeB = 255 - props.tMax * 4;
  //     colorCodeR = 50 + props.tMax * 4.5;
  //   }

  //   let style = "";
  //   let style2 = '';
  //   if (theme === "light") {
  //     style = {
  //       backgroundColor: "rgb( 255," + colorCodeG + "," + colorCodeB + ")",
  //       //       background: 'rgb(' + 255 + ',' + colorCodeG+ ',' + colorCodeB + ")",
  //       // background: 'linear-gradient(0deg, rgba(' + 255 + ',' + colorCodeG + ',' +  colorCodeB + ') 0%, rgba(1,1,1,1) 100%)'
  //     };
  //   } else {
  //     style = {
  //       backgroundColor:
  //         "rgb(" +
  //         colorCodeR +
  //         "," +
  //         colorCodeG * 0.55 +
  //         "," +
  //         colorCodeB * 0.7 +
  //         ")",
  //     };
  //   }

  let isC = props.isC;
  let tMax = props.tMax;
  let tMin = props.tMin;
  if (isC === false) {
    tMax = Math.round((tMax * 9) / 5) + 32;
    tMin = Math.round((tMin * 9) / 5) + 32;
  }

  return (
    <ul className="temp">
      <li>
        <ColorBackground tMax={props.tMax}>
          <p className="tMax">{tMax}°</p>
        </ColorBackground>
      </li>
{props.tMin !== undefined &&      <li className="tMin">
        <ColorBackground tMax={props.tMin}>
          <p>{tMin}°</p>
        </ColorBackground>
      </li>}
    </ul>
  );
};

export default Temperature;
