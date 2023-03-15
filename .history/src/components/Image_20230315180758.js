import React, {useState} from "react";
function Image({className, img}){
    const [hover, setHover]=useState(false)
    const divElement = document.querySelector('image-container');

    divElement.addEventListener('mouseenter', () => {
        console.log('Mouse entered the div');
    });

    divElement.addEventListener('mouseleave', () => {
        console.log('Mouse left the div');
    });
    return(
        <div onMouseEnter={} onMouseLeave={setHover(false)} className={`image-container`}>
            <img src={img.url} className="image-grid"/>
        </div>
    )
}
export default Image