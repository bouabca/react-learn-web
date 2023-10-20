import React, { useState } from 'react'
import './header.css'


function Header() {
  let i=1;
  const [showModel,setshowModal]= useState(false)

  return (
<header className=' flex'>
  <button className='menu icon-menu icon' onClick={()=>setshowModal(true)}></button>
  <div></div>
  <nav>
  <ul className='flex'>
    <li>
      <a href="">About</a>
      </li>
  <li>
    <a href="">Articls</a>
    </li>
  <li>
    <a href="">Projects</a>
    </li>
  <li>
    <a href="">Speaking</a>
    </li>
  <li>
    <a href="">Contact</a>
    </li>
    </ul>

  </nav>
  <button className='icon-moon-o icon mode' onClick={()=>{
   if (i%2==0){
    document.body.classList.remove('light');
  
   }else{ document.body.classList.add('light');
  }
  i++;

  }}>

  </button>
 {showModel&& <div className='fixed'><ul className='modal border'>
  <li><button  className='icon-close' onClick={()=>{setshowModal(false)}}></button></li>
  <li>
      <a href="">About</a>
      </li>
  <li>
    <a href="">Articls</a>
    </li>
  <li>
    <a href="">Projects</a>
    </li>
  <li>
    <a href="">Speaking</a>
    </li>
  <li>
    <a href="">Contact</a>
    </li>
    
    
    
    </ul></div>}
</header>
  )
}

export default Header

