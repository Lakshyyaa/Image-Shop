import React from "react";
import { useContext } from "react";
import { Context } from "../Context";
function CartItem({ item }) {
    function trashicon(){

    }
    const { removeFromCart } = useContext(Context);
    return (
        <div className="cart-item">
            {trashicon()}
            <img src={item.url} alt='s' width='130px' />
            <p>$5.99</p>
        </div>
    )
}
export default CartItem;