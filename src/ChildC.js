import React,{useContext} from 'react'
import {provideData,secondData} from './App'
function ChildC() {
    const supername= useContext(provideData);
    const first= useContext(secondData);

    
  return (
    <div>ChildC fsf {supername} The Second is {first}</div>
  )
}

export default ChildC