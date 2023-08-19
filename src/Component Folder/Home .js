import React from 'react'
import '../navbar.css'
export default function Home() {
  return (
    <>
    <div className='socialicon'>
      <div className='aise-hi'>        
      </div>
        <div>
        <a href="#" style={{color:"white"}} class="fa fa-facebook"></a>
        </div>
        <div>
           <a href="#" style={{color:"white"}}className="fa fa-instagram"></a>
        </div>
        </div>
        
      <img src={require('./background img.png')}alt='' style={{width:"100%"}}/>
        

    </>
  
  )
}
