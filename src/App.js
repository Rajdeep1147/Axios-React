import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import About from './About';
import Page from './Page';
import User from './User';
import Next from './Next';
import Get from './Get';
import Post from './Post';
import React,{createContext, useState} from 'react'
import ChildA from './ChildA';
export const provideData = createContext();
export const secondData = createContext();
function App() {
  const supername="Parent Data";
  const you="you";
const raj ="raj";
  
  const [propcount,setPropcount] = useState(1);
function getpreProp()
  {
    setPropcount(Math.floor(Math.random()*10))
  }
  return (
    <>
   <BrowserRouter>
    <Navbar />
    <provideData.Provider value={[supername,raj]}>
      <secondData.Provider value={you}>
      <Routes>
     
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact/" element={<Contact data={getpreProp} propcount={propcount} />} />
          <Route path="/next" element={<Next />} />
          <Route path="/get" element={<Get />} />
          <Route path="/post" element={<Post />} />
        <Route path="/*" element={<Page />} />
        <Route path="/child" element={<ChildA />} />
        
        <Route path="/user/:name/:part" element={<User />} />
       
      </Routes>
      </secondData.Provider>
      </provideData.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
