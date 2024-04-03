import { useContext} from "react";
import classes from "./DropDown.module.scss";
import { DropDownElement } from "./DropDownElement";
import { StateContext } from "../../context/StateContext";

export const DropDown = (props) => {
  const {showDropDown, setShowDropDown} = useContext(StateContext)
  return (
    <>
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
