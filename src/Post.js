import React,{useState} from 'react'
import axios from 'axios';
function Post() {
   
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');

   
    const url = "https://jsonplaceholder.typicode.com/posts";

    const submitHandlers=(e)=>{
        e.preventDefault();
            console.log(title,body);
            const resp = axios.post(url,{
                title,body
            }).then(resp=>console.log('posting Data', resp)).catch(err=>console.log(err)); 
            console.log(resp.data);
        
        }

   

  return (
    <div>
        <form >
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Title</label>
                <input type="text" className="form-control" id="title"  onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Email"/>
                </div>
                
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Body</label>
                <input type="text" className="form-control" id="body"   onChange={(e)=>setBody(e.target.value)} placeholder="Enter Body"/>
                </div>
               
            <button type="submit" onClick={submitHandlers} className="btn btn-primary">Submit</button>
            
        </form>
        
        <br></br>
        
          
        
  </div>
  )
}

export default Post