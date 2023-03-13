import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function Header() {
    return (
        <div>
            <Router>
                <header>
                    <Routes>
                        <Route path="/" element={}>
                            
                        </Route>
                    </Routes>
                    <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
                </header>
            </Router>
        </div>
    )
}
export default Header