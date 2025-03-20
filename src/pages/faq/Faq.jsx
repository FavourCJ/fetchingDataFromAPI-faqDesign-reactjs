import React, { useState } from 'react'
import "./faq.css"
import { useNavigate } from 'react-router-dom'
import sparkle from "../../public/images/sparkle.png"
import bg from "../../public/images/faq-bg.svg"
function Faq() {
    const [toggleOne, settoggleOne] = useState(false)
    const [toggleTwo, settoggleTwo] = useState(false)
    const [toggleThree, settoggleThree] = useState(false)
    const navigate = useNavigate();
    return (
      <div className='faq-container'>
        <div className='bg-card-container'>
          <div className='bg-card-section'> 
          <div className='bg-container'>
            <img src={bg} className='bg'/>
          </div>
          <div className='card-container' >
          <div className='faq-card'> 
         <h1>
           <span><img src={sparkle} className='sparkle'/></span>
           FAQs
         </h1>
         <div className='faqs-container'>
  
           <div className='faqs'>
           <div className='faqs-txt-btn-container'>
           <p className='faq-question'>What is Frontend Mentor, and how will it help me?</p>
           <button
            className= {toggleOne ? "fa-solid fa-minus" : "fa-solid fa-plus"}
            onClick={()=>{
              settoggleOne(!toggleOne)
            }}></button>
            </div>
            <p className='faq-responds' id= {toggleOne ? "show" : "hide"}>
            Frontend Mentor offers realistic coding challenges to help developers improve their frontend 
            coding skills with projects in HTML. CSS and javaScript. It's suitable for all levels and ideal for
            portfolio building
           </p>
            </div>    
  
            <div className='faqs'>
            <div className='faqs-txt-btn-container'>
            <p className='faq-question'>Can I use Frontend Mentor projects in my portfolio?</p>
            <button
            className= {toggleTwo ? "fa-solid fa-minus" : "fa-solid fa-plus"}
            onClick={()=>{
              settoggleTwo(!toggleTwo)
            }}></button>
            </div>
            <p className='faq-responds' id= {toggleTwo ? "show" : "hide"}> Yes you can</p>
            </div> 
  
            <div className='faqs'>
            <div className='faqs-txt-btn-container'>
            <p className='faq-question'>How can I  get help if I'm stuck on a Frontend Mentor Challenge?</p>
            <button
            className= {toggleThree ? "fa-solid fa-minus" : "fa-solid fa-plus"}
            onClick={()=>{
              settoggleThree(!toggleThree)
            }}></button>
            </div>
            <p className='faq-responds' id= {toggleThree ? "show" : "hide"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
           </p>
            </div> 
          </div>        
        </div>
          </div>
          <div className='view-reviews-btn-div'>
            
          <button 
           className='view-reviews-btn'
           onClick={()=>{
             navigate("/reviews")
           }}>View Reviews</button>
          </div>

          </div>    
        </div>
        </div>
    );
}

export default Faq