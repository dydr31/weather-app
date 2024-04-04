import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Weekly from "./components/Weekly/Weekly";
import React, { useState, useEffect, useContext } from "react";
import Daily from "./components/Daily/Daily";
import { ThemeContext } from "./context/ThemeContext";
import SwitchTheme from "./components/ThemeSwitcher/SwitchTheme";
import { StateContext } from "./context/StateContext";
import SwitchState from "./components/StateSwitcher/SwichState";

function App() {
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(StateContext);

  return (
    <div className={`${classes[theme]} ${classes.background}`}>
      <Header />
      <main>
        <SwitchState />

        {state === "weekly" && <Weekly />}

        {state === "daily" && <Daily />}

        <SwitchTheme />
      </main>
      <footer className={classes.footer}>
        <p>by dydr31@github</p>
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
