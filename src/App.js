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

function App() {
  

  return (
    <>
   <BrowserRouter>
    <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact/" element={<Contact />} />
          <Route path="/next" element={<Next />} />
          <Route path="/get" element={<Get />} />
          <Route path="/post" element={<Post />} />
        <Route path="/*" element={<Page />} />
        <Route path="/user/:name/:part" element={<User />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
