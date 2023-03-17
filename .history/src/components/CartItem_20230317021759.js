import React from "react";
import { useContext } from "react";
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
    const { removeFromCart } = useContext(Context);
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={()=>removeFromCart(item)}></i>
            <img src={item.url} alt='s' width='130px' />
            <p>$5.99</p>
        </div>
    )
}
export default CartItem;