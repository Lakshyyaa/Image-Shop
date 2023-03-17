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
    console.log(count);
    return(
        <main className="cart-page">
            <h1>Check Out</h1>
            {itemsArray}
            <p className="total-cost" >Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}
export default Cart