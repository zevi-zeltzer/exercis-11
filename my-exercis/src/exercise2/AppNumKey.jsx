import React from 'react'
import NumKey from './Numkey';
import { useState } from 'react'
import "./numKey.css"
function AppNumKey() {
    const[sum, setSum]=useState(0);
function addNum(event){
    setSum(sum+Number(event.target.textContent))
    
}
let arrNumKey=[];
for(let i=1;i<=10;i++){
    arrNumKey.push(<NumKey key={i-1} id={i} addNum={addNum}/>)
}

  return (
    <div className="container">
        {arrNumKey}
        <button className='restart' onClick={()=>{setSum(0)}} >Restart</button>
        <p className="sumDisplay">{sum}</p>
    </div>
  )
}

export default AppNumKey