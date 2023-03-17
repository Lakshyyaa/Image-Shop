import React from "react";
import { useContext, useState } from "react";
import { Context } from "../Context";
function CartItem({ item }) {
    const { removeFromCart } = useContext(Context);
    const [hovered, setHovered] = useState(false)
    function trashicon() {
        if (hovered) {
            return (<i className="ri-delete-bin-fill" onClick={() => removeFromCart(item)}></i>)
        }
        else {
            return (<i className="ri-delete-bin-line" onClick={() => removeFromCart(item)}></i>)
        }
    }
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={()=>removeFromCart(item)} onMouseEnter={()=>}></i>
            <img src={item.url} alt='s' width='130px' />
            <p>$5.99</p>
        </div>
    )
}
export default CartItem;