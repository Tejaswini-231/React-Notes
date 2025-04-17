import React ,{useState} from 'react'; 

function HooksExample (){

    const [name,setName] =useState("Unknown");

    const changeName=()=>{
        setName("Boom!!");
    }

    const [age,setAge]=useState(0);


    const changeAge=()=>{
        setAge(age+1);
    }

    const [free,setIsFree]=useState("No");

    const toogleAction=()=>{
        setIsFree(!free);
    }

    return(
        <>
            <h3>Name : {name}</h3>
            <h3>Age : {age}</h3>
            <h3>Are you free to go out : {free?"Yes":"No"}</h3>
            <button onClick={changeName}>Click me</button>
            <button onClick={changeAge}>Click to change age </button>
            <button onClick={toogleAction}>Change mood</button>
        </>
    );

}

export default HooksExample;