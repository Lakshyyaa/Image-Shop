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
    function order(){
        return (<p>Ordering...</p>)
        setTimeout(()=>{
            2
        }, 3000)
    }
    return(
        <main className="cart-page">
            <h1>Check Out</h1>
            {itemsArray}
            <p className="total-cost" >Total: {total.toLocaleString('en-US', {style:'currency', currency:'USD'})}</p>
            <div className="order-button">
                <button onClick={()=>order()}>{order()}</button>
            </div>
        </main>
    )
}
export default Cart