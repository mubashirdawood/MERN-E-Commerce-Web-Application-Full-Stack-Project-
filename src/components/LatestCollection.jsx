import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { motion } from "framer-motion";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div className="my-20">
      <div className="py-10 text-center">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500 max-w-2xl mt-4"
        >
          Explore our newest arrivals, curated with the latest trends and styles in mind. 
          Fresh designs that bring together quality and modern aesthetics for your everyday wardrobe.
        </motion.p>
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
