import React from 'react';
import ReactDOM from 'react-dom/client';
import Newheader from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';



const ViewLayout= ()=>{
    return(
        <>
         <React.StrictMode>
       <Newheader/>
       <Body/>
       <Footer/>
       </React.StrictMode>
      </>
    );
}


const container =React.createElement("div",{id:"container"},  <ViewLayout/>);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);