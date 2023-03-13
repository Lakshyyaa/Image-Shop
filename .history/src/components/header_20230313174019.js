import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function Header()
{
    return(
       <header>
        <h2>Pic Some</h2>
        <Routes>
            <Route path="/" component={<h2>okokko</h2>}>ok</Route>
        </Routes>
        <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
       </header>
    )
}
export default Header