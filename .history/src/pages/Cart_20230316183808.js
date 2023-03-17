import { useContext } from "react"
import React from "react"
import { Context } from "../Context"
import cart
function Cart(){
    const {cartItems}=useContext(Context)
    const itemsArray=cartItems.map(item=>{
        return (<div><img alt={'bkwas'} src={item.url}/></div>)
    })
    return(
        <main className="cart-page">
            <h1>Check Out</h1>
            {itemsArray}
        </main>
    )
}
export default Cart