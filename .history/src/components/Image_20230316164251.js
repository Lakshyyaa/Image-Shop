import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from 'prop-types';
function Image({ className, img }) {
    const [hovered, setHovered] = useState(false)
    const enter = () => {
        setHovered(true)
        console.log('in');
    }
    const leave = () => {
        setHovered(false);
        console.log('out')
    }
    const { toggleEffect, addToCart } = useContext(Context)
    function checkCart(img)
    function showplus() {
        if (checkCart(img)) {
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
        <div onMouseEnter={() => { enter() }} onMouseLeave={() => leave()} className={`image-container`} >
            <img src={img.url} className="image-grid" />
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