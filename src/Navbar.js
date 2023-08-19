import React from 'react'
import { Outlet } from 'react-router-dom'
import { Routes, Route, Link } from "react-router-dom";
import './navbar.css'
function Navbar() {
  return (<>
    <div className='Nav'>
      <div className='icon'><img src='https://www.educadd.in/wp-content/uploads/2022/05/Educadd-Logo.png'/></div>   
        <div className='abv'> </div>      
        <div>
          <h5><Link to ="/">Home</Link></h5>
        </div>        
        <div className="dropdown">
          <h5 className="dropbtn"><a>Products</a></h5>
        <div class="dropdown-content">
          <Link to='/link1'>Link 1</Link>
          <Link to='/link2'>Link 2</Link>
       </div>
      </div>
        <div className='text'>
           <h5><Link to='/contact'>Contact</Link></h5>
        </div>
      </div>  
     <Outlet/>
      </>
        

  )
}

export default Navbar