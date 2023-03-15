import React from "react";
import Image from "../components/Image";
import { ContextProvider } from "../Context";
function Photos() {
    return (
        <main className="photos">
            <h1>Images go here!</h1>
            ContextProvider.value.pics.map((pic)=>{})
        </main>
    )
}
export default Photos