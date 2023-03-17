import React from "react";
import { useContext } from "react";
import { Context } from "../Context";
function CartItem({ item }) {
    function trashicon(){
        
    }
    const { removeFromCart } = useContext(Context);
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={()=>removeFromCart(item)}></i>
            <i className="ri-delete-bin-fill" onClick={()=>removeFromCart(item)}></i>
            <img src={item.url} alt='s' width='130px' />
            <p>$5.99</p>
        </div>
    )
}
export default CartItem;