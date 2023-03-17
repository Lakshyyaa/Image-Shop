import { useContext } from "react"
import React from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"
function Cart(){
    const {cartItems}=useContext(Context)
    const itemsArray=cartItems.map(item=>{
        return (<CartItem key={item.id} item={item}/>)
    })
    return(
        <main className="cart-page">
            <h1>Check Out</h1>
            {itemsArray}
            <p className="total-cost" >Total: </p>
            <div>
                <button>Place Order</button>
            </div>
        </main>
    )
}
export default Cart