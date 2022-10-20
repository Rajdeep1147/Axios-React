import React,{useState,useEffect} from 'react'
import axios from 'axios';
function Get() {
    const [post,setPost] = useState('');
    const url = "https://jsonplaceholder.typicode.com/posts";

    useEffect(()=>{
        axios.get(url).then((response)=>{
            // console.log(response.data[0]['id']);
            setPost(response.data);
        })
    },[])


    const deleteHanlder = (id,e)=>
    {
        axios.delete(url+"/"+id,).then((r)=>{
            console.log(r)
        }).catch((error)=>{
            console.log(error)
        })
        
    }

  return (
    <div>
        
        <br></br>
        
            {
                post &&
                post.map((apiDetails,index)=>{
                    return(
                        <ul key={index=apiDetails.id}>
                    <li>{apiDetails.title}</li>
                    <li>{apiDetails.body}</li>
                    <li><button type="button" className="btn btn-danger" onClick={(e)=>deleteHanlder(apiDetails.id,e)}>Delete</button></li>
                    </ul>
                    )
                    })
            }
        
  </div>
  )
}

export default Get