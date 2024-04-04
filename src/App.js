import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Weekly from "./components/Weekly/Weekly";
import React, { useState, useEffect, useContext } from "react";
import Daily from "./components/Daily/Daily";
import { ThemeContext } from "./context/ThemeContext";
import SwitchTheme from "./components/UI/SwitchTheme";
import { StateContext } from "./context/StateContext";
import SwitchState from "./components/UI/SwichState";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { state } = useContext(StateContext);

  const [showError, setShowError] = useState(false);

  

  return (
    <div className={`${classes[theme]} ${classes.background}`}>
      <Header/>
      {!showError && <SwitchState />}

      {showError === false && state === "weekly" && (
        <Weekly/>
      )}

      {showError === false && state === "daily" && <Daily />}

      <SwitchTheme />
      <footer className={classes.footer}>
        <p>copyright by copyright</p>
        <a
          href="https://www.flaticon.com/free-icons"
          title="icons"
          className="link"
        >
          Icons created by Freepik - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default App;
