import React from 'react'
import { useState } from 'react'
function Counter(props) {
    let[counter,setCounter]=useState(0);
  return (
    <div className='counter'>
        <h3 className='numbering'>{props.id}</h3>
       <button className='INC' onClick={()=>{setCounter(counter+props.id)}}>INC</button>
       <button className='RST' onClick={()=>{setCounter(counter=0)}}>RST</button>
       <button className='DEC' onClick={()=>{setCounter(counter-props.id)}}>DEC</button>
       
       <p className='numCounter'>{counter}</p>
        
    </div>
  )
}

export default Counter