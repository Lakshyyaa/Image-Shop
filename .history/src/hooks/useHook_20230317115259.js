import React from "react";
import { useState, useEffect, useRef } from "react";
function useHook(ref){
    const [hovered, setHovered]=useState(false)
    function enter(){
        setHovered(true)
    }
    function leave(){
        setHovered(false)
    }
}
export default useHook; 