import React, { useContext } from "react";
import Image from "../components/Image";
import { Context, ContextProvider } from "../Context";
function Photos() {
    const {pics}=useContext(Context)
    return (
        <main className="photos">
            <h1>Images go here!</h1>
        </main>
    )
}
export default Photos