import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import { useEffect } from "react";



const Product=()=>{
  const {productId}=useParams();
  const {products}=useContext(ShopContext);
  const [productsData,setProductsData]=useState(false);
 const [image,setIamage]=useState("");

  const fetchProduct=()=>{

    products.map((item)=>{
      if(item._id===productId){
        setProductsData(item);
        setIamage(item.image[0]);
        console.log(item);
        return;
      }
    })

  }
  useEffect(()=>{
    fetchProduct();
  },[productId,products])
  return productsData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-300 opacity-100">
   {/* Product Details */}
  <div className="flex flex-col md:flex-row gap-10 sm:gap-12"></div>
{/* Product Images */}




    </div>
  ): <div className="opacity-0"></div>
}

export default Product;