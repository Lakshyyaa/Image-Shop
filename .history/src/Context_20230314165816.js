import React from "react";
import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
const Context=createContext();
function ContextProvider(props){
    const [pics, setPics]=useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images')
    },pics)
    return(
        <Context.Provider value={pics}> 
        {/* {{pics}} */}
            {props.children}    
        </Context.Provider>
    )
}
export {ContextProvider, Context}