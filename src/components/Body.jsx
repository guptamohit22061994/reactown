//config driven UI

import { useState, useEffect } from 'react';
import {restaurantlist} from '../Constant';
import Restaurantcard from './Restaurantcard';
import Shimmer from "./Shimmer"

function filterData(searchText, restaurants){
  const filterData = restaurants.filter((restaurant)=>
  restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
  return filterData;
 
}
const Body= () => {
  const [allRestaurants, setAllRestaurants]= useState([]);
    const [filteredrestaurants, setFilteredRestaurants]=useState([]);
    const [searchText, setSearchText]=useState("");   //to create state variable
   
  useEffect(()=>{
    getRestaurants();
  },[]);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6210604&lng=77.0404562&page_type=DESKTOP_WEB_LISTING");
    const json = await  data.json()
console.log(json);

// optional chaning
setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  } 
console.log("render");

// conditonal rendring
// if resturant empty=>simmer Ui
// if resturant has load actual data

if(!allRestaurants) return null;

if(filteredrestaurants?.length === 0) 
return <h1>No Result Match Found!!</h1>;

    return allRestaurants?.length === 0 ? (
 <Shimmer/>
    ):(
        <>
        <div className="d-flex justify-content-between ms-2 mt-2">
        <div class="input-group">
        <input type="search" className="form-control" placeholder="search..." value={searchText} 
            onChange={(e)=>{
             setSearchText(e.target.value)}} required="required"/>
      <div class="input-group-append">
       
      <button className="btn-search input-group-text" onClick={()=>{
            const data= filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
                }}>search</button>  
      </div>
    </div>
           
        </div>
    <div className="rescard">
{
  filteredrestaurants.map((restaurant)=>{
       return <Restaurantcard {...restaurant.data} key={restaurant.data.id} />;
    })
    }
</div>
</>
 );
}
export default Body;