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
    const hearticon = hovered && <i className="ri-heart-line favourite"></i>
    const favicon = hovered && <i className="ri-add-circle-line cart"></i>
    return (
        <div onMouseEnter={() => { enter() }} onMouseLeave={() => leave()} className={`image-container`}>
            <img src={img.url} className="image-grid" />
            {hearticon onMouseEnter={log}}
            {favicon}
        </div>
    )
}
export default Image