import React from "react";
import { createContext, useContext } from "react";
const Context=createContext();
function ContextProvider(){
    return(
        <Context.Provider>
            {props.childer}
        </Context.Provider>
    )
}