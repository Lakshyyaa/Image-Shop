import React, { useContext } from "react";
import Image from "../components/Image";
import { Context, ContextProvider } from "../Context";
function getClass(index) {
    if(index%5==0){
        return('big')
    }
    else if(index%6==0)
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
            {picArray}
        </main>
    )
}
export default Photos