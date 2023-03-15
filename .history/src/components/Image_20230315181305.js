import React, { useState } from "react";
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
    return (
        <div onMouseEnter={() => { enter() }} onMouseLeave={() => leave()} className={`image-container`}>
            <img src={img.url} className="image-grid" />
        </div>
    )
}
export default Image