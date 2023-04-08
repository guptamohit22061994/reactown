import Newheader from './Header';
import Footer from './Footer';
import { useRouteError } from 'react-router-dom';

const Error =() => {
  const err = useRouteError();
  console.log(err);
return(
    <>
     <Newheader/>
    <div className="mt-5 text-center">
    <h1>OOPS!! Something Went Wrong</h1>
    <br/>
  <h1> {err.status + " : " + err.statusText}   </h1> 
  <h1> {err.internal + " : " + err.data}   </h1> 
  

  
    </div>
    <Footer/>
    </>
);
}

export default Error;