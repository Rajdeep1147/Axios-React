import React,{useState,useEffect,useRef} from 'react'
import {useSearchParams,Outlet} from 'react-router-dom';

function Contact(props) {
  const [count,setCount]=useState(1);
  const [data,setData]=useState({name:'anil',age:27});
  const [searchparam,setSearchParam] =useSearchParams();
  
  const lastval =useRef();
  useEffect(()=>{
    lastval.current = props.propcount;
   
  });
  const previousProps = lastval.current

  console.warn(searchparam.get('age'));
  console.warn(searchparam.get('city'));
  const age =searchparam.get('age');
  const city =searchparam.get('city');

  function updateCount()
  {
    let rand = Math.floor(Math.random()*10);
    setCount((pre)=>{
      if(pre>5){
        alert("low Value");
      }else{
        return rand;
      }
    });
  }

  
  return (
    <>
    <div>This is Contact Page Props Counter </div>
    <h3>Age is :{age}</h3>
    <h3>City is :{city}</h3>
    <h3>Privious State:{count}</h3>
    <button onClick={updateCount}> Click to Update Count</button><br /><br />
    <button onClick={props.data}> Click to Update Props</button><br /><br />
    <input type="text" onChange={(e)=>setSearchParam({text:e.target.value,age:10})} placeholder="Set Query Param"></input>
    <button onClick={()=>setSearchParam({age:40})}> Set Age is  Query Params</button><br/><br/>
   <h2>Prevous Value = {previousProps}<br/><br/>
   Current Value = {props.propcount}<br/>
   Difference = {previousProps - props.propcount}<br/>
   State Object With Hook<br/>
   {data.name}<br/>{data.age}<br/>
   <input type="text" placeholder="Enter Name" value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}}></input><br/>
   <input type="text" placeholder="Enter Age" value={data.age} onChange={(e)=>{setData({...data,age:e.target.value})}}></input><br/>

   </h2>

    <Outlet />
    </>
  )
}

export default Contact