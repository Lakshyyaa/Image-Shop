import React from "react";
import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
const Context = createContext();
function ContextProvider(props) {
    const [pics, setPics] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(res => res.json())
            .then(data => setPics(data))
    }, [])

    function addToCart(img) {
        console.log(cartItems.)
        // const cartArray = cartItems.push(img)
        // setCartItems(cartArray)
    }

    function toggleEffect(id) {
        const updatedArray = pics.map((pic) => {
            if (pic.id === id) {
                console.log(pic.id);
                console.log(!pic.isFavourite);
                return {
                    ...pic,
                    isFavourite: !pic.isFavourite
                }
            }
            return pic
        })
        setPics(updatedArray)
    }
    return (
        <Context.Provider value={{ pics, toggleEffect, addToCart }}>
            {props.children}
        </Context.Provider>
    )
}
export { ContextProvider, Context }