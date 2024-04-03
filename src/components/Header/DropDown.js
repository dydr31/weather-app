import { useContext} from "react";
import classes from "./DropDown.module.scss";
import { DropDownElement } from "./DropDownElement";
import { StateContext } from "../../context/StateContext";

export const DropDown = (props) => {
  const show = useContext(StateContext).showDropDown;
  const setShow = useContext(StateContext).setShowDropDown
//   if (props.data[0].name !== '' ){
//     setShow(true)
//   }
  const onClickHandler = () => {};
  return (
    <>
      {show && (
        <ul className={classes.ul}>
          {props.data.map((x) => (
            <DropDownElement data={x} key={Math.random()}/>
          ))}
        </ul>
      )}
    </>
  );
};
