import React from 'react'
import { useEffect,useState } from 'react';
function Home() {

  const [data,setData]=useState([]);
  const url ="https://jsonplaceholder.typicode.com/posts";
    useEffect(()=>{
      fetch(url).then((result)=>{
        result.json().then((resp)=>{
          setData(resp);
        })
    })
    },[]);
    
  return (
    <div> <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Body</th>
      </tr>
    </thead>
    <tbody>
    {
       data.map((number) =>
       <tr>
       <td>{number.id}</td>
       <td>{number.title}</td>
       <td>{number.body}</td>
       </tr>
     )
      } 
    </tbody>
  </table></div>
  )
}

export default Home