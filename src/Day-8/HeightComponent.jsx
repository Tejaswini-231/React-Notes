import React,{useState,useEffect} from 'react';

function HeightComponent(){

    const [height,setHeight] =useState(0);
    const [width,setWidth] =useState(0);

    function handleResize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    } 

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("Event listener added");

        return()=>{
            window.removeEventListener("resize",handleResize);
            console.log("Event listener removed");
        }
    },[]);

    return (<div>
        <p>Width of window : {width}</p>
        <p>Height of window : {height}</p>
    </div>);
}

export default HeightComponent;