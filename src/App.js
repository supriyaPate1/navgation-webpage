import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Component Folder/Home ';
import Navbar from './Navbar';
import Contact from './Component Folder/Contact';
import Link1 from './Component Folder/Link1';
import Link2 from './Component Folder/Link2 ';
function App() {
  return (
    <>
   
    <Routes>
      <Route  element={<Navbar/>}>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/link1" element={<Link1/>} />
      <Route path="/link2" element={<Link2/>} />
      </Route>
    </Routes>
    </>
  );
}


export default App;
