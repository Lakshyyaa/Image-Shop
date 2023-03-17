import React from "react";
import { useState } from "react";
function useHook(){
    const [hovered, setHovered]=useState(false)
    function enter(){
        setHovered(true)
    }
    function leave(){
        setHovered(fail)
    }
}
export default useHook;