import React,{useState,useEffect} from 'react'
import axios from 'axios';
function Get() {
    const [post,setPost] = useState('');
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [userid,setUserId] = useState(null);

    const url = "https://jsonplaceholder.typicode.com/posts";

    useEffect(()=>{
        axios.get(url).then((response)=>{
            // console.log(response.data[0]['id']);
            setPost(response.data);
            setBody(response.data[0].body);
            setTitle(response.data[0].title);
            setUserId(response.data[0].id);
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

    function updateHanlder(id){
        setBody(post[id-1].body);
        setTitle(post[id-1].title);
        setUserId(post[id-1].id);
    }

    function updateUser()
    {
        let item = {title,body,userid};
        fetch(url+"/"+userid,{
            method:"PUT",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',

            },
            body:JSON.stringify(item)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                updateHanlder();
            })
        })
        
    }

  return (
    <div>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input><br /><br />
        <input type="text" value={body} onChange={(e)=>setBody(e.target.value)}></input><br /><br />
        <button onClick={updateUser}> Update User</button>
        <br></br>
        
            {
                post &&
                post.map((apiDetails,index)=>{
                    return(
                        <ul key={index=apiDetails.id}>
                    <li>{apiDetails.title}</li>
                    <li>{apiDetails.body}</li>
                    <li><button type="button" className="btn btn-danger" onClick={(e)=>deleteHanlder(apiDetails.id,e)}>Delete</button></li>
                    <li><button type="button" className="btn btn-Primary" onClick={()=>updateHanlder(apiDetails.id)}>Update</button></li>
                    </ul>
                    )
                    })
            }
        
  </div>
  )
}

export default Get