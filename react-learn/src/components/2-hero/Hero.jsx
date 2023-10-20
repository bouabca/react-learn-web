import React from 'react'
import './hero.css'

function Hero() {
  return (
   <section className='hero flex'>
     <div className='left-section '>
       <div className="parent-avatar flex">
<img src="/estin.png"  className='avatar'alt="" />
<div className='icon-verified'></div>

       </div>
       <h1 className="title">
    Ecole Superieure De science Et Thecnologie Informatique
   </h1>
   <div className="sub-title">
    In this website you can learn any thinke you need to be a 
    professionall programeur and have a big experience make you good to get a job
   </div>
   <div className="icons">
     <div className="icon icon-twitter"></div>
     <div className="icon icon-instagram"></div>
     <div className="icon icon-linkedin"></div>
     <div className="icon icon-github"></div>

   </div>
     </div>
 
    <div className="right-section border">
      animation

    </div>



   </section>
  )
}

export default Hero