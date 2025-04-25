import React,{useState , useEffect} from 'react';

function MyComponent(){

    const [count,setCount] =useState(0);
    const [color,setColor]=useState("green");
    function addCount(){
        setCount(c=>c+1);
    }

    function subtractCount(){
        setCount(c=>c-1)
    }

    function colorChange(){
        setColor(c=>c==="green"?"red":"green");
    }
    useEffect(()=>{
        document.title=`Count : ${count} Color :${color}`;
    },[count,color]);
    return (
        <div>
                <p style={{color:color}}>Count : {count}</p>
                <button onClick={addCount}>Add</button>
                <button onClick={subtractCount}>Subtract</button>
                <button onClick={colorChange}>Change Color</button>
        </div>
    );
}

export default MyComponent;