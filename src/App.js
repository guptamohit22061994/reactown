import React from 'react';
import ReactDOM from 'react-dom/client';
import Newheader from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Restaurantmenu from './components/Restaurnmenu';

const ViewLayout= ()=>{
    return(
        <>
         <React.StrictMode>
          <Newheader/>
          <Outlet/>
          <Footer/>
       </React.StrictMode>
      </>
    );
}

const appRouter = createBrowserRouter([
  {
   path:"/",
   element:<ViewLayout/>, 
   errorElement:<Error/>,
   children:[
    {
      path:"/",
     element:<Body/>, 
    },{
      path:"/about-us-page",
     element:<About/>, 
    }, {
      path:"/contact-us-page",
     element:<Contact/>, 
    },{
      path:"/restaurant/:id",
      element:<Restaurantmenu/>, 
    }
   ]
  },
  ])
  

const container =React.createElement("div",{id:"container"},  <RouterProvider router={appRouter}/>);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);