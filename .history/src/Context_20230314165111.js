import React from "react";
import { useState, us } from "react";
import { createContext, useContext } from "react";
const Context=createContext();
function ContextProvider(props){
    const [pics, setPics]=useState([]);

    return(
        <Context.Provider value={pics}> 
        {/* {{pics}} */}
            {props.children}    
        </Context.Provider>
    )
}
export {ContextProvider, Context}