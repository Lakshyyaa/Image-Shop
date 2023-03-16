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
    const { toggleEffect } = useContext(Context)
    const favicon = hovered && <i className="ri-add-circle-line cart"></i>
    function showheart(){
        if(img.isFavourite){
            return (<i className="ri-heart-fill favourite" onClick={() => toggleEffect(img.id)}></i>)
        }
        else{
            return (hovered && <i className="ri-heart-line favourite" onClick={() => toggleEffect(img.id)}></i>)
        }
    }
    return (
        <div onMouseEnter={() => { enter() }} onMouseLeave={() => leave()} className={`image-container`} >
            <img src={img.url} className="image-grid" />
            {favicon}
            {showheart()}
            {/* {hearticon}
            {fillhearticon} */}
        </div>
    )
}
Image.propTypes={
    className:PropTypes.string.isRequired,
    img:
}
export default Image