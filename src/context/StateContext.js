import React, { createContext, useState } from "react";

export const StateContext = createContext({state: 'weekly', undefined});

export const StateProvider = (props) => {
    const [state, setS] = useState('weekly')
    return <StateContext.Provider value={{state, setS}}>
        {props.children}
    </StateContext.Provider>
}