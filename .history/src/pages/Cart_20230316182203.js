import { useContext } from "react"
import React from "react"
import { Context } from "../Context"
function Cart(){
    const {cartItems}=useContext(Context)
    const itemsArray=cartItems.map(item=>{
        <div></div>
    })
    return(
        <main className="cart-page">
            <h1>Check Out</h1>
            {itemsArray}
        </main>
    )
}
export default Cart