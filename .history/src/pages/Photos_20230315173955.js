import React, { useContext } from "react";
import Image from "../components/Image";
import { Context, ContextProvider } from "../Context";
function getClass(){

}
function Photos() {
    const {pics}=useContext(Context)
    console.log(pics);
    const picArray=pics.map((pic)=>{
        return()
    })
    return (
        <main className="photos">
            <h1>Images go here!</h1>
        </main>
    )
}
export default Photos