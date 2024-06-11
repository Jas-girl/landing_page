import React,{useState} from 'react'
import "./style.css"

const Navbar = () => {
 
  const displayMenu=()=>{
     var x=document.querySelector(".navbar")
     if(x.style.display==="block"){
        x.style.display="none";
     }
     else{
      x.style.display="block";
     }
  }
  return (
   <div className="navigation">
   {/* logo part */}
    <div className="logo">
     <img src="/images/brand_logo.png" alt="logo"></img>
      </div>
      {/* navbar menu */}
    <div className="navbar">
    <ul className="menu-links">
        <li><a href="/">MENU</a></li>
        <li><a href="/">LOCATION</a></li>
        <li><a href="/">ABOUT</a></li>
        <li><a href="/">CONTACT</a></li>
    </ul>
    </div>
   
    {/* button */}
    <button><a href="/">LOGIN</a></button>

    {/* mobile-icons */}
    <div className="icons-bar">
    <ion-icon name="menu-outline" className="icons menu" onClick={displayMenu}></ion-icon>
    
    </div>

    </div>
    
  )
}

export default Navbar