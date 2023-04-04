import {Imgcdnurl} from '../Constant';

const Restaurantcard= ({name,cuisines,cloudinaryImageId, lastMileTravelString})=>{
   
    return(
        <> 
       <div className="m-content">
       <div className="card">
       <img src={Imgcdnurl+cloudinaryImageId} alt="card" />
       <div className="des">
   <h2>{name} </h2>
   <p> {cuisines.join(",")} </p>
   <h5> {lastMileTravelString} Minutes </h5>
   </div> 
   </div>
</div>
</>
    );
}

export default Restaurantcard;