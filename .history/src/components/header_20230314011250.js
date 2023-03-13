import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function Header() {
    return (
        <header>
            <Router>
                <Route path="/" element={}>
                </Route>
            </Router>
            <h2>Pic Some</h2>
            <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        </header>

    )
}
export default Header