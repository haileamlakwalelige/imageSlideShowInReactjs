import React from 'react';
import {useState} from 'react';
import './counter.css';

function Counter() {
    const [counters,setCount] = useState(0);
    function increment(){
        setCount(counters+1)
    }
    function decrement(){
        setCount(counters-1)
    }
    function reset(){
        setCount(0)
    }
  return (
    <div className='divi'>
       <h2 className='h2'>{counters}</h2>
      <button onClick={increment}>+</button>
      <button onClick={reset}>0</button>
      <button  onClick={decrement}>-</button>
      
     
    </div>
  )
};

export default Counter;
