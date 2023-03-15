import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
const Context=createContext();
function ContextProvider(props){
    const
    return(
        <Context.Provider value=' '>
            {props.children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}