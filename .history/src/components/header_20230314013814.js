import React from "react";
import { Route, Routes, Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <header>
                <Link to="/"><h2>Pic Some</h2></Link>
                <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
            </header>
        </div>
    )
}
export default Header