 import { useState } from "react";
 const Title= ()=>{
    return(
        <>
     <a href="/" className="logo">
  <h2>Logo</h2>
  </a>
  </>
  
    );
  }
  
   const Header= ()=>{
    const [title, setTitle]=useState("MY Resturant");
      return(
          <>
          <div className="wrapper">
         <Title/>
         <h5> {title}</h5>
         <button onClick={()=>setTitle("My App")}>Click Me</button>
  <nav className="navbar">
      <ul className="menu">
        <li> <a href="#"> Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
         <li><a href="#">Contact Us</a></li>
   </ul>
  </nav>
  
  </div>
  
  </>
  
      );
  }
  

export default Header;