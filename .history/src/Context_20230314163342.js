import React from "react";
import { createContext, useContext, useState } from "react";
const [pics, setPics]=[];
const Context=createContext();
function ContextProvider(props){
    return(
        <Context.Provider valu>
            {props.children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}