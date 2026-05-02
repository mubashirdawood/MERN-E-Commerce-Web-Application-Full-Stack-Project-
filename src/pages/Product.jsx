import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext); // 'currency' comes from here
  const [productsData, setProductsData] = useState(null);
  const [image, setIamage] = useState("");
  const [size, setSize] = useState("");

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
            {currency}
            {productsData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productsData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="text-lg font-semibold">Size</p>

            <div className="flex gap-2">
              {productsData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)} // Corrected to onClick
                  key={index}
                  className={`border border-gray-300 hover:bg-black p-4 hover:text-white transition-colors 
                  ${item === size ? "border-orange-500" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white py-3 px-8 active:bg-gray-600 hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on Delivery available</p>
            <p>Easy Returns and Exchanges</p>
          </div>
        </div>
      </div>
      {/* Description and reviews */}
      <div className="mt-20">
        <div className="flex gap-2">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (133)</p>
        </div>
        <div className=" flex flex-col gap-4 px-6 py-6 text-sm border mt-2 text-gray-600 ">
          <p>{productsData.description}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            voluptatem atque vel, eum maxime optio dolor quisquam eius molestias
            eaque repudiandae dolore temporibus facere amet repellat explicabo
            nobis? Ullam, quaerat. Dolores eveniet ab velit, alias ullam, ea est
            sequi consequatur, recusandae blanditiis veniam eaque quis maiores
            voluptatum quos voluptatibus quas sit doloribus iste? Dicta
            molestias, quibusdam deleniti aliquid similique delectus. Repellat
            magnam autem esse voluptatibus, eos impedit, est facilis libero
            repudiandae labore reprehenderit! Sapiente, provident, eum odio
            eligendi quisquam eius optio ipsa qui voluptas nostrum, at quasi est
            totam beatae!
          </p>
        </div>
      </div>



      {/* related products */}
      
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
