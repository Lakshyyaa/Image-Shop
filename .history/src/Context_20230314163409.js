import React from "react";
import { createContext, useContext, useState } from "react";
const [pics, setPics]=useState9[];
const Context=createContext();
function ContextProvider(props){
    return(
        <Context.Provider value={pics}>
            {props.children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}