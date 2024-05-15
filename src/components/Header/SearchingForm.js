import classes from "./SearchingForm.module.scss";

import { getCities } from "../../util/functions";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { StateContext } from "../../context/StateContext";
import { DropDown } from "./DropDown";

function validateCity(str) {
  str = str.trim().toLowerCase();
  str = str.slice(0, 1).toUpperCase() + str.slice(1);
  return str;
}

export const SearchingForm = () => {
  const { theme } = useContext(ThemeContext);
  const { setShowDropDown, clearCityInput, setClearCityInput } =
    useContext(StateContext);

  const cityRef = useRef(null);

  const [data, setData] = useState([{}]);

  const sumbitCityHandler = async (event) => {
    event.preventDefault();
    let res = await getCities(validateCity(cityRef.current.value));
    setData(res);
    setShowDropDown(true);
  };

  if (clearCityInput) {
    cityRef.current.value = "";
    setClearCityInput(false);
  }

  return (
    <form onSubmit={sumbitCityHandler} className={classes.elements}>
      <input
        className={`${classes["text-input"]} ${classes[theme]}`}
        type="text"
        placeholder="Search"
        ref={cityRef}
        required
      />
      <DropDown data={data} />
    </form>
  );
};
