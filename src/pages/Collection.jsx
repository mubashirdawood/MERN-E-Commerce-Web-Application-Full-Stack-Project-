import React from "react";
import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();
    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category),
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    setFilterProducts(productCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));

        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));

        break;
      default:
        applyFilter();

        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* filter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-2xl font-bold flex items-center cursor-pointer gap-2 text-gray-900"
        >
          FILTERS{" "}
          <img
            className={`h-4 sm:hidden transition-all duration-300 ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        <div
          className={`transition-all duration-300 overflow-hidden sm:block ${showFilter ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 sm:max-h-[1000px] sm:opacity-100"}`}
        >
          {/* Category filters */}
          <div className="bg-linear-to-br from-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl pl-6 py-4 mt-6 shadow-sm hover:shadow-md transition-shadow">
            <p className="mb-4 text-sm font-bold text-gray-800 uppercase tracking-wide">CATEGORIES</p>
            <div className="flex flex-col gap-3 text-sm font-medium text-gray-700">
              <label className="flex items-center gap-3 cursor-pointer hover:bg-white/50 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-400 text-black focus:ring-2 focus:ring-black cursor-pointer"
                  value={"Men"}
                  onChange={toggleCategory}
                />
                <span>Men</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer hover:bg-white/50 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-400 text-black focus:ring-2 focus:ring-black cursor-pointer"
                  value={"Women"}
                  onChange={toggleCategory}
                />
                <span>Women</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer hover:bg-white/50 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-400 text-black focus:ring-2 focus:ring-black cursor-pointer"
                  value={"Kids"}
                  onChange={toggleCategory}
                />
                <span>Kids</span>
              </label>
            </div>
          </div>
          {/* subcategory */}
          <div className="bg-linear-to-br from-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl pl-6 py-4 my-6 shadow-sm hover:shadow-md transition-shadow">
            <p className="mb-4 text-sm font-bold text-gray-800 uppercase tracking-wide">TYPES</p>
            <div className="flex flex-col gap-3 text-sm font-medium text-gray-700">
              <label className="flex items-center gap-3 cursor-pointer hover:bg-white/50 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-400 text-black focus:ring-2 focus:ring-black cursor-pointer"
                  value={"Topwear"}
                  onChange={toggleSubCategory}
                />
                <span>Topwear</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer hover:bg-white/50 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-400 text-black focus:ring-2 focus:ring-black cursor-pointer"
                  value={"Bottomwear"}
                  onChange={toggleSubCategory}
                />
                <span>Bottomwear</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer hover:bg-white/50 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-400 text-black focus:ring-2 focus:ring-black cursor-pointer"
                  value={"Winterwear"}
                  onChange={toggleSubCategory}
                />
                <span>Winterwear</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* right side */}

      <div className="flex-1 ">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-base md:text-2xl mb-4 gap-2 sm:gap-0">
          <Title text1={"ALL"} text2={"COLLECTIONS"}></Title>
          {/* SORT */}
          <select
            onChange={(e) => {
              setSortType(e.target.value);
            }}
            className="border-2 border-gray-700 p-2 text-sm px-2 w-full sm:w-auto"
          >
            <option value="relevant">Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
        {/* MAP PRODUCTS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              _id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
