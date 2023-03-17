import React, { useContext, useState } from "react";
import { Context } from "../Context";
import PropTypes from 'prop-types';
import useHook from "../hooks/useHook";
function Image({ className, img }) {
    // const [hovered, setHovered] = useState(false)
    // const enter = () => {
    //     setHovered(true)

    // }
    // const leave = () => {
    //     setHovered(false);

    // }
    // const [hovered, ref] = useHook()
    const { toggleEffect, addToCart, cartItems } = useContext(Context)
    function showplus() {
        if ((cartItems.some(item => item.id === img.id))) {
            return (<i className="ri-shopping-cart-fill cart" onClick={() => addToCart(img)}></i>)
        }
        else {
            return (hovered && <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>)
        }
    }
    function showheart() {
        if (img.isFavourite) {
            return (<i className="ri-heart-fill favourite" onClick={() => toggleEffect(img.id)}></i>)
        }
        else {
            return (hovered && <i className="ri-heart-line favourite" onClick={() => toggleEffect(img.id)}></i>)
        }
    }
    return (
        <div onMouseEnter={()=>enter()} onMouseLeave={()=>leave()} className={`image-container`} >
            <img src={img.url} alt={'lol'} className="image-grid" />
            {showplus()}
            {showheart()}
        </div>
    )
}
Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavourite: PropTypes.bool
    })
}
export default Image