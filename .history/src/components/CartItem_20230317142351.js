import React from "react";
import { useContext } from "react";
import { Context } from "../Context";
import useHook from "../hooks/useHook";
function CartItem({ item }) {
    const { removeFromCart } = useContext(Context);
    const [hovered, setHovered] = useState(false)
    // const [hovered, ref]=useHook()
    function trashicon() {
        if (hovered) {
            return ("ri-delete-bin-fill")
        }
        else {
            return ("ri-delete-bin-line")
        }
    }
    return (
        <div className="cart-item">
            <i className={trashicon()} onClick={() => removeFromCart(item)} ref={ref}></i>
            <img src={item.url} alt='s' width='130px' />
            <p>$5.99</p>
        </div>
    )
}
export default CartItem;