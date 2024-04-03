import { useContext} from "react";
import classes from "./DropDown.module.scss";
import { DropDownElement } from "./DropDownElement";
import { StateContext } from "../../context/StateContext";

export const DropDown = (props) => {
  const {showDropDown, setShowDropDown} = useContext(StateContext)

  // if (props.data[0].length !== undefined ){
  //   console.log(props.data[0].length)
  //   setShowDropDown(true)
  // }

  console.log(props.data[0].length)

  return (
    <>{console.log(showDropDown)}
      {showDropDown && (
        <ul className={classes.ul}>
          {props.data.map((x) => (
            // <li>{x.name}</li>
            <DropDownElement data={x} key={Math.random()}/>
          ))}
        </ul>
      )}
    </>
  );
};
