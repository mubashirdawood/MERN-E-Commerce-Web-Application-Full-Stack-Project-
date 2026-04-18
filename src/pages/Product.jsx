import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext); // 'currency' comes from here
  const [productsData, setProductsData] = useState(null);
  const [image, setIamage] = useState("");

  const fetchProduct = () => {
    // Use .find() instead of .map() for better performance
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductsData(item);
      setIamage(item.image[0]);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId, products]);

  return productsData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-300 opacity-100">
      <div className="flex flex-col sm:flex-row gap-12">
        
        {/* Product Images */}
        <div className="flex-1  flex flex-col-reverse sm:flex-row gap-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productsData.image.map((item, index) => (
              <img
                onClick={() => setIamage(item)}
                src={item}
                key={index}
                className="w-[30%]   sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full rounded-2xl overflow-hidden  sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-bold text-2xl mt-2">{productsData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2">(133)</p>
          </div>
          
          {/* FIX: Use the global 'currency' variable here */}
          <p className="mt-15 text-3xl font-bold">
            {currency}{productsData.price}
          </p>
          
          <p className="mt-5 text-gray-500 md:w-4/5">{productsData.description}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;