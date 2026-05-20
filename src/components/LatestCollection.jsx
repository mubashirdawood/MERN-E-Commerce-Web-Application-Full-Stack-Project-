import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      let filteredProducts = products.slice(0, 10);
      
      // Apply search filter
      if (showSearch && search) {
        filteredProducts = filteredProducts.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      
      setLatestProducts(filteredProducts);
    }
  }, [products, search, showSearch]);

  return (
    <div className="my-20">
      <div className="py-10 text-center">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500 max-w-2xl mt-4">
          Explore our newest arrivals, curated with the latest trends and styles in mind. 
          Fresh designs that bring together quality and modern aesthetics for your everyday wardrobe.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 px-4 sm:px-0">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            _id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
