import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import { useEffect } from "react";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productsData, setProductsData] = useState(false);
  const [image, setIamage] = useState("");

  const fetchProduct = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductsData(item);
        setIamage(item.image[0]);
        console.log(item);
        return;
      }
    });
  };
  useEffect(() => {
    fetchProduct();
  }, [productId, products]);
  return productsData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-300 opacity-100">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-10 sm:gap-12"></div>
      {/* Product Images */}
      <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
        <div className="flex sm:flex-col  overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
          {
            productsData.image.map( (item,index)=>{
              return <img onClick={()=>setIamage(item)} src={item} key={index} className=" w-[24%] sm:w-full sm:mb-3  cursor-pointer" alt="" />;
            } ) 
          }
        </div>
        <div className="sm:w-[80%] w-full">
          <img src={image} className="w-full h-auto object-cover" alt="" />
        </div>

      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
