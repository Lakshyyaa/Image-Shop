import React from "react";
import { createContext, useContext } from "react";
const [pics, setPics]=useState([]);
const Context=createContext();
function ContextProvider(props){
    return(
        <Context.Provider value=' '>
            {props.children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}