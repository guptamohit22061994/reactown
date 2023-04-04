//config driven UI

import { useState, useEffect } from 'react';
import {restaurantlist} from '../Constant';
import Restaurantcard from './Restaurantcard';


function filterData(searchText, restaurants){
  const filterData = restaurants.filter((restaurant)=>
  restaurant.data.name.includes(searchText));
  return filterData;
}
const Body= ()=>{
    const [restaurants, setRestaurants]=useState(restaurantlist);
    const [searchText, setSearchText]=useState("");   //to create state variable

  useEffect(()=>{
console.log("useeefect");
  },[searchText]);
    return(
        <>
        <div className="d-flex justify-content-between ms-2 mt-2">
            <input type="text" className="form-control" placeholder="search..." value={searchText} 
            onChange={(e)=>{
             setSearchText(e.target.value)}}/>
           
            <button className="btn-search" onClick={()=>{
            const data= filterData(searchText, restaurants);
            setRestaurants(data);
                }}>search</button>
        </div>
    <div className="rescard">
{
    restaurants.map((restaurant)=>{
       return <Restaurantcard {...restaurant.data} key={restaurant.data.id} />;
    })
    }
</div>
</>
 );
}
export default Body;