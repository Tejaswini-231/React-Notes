import React,{useState} from 'react';
import "./index.css";

function Mart(){

    const [name,setName]=useState("");
    const [phNumber,setNumber]=useState();
    const [itemNames,setItemNames]=useState("");
    const [payement,setPayement]=useState("");

    function handleName(event){
        setName(event.target.value);
    }

    function handleNumber(event){
        setNumber(event.target.value);
    }

    function handleItem(event){
        setItemNames(event.target.value);
    }

    function handlePayement(event){
        setPayement(event.target.value);
    }

    return(
        <div>
        <h3>Input here..</h3>
        <div className='input-container'>
            <input className="input" value={name} onChange={handleName} placeholder='Your Name'/><br />

            <input className="input" type="number" value={phNumber} onChange={handleNumber} placeholder='Your Mobile Number'/><br />

            <select className="input" value={itemNames} onChange={handleItem} ><br />
                <option value="Items">Items</option>
                <option value="Tomatoes">Tomatoes</option>
                <option value="Brinjal">Brinjal</option>
                <option value="Cucumber">Cucumber</option>
                <option value="Potatoes">Potatoes</option>
            </select>

            <label><br />
                <input type="radio" value="Online" onChange={handlePayement} checked={payement==="Online"} />
                Online    
            </label>
            <label>
                <input type="radio" value="Offline" onChange={handlePayement} checked={payement==="Offline"} />
                Offline    
            </label>

        </div>

        <h3>Output here..</h3>
        <div className='output-container'>
            <p><b>Name : </b> {name}</p>

           
            <p> <b>Mobile Number :</b> {phNumber}</p>

           
            <p><b> Items :</b> {itemNames}</p>

            
            <p> <b>Mode of Payement is :</b> {payement}</p>

        </div>
        </div>
    );

}

export default Mart;