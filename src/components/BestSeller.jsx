import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const bestProducts = products.filter((product) => product.bestseller);
      setBestSeller(bestProducts.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-20">
      <div className="text-center py-10">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500 max-w-2xl mt-4">
          Our most-loved pieces, chosen by you. These top-rated products are consistently 
          popular for their exceptional quality and timeless appeal.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 px-4 sm:px-0">
        {bestSeller.map((product, index) => (
          <ProductItem
            key={index}
            _id={product._id}
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
