import React, { useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { useContext } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  
  const { products } = useContext(ShopContext);
  const [BestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const BestProducts = products.filter((product) => product.bestseller);
    setBestSeller(BestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Best "} text2={"Sellers"}></Title>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our most popular products
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
        {BestSeller.map((product, index) => (
          <ProductItem
            key={index}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
