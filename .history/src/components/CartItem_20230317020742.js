import React from "react";
import { useContext, useState } from "react";
import { Context } from "../Context";
function CartItem({ item }) {
    const [hovered, setHovered]=useState('')
    function trashicon(){
        return (<i className="ri-delete-bin-line" onClick={()=>removeFromCart(item)}></i>)
        if(hovered){
            
        }
        return (<i className="ri-delete-bin-fill" onClick={()=>removeFromCart(item)}></i>)
    }
    const { removeFromCart } = useContext(Context);
    return (
        <div className="cart-item" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
            {trashicon()}
            <img src={item.url} alt='s' width='130px' />
            <p>$5.99</p>
        </div>
    )
}
export default CartItem;