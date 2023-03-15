import React from "react";
import { createContext, useContext } from "react";
const Context=createContext();
function ContextProvider(props){
    return(
        <Context.Provider>
            {props.children}
        </Context.Provider>
    )
}
export 