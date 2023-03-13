import React from "react";
import '../index.css';
import { Route, Routes, Link } from "react-router-dom";
function Header() {
    return (
        <div className="main">
            <header >
                <Link to="/"><h2>Pic Some</h2></Link>
                <Link to="Cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link> */}
                {/* {/* <i className="ri-home-2-line"></i>
                <i class="ri-store-2-line"></i>
            </header> */}
        </div>
    )
}
export default Header