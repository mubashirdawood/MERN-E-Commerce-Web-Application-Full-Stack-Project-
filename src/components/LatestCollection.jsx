import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "./Title";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [LatestProducts, setLatestProducts]=useState([]);

  useEffect(()=>{

    setLatestProducts(products.slice(0,10));
    
  },[])
  return (
    <div className="my-10 ">
      <div className="py-8 text-4xl text-center">
        <Title  text1={"Latest"} text2={" Collection"}></Title>
        <p className="w-3/4 m-auto text-xs md:text-sm  text-shadow-gray-700">
          Discover the latest trends in our collection, featuring new arrivals that blend style and comfort. Shop now to stay ahead of the fashion curve with our fresh and exciting pieces.
        </p>
      </div>
      {/* render products */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 gap-y-6">
       {
        LatestProducts.map((item, index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))
      }
      </div>

    </div>
  );
};

export default LatestCollection;
