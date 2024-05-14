import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Weekly from "./components/Weekly/Weekly";
import React, { useContext } from "react";
import Daily from "./components/Daily/Daily";
import { ThemeContext } from "./context/ThemeContext";
import SwitchTheme from "./components/ThemeSwitcher/SwitchTheme";
import SwitchState from "./components/StateSwitcher/SwichState";
import { Footer } from "./components/Footer";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${classes[theme]} ${classes.container}`}>
        <Header />
        <main>
          <SwitchState />
          <Weekly />
          <Daily />
          <SwitchTheme />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
