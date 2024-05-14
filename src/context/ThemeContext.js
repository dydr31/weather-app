import React, { createContext, useState } from "react";

export const ThemeContext = createContext({theme: 'dark', undefined});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState('dark')
    // let time = (new Date ()).getHours
    // if (time > 6 && time < 19){
    //     setTheme('dark')
    // }
    return <ThemeContext.Provider value={{theme, setTheme}}>
        {props.children}
    </ThemeContext.Provider>
}