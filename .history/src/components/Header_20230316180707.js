import React from "react";
import '../index.css';
import { Context } from "../Context";
import { useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
function Header() {
    const cartItems
    function carticon(){
        if(){

        }
        else{
            return (<Link to="Cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>)
        }
    }
    return (
        <div >
            <header >
                <Link to="/"><h2>Pic Some</h2></Link>
                {carticon()}
            </header>
        </div>
    )
}
export default Header