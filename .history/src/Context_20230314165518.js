import React from "react";
import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
const Context=createContext();
function ContextProvider(props){
    const [pics, setPics]=useState([]);
    useEffect(()=>{
        fetch('')
    },pics)
    return(
        <Context.Provider value={pics}> 
        {/* {{pics}} */}
            {props.children}    
        </Context.Provider>
    )
}
export {ContextProvider, Context}