import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function Header() {
    return (
        <div>
            <Router>
                <header>

                    <Routes>
                        <Route>
                            <h2>Pic Some</h2>

                        </Route>
                    </Routes>
                    <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
                </header>
            </Router>
        </div>
    )
}
export default Header