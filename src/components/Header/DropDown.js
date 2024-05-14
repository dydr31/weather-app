import { useContext} from "react";
import classes from "./DropDown.module.scss";
import { DropDownElement } from "./DropDownElement";
import { StateContext } from "../../context/StateContext";
import { ThemeContext } from "../../context/ThemeContext";

export const DropDown = ({data}) => {
  const {showDropDown } = useContext(StateContext)
  const {theme} = useContext(ThemeContext)

  let results = []
  if (data){
    results = data
  }
  
  
  return (
    <>
      {showDropDown && (
        <ul className={`${classes[theme]} ${classes.ul} `}>
          {results.map((x) => (
            // <li>{x.name}</li>
            <DropDownElement data={x} key={Math.random()}/>
          ))}
        </ul>
      )}
    </>
  );
};
