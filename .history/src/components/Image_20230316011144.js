import React, { useState, useContext } from "react";
import { Context } from "../Context";
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
    const { toggleEffect } = useContext(Context)
    const hearticon = hovered && <i className="ri-heart-line favourite" onClick={() => toggleEffect(img.id)}></i>
    const favicon = hovered && <i className="ri-add-circle-line cart"></i>
    const fillfavicon = picisFavourited && <i className="ri-heart-fill favourite"></i>
    return (
        <div onMouseEnter={() => { enter() }} onMouseLeave={() => leave()} className={`image-container`} >
            <img src={img.url} className="image-grid" />
            {hearticon}
            {favicon}
        </div>
    )
}
export default Image