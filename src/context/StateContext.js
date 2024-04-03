import React, { createContext, useState } from "react";

export const StateContext = createContext({
  state: "weekly",
  undefined,
  showDropDown: false,
  undefined,
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

  const contextValue = {
    state,
    setState: setStateHandler,
    showDropDown,
    setShowDropDown,
    // setShowDropDown: setShowDropDownHandler,
  };
  return (
    <StateContext.Provider value={contextValue}>
      {props.children}
    </StateContext.Provider>
  );
};
