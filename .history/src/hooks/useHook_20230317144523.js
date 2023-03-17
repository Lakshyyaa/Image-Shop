import { useState, useEffect, useRef } from "react";
function useHook() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    function enter() {
        setHovered(true)
    }
    function leave() {
        setHovered(false)
    }
    useEffect(() => {
        ref.current.addEventListener('mouseenter', enter)
        ref.current.addEventListener('mouseleave', leave)
        return () => {
            ref.removeEventListener('mouseenter', enter) 
            ref.removeEventListener('mouseleave', leave)
        }
    }, [])
    return [hovered, ref];
}
export default useHook; 