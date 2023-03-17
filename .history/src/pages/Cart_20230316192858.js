import { useContext } from "react"
import React from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"
function Cart(){
    const {cartItems}=useContext(Context)
    const count=0;
    const itemsArray=cartItems.map(item=>{
        return (<CartItem key={item.id} item={item}/>)
    })
    const total=5.99*itemsArray.length
    return(
        <main className="cart-page">
            <h1>Check Out</h1>
            {itemsArray}
            <p className="total-cost" >Total: {total.toLocaleString('en-US', {style:'currency', currency:'USD'})}</p>
            <div className="order-button">
                <button onClick={}>Order</button>
            </div>
        </main>
    )
}
export default Cart