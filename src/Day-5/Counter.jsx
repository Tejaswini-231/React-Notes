import React,{useState} from 'react';
import "./index.css";

function Counter(){

    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }

    const decrement=()=>{
        setCount(count-1);
    }

    const restart=()=>{
        setCount(0);
    }

    return(
        <>
            <h3 className='count-text'>Count: {count}</h3>
            <button className='increment-btn' onClick={increment}>Increment</button>
            <button className='decrement-btn' onClick={decrement}>Decrement</button>
            <button className='restart-btn' onClick={restart}>ReStart</button>
        </>
    );
}

export default Counter;
