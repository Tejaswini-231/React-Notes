import React,{useState} from 'react';

function Lists(){

    const [colleges,setColleges] =useState(["BMSCE","RV","Jain","Christ","Alliance"]);

    function addClg(){
        const newClg=document.getElementById("newClg").value;
        document.getElementById("newClg").value="";
        setColleges([...colleges,newClg]);
    }

    function removeClg(index){
        setColleges(colleges.filter((_,i)=>i!==index));
    }

    return(
        <div>
            <h3>List of Colleges :</h3>
            <ul>
                {colleges.map((clg,idx)=><li key={idx} onClick={()=>removeClg(idx)}>{clg}</li>)}
            </ul>
            <input type="text" id="newClg" placeholder='Enter the college Name'/>
            <button onClick ={addClg}>Add College</button>
        </div>
    );
}

export default Lists;