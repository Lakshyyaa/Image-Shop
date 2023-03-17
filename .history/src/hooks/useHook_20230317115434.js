import React from "react";
import { useState, useEffect, useRef } from "react";
function useHook(){
    const [hovered, setHovered]=useState(false)
    const ref=useRef()
    function enter(){
        setHovered(true)
    }
    function leave(){
        setHovered(false)
    }
    useEffect(()=>{

    }, [])
}
export default useHook; 