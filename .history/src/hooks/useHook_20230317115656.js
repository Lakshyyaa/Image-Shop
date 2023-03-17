import React from "react";
import { useState, useEffect, useRef } from "react";
function useHook(){
    const [hovered, setHovered]=useState(false)
    const ref=useRef(null)
    function enter(){
        setHovered(true)
    }
    function leave(){
        setHovered(false)
    }
    useEffect(()=>{
        ref.current.addEventListener('mouseenter', enter)
        ref.current.addEventListener('mouseleave', leave)
        return ()=>{
            ref.current.removeEventListener('mouseenter', enter)
            ref.current.removeEventListener('mouseleave', leave)   
        }
    }, [])
}
export default useHook; 