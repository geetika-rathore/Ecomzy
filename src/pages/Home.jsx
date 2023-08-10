import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false);
  const [carts,setCarts]  =useState([]);
  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCarts(data);
      console.log(data);
    }
    catch (error) {
console.log("Error Aagya");
setCarts([]);
    } 
    setLoading(false);
  }
useEffect(()=>{
fetchData();
},[]);

  return (
    <div className="flex justify-center items-center gap-x-5 relative mx-auto">
{
  loading ?
   (<Spinner />)
    :
   ( carts.length > 0 ? (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-5 min-h-[80vh]  ">
      {
        carts.map( (post) => (
  <Product key={post.id} post={post} />
          ))

      }
    </div>

   ): ( <div className="flex justify-center items-center">
   <p>No Products Found </p> 
   </div>
   )
     
  )
    }
    </div>
  );

};

export default Home;
