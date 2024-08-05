import React from 'react'

function NumKey(props) {
  return (
    <div className='numKey'>
       <button className='butNum' onClick={props.addNum}>{props.id}</button> 
    </div>
  )
}

export default NumKey