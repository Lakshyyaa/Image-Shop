import React from "react";
import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
const Context = createContext();
function ContextProvider(props) {
    const [pics, setPics] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(res => res.json())
            .then(data => setPics(data))
    }, [])
    // console.log(pics);
    function toggleEffect(id){
        const updatedArray=pics.map((pic)=>{
            if(pic.id===id){
              return{
                  ...pic,
                  isFavourited: !pic.Favourited
              }
            }
            return pic
        })
    }
    return (
        <Context.Provider value={{ pics }}>
            {props.children}
        </Context.Provider>
    )
}
export { ContextProvider, Context }