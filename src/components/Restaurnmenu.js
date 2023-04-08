import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Imgcdnurl } from "../Constant";
import Shimmer from "./Shimmer";
const Restaurantmenu = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant]=useState({});
   
    useEffect(() => {
    getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6210604&lng=77.0404562&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
         setRestaurant(json.data);
    }

    return !restaurant ? ( 

    <Shimmer/>
    ) : (
        <>
    <div className="mt-5 text-center">
      <h1> Restaurant id: {id}  </h1> 
   
      <h2> {restaurant.name}  </h2> 
      <img src={Imgcdnurl + restaurant.cloudinaryImageId}/>
 </div>
    </>
    );
    };
    
    export default Restaurantmenu;