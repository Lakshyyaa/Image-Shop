import React, { useContext } from "react";
import Image from "../components/Image";
import { Context, ContextProvider } from "../Context";
function getClass(index) {
    return('ok')
}
function Photos() {
    const { pics } = useContext(Context)
    console.log(pics);
    const picArray = pics.map((pic, i) => {
        return (<Image key={pic.id} className={getClass(i)} img={pic} />)
    })
    return (
        <main className="photos">
            <h1>Images go here!</h1>

        </main>
    )
}
export default Photos