export const MyComponent =()=>{
    return <h1>Hello from my component</h1>
}

let age=20;
let name=age>10?"Teja":"Teju";
console.log(name);

export const Conditions=()=>{
    const age=20;
    return age>10?<p>Teja</p>:<p>Teju</p>
}

export const PersonComponent=()=>{
    const Person={
        name:'Tejaswini',
        age:20,
        grad:false
    }
    return(
        <div>
            <p>Name:{Person.name}</p>
            <p> Age:{Person.age}</p>
            <p>Graduated: {Person.grad ? "Yes" : "No"}</p>
            </div>
    )
    
    
}