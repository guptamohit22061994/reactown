import logo from "../assets/shimmer-ui.gif";
const Shimmer =()=>{
    return (
        <>
    <img className="shimer" src={logo} alt="shimerui"/> 
    {/* <h1>Loading.......</h1>
    {/* <div className="s-card"> 
   {Array(10)
   .fill("")
   .map((e, index) => ( 
     <div className="shimmerdiv" key={index}> </div>
     ))}
    </div>  */}
    </>
    );
};

export default Shimmer;