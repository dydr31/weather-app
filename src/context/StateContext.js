import React, { createContext, useContext, useState } from "react";

export const StateContext = createContext({
  state: "weekly",
  undefined,
  showDropDown: false,
  undefined,
  clearCityInput: false,
});

export const StateProvider = (props) => {
  const [state, setState] = useState("weekly");

  const setStateHandler = (state) => {
    setState(state);
  };

  const [showDropDown, setShowDropDown] = useState(false);

  const setShowDropDownHandler = (boolean) => {
    setShowDropDown(boolean);
  };

  const [clearCityInput, setClearCityInput] = useState(false)



  const contextValue = {
    state,
    setState: setStateHandler,
    showDropDown,
    setShowDropDown,
    clearCityInput,
    setClearCityInput
    // setShowDropDown: setShowDropDownHandler,
  };
  return (
    <StateContext.Provider value={contextValue}>
      {props.children}
    </StateContext.Provider>
  );
};
