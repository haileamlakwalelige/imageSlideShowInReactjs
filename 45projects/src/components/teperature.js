import React from 'react';
import './temperature.css'
import {useState} from 'react';


function Temperature(){
   // const [count,setCount]=useState(0);
    const [temp,setTemp]=useState(0);
    function increment(){
        setTemp(temp+1);
    }
    function decrement(){
        setTemp(temp-1);
    }
    return(
       <div>
        <h1 className="temp">{temp}*C</h1>
        <div className="button-container">
        <button onClick={increment} className="button1">Increment</button>
        <button onClick={decrement} className="button1">Decrement</button>
        </div>
       </div>
    )
}

export default Temperature;
