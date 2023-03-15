import React, {useState} from "react";
function Image({className, img}){
    const [hover, setHover]=useState(false)
    const enter=()=>{
        setHover(true)
        console.log('in');
    }
    const leave=()=>{
        setHover(false)
    }
    return(
        <div onMouseEnter={setHover(true)} onMouseLeave={setHover(false)} className={`image-container`}>
            <img src={img.url} className="image-grid"/>
        </div>
    )
}
export default Image