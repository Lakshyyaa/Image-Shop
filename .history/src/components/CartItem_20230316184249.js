import React from "react";
function CartItem({item}){
    return(
        <div className="cart-item">
            <i className="ri-delete-bin-line"></i>
            <img src={item.url} alt='s' width='130px'/>
            <p></p>
        </div>
    )
}
export default CartItem;