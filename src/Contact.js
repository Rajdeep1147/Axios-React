import React from 'react'
import {useSearchParams,Outlet} from 'react-router-dom';
function Contact() {
  const [searchparam,setSearchParam] =useSearchParams();
  
  console.warn(searchparam.get('age'));
  console.warn(searchparam.get('city'));
  const age =searchparam.get('age');
  const city =searchparam.get('city');


  return (
    <>
    <div>This is Contact Page</div>
    <h3>Age is :{age}</h3>
    <h3>City is :{city}</h3>
    

    <input type="text" onChange={(e)=>setSearchParam({text:e.target.value,age:10})} placeholder="Set Query Param"></input>
    <button onClick={()=>setSearchParam({age:40})}> Set Age is  Query Params</button>
    <Outlet />
    </>
  )
}

export default Contact