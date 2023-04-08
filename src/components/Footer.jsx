import { Link } from "react-router-dom";
const Footer= ()=>{
    return(
        <> 
       <div className="footer d-flex">
       <div>
<h2>Footer</h2>
</div> 
 <div>
<ul>
   <li>  <Link to="/">Home</Link> </li>
   <li>  <Link to="about-us-page">About</Link> </li>
   <li>  <Link to="contact-us-page">Contact</Link> </li>

</ul>
</div> 
</div>
</>
    );
}

export default Footer;