import React ,{useState} from 'react';

function Form(){
    const [person,setItemNames]=useState({
        fname:"George",
        lname:"leo",
        age:21
    })
    function handlefNameChange(event){
        setItemNames(person=>({...person,fname:event.target.value}))
    }
    function handlelNameChange(event){
        setItemNames(p=>({...p,lname:event.target.value}))
    }
    function handleAgeChange(event){
        setItemNames(p=>({...p,age:event.target.value}))
    }
    return (<div>
        <p>The person is : "{person.fname}" with his last name "{person.lname}" in his {person.age}</p>
        <input type="text" value={person.fname} onChange={handlefNameChange}/><br/><br/>
        <input type="text" value={person.lname} onChange={handlelNameChange}/><br/><br/>
        <input type="number" value={person.age} onChange={handleAgeChange}/><br/><br/>
    </div>);
}

export default Form;