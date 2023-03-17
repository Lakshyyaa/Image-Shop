import React from "react";
import { useContext, useState } from "react";
import { Context } from "../Context";
function CartItem({ item }) {
    const [hovered, setHovered]=useState(false)
    function trashicon(){
        if(hovered){
            return (<i className="ri-delete-bin-fill" onClick={() => removeFromCart(item)}></i>)
        }
        else{
            return (<i className="ri-delete-bin-line" onClick={() => removeFromCart(item)}></i>)
        }
    }
    const { removeFromCart } = useContext(Context);
    return (
        <div className="cart-item" >
            {trashicon() < div className="order-button">
            <button onClick={() => order()}>{buttonText}</button>
        </div>}
            <img src={item.url} alt='s' width='130px' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} />
            <p>$5.99</p>
        </div>
    )
}
export default CartItem;