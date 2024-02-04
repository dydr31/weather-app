import React, {useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ColorBackground = (props) => {
  const { theme } = useContext(ThemeContext);

  let colorCodeB = 0;
  let colorCodeG = 0;
  let colorCodeR = 0;
  if (props.tMax > 0) {
    colorCodeG = 190 - props.tMax;
    colorCodeB = 255 - props.tMax * 4;
    colorCodeR = 50 + props.tMax * 4.5;
  }

  let style = "";
  if (theme === "light") {
    style = {
      backgroundColor: "rgb( 255," + colorCodeG + "," + colorCodeB + ")",
      //       background: 'rgb(' + 255 + ',' + colorCodeG+ ',' + colorCodeB + ")",
      // background: 'linear-gradient(0deg, rgba(' + 255 + ',' + colorCodeG + ',' +  colorCodeB + ') 0%, rgba(1,1,1,1) 100%)'
    };
  } else {
    style = {
      backgroundColor:
        "rgb(" +
        colorCodeR +
        "," +
        colorCodeG * 0.55 +
        "," +
        colorCodeB * 0.7 +
        ")",
    };
  }

  return <div 
//   style={style}
   className='color-background'
   >{props.children}</div>;
};

export default ColorBackground;
