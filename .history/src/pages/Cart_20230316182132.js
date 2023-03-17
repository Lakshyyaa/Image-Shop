import { useContext } from "react"
import React from "react"
import { Context } from "../Context"
function Cart(){
    const {cartItems}=useContext(Context)
    const itemsArray=cartItems
    return(
        <main className="cart-page">
            <h1>Check Out</h1>
        </main>
    )
}
export default Cart