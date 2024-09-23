import { useState } from "react";

export default function Success({show, setShow, message}){
    const handleClick = ()=>{
        setShow(!show)
    }                            
    return (
        <div className="w-52 h-52 bg-white flex flex-col items-center justify-center rounded">
            <div className="">
                <p>{message}</p>
                <button className="bg-blue-600 px-3 rounded" onClick={handleClick}>Ok</button>
            </div>
        </div>
    );
}