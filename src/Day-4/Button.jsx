import React from 'react';
import "./index.css";
function Button(){

    // const eventClick=(name)=>console.log(`${name} clicked on the button`)

    // let count=0;

    // const increment=(name)=>{
    //     if(count<3){
    //         console.log(`${name} the count is ${count}`);
    //         count++;
    //     }else{
    //         console.log(`${name} the count is ${count} and go for the next thing now..`)
    //     }
    // }

    // const clicked=(e)=>{
    //      console.log(e);
    // }

    const hasClicked1=(e)=>e.target.textContent="Clicked!!";

    const hasClicked2=()=>{console.log("You doublre clicked the button")};

    return(
        <>
            <button className="button" onDoubleClick={(e)=>hasClicked2(e)}>Click me</button>
            <button className="button" onDoubleClick={(e)=>hasClicked1(e)}>Click me</button>
        </>
    );
}


export default Button;

{/* <button onClick={()=>{eventClick("teju")}}>Click me</button> */}
                {/* <button onClick={()=>{increment("teju")}}>Click me</button> */}
                {/* <button onClick={(e)=>{clicked(e)}}>Click me</button> */}