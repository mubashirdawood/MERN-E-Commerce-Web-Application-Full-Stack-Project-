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
    <div className="min-h-screen bg-linear-to-b from-blue-50 via-cyan-50 to-teal-50 pt-10 pb-20 mt-10 pl-3 pr-4  border-t-cyan-950  -mx-4 sm:-mx-[5vw] md:-mx-[6vw] lg:-mx-[9vv]">
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 px-0">
        {/* Filter Sidebar */}
        <div className="w-full sm:w-64">
          {/* Filter Toggle Button */}
          <div
            onClick={() => setShowFilter(!showFilter)}
            className="mb-6 flex items-center justify-between p-4 rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 text-white cursor-pointer hover:shadow-lg transition-shadow sm:hidden"
          >
            <span className="text-lg font-bold">Filters</span>
            <svg
              className={`h-5 w-5 transition-transform duration-300 ${
                showFilter ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          {/* Filters Container */}
          <div
            className={`transition-all duration-300 overflow-hidden sm:block ${
              showFilter
                ? "max-h-full opacity-100"
                : "max-h-0 opacity-0 sm:max-h-full sm:opacity-100"
            }`}
          >
            {/* Category Filters */}
            <div className="rounded-2xl border-2 border-blue-200 bg-white p-6 mb-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-5">
                <div className="h-1 w-1 rounded-full bg-blue-600"></div>
                <p className="text-lg font-bold text-blue-900 uppercase tracking-wide">
                  Categories
                </p>
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-blue-50 transition-colors">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-2 border-cyan-300 text-cyan-600 focus:ring-2 focus:ring-cyan-400 cursor-pointer"
                    value={"Men"}
                    onChange={toggleCategory}
                  />
                  <span className="text-blue-900 font-medium">Men</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-blue-50 transition-colors">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-2 border-cyan-300 text-cyan-600 focus:ring-2 focus:ring-cyan-400 cursor-pointer"
                    value={"Women"}
                    onChange={toggleCategory}
                  />
                  <span className="text-blue-900 font-medium">Women</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-blue-50 transition-colors">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-2 border-cyan-300 text-cyan-600 focus:ring-2 focus:ring-cyan-400 cursor-pointer"
                    value={"Kids"}
                    onChange={toggleCategory}
                  />
                  <span className="text-blue-900 font-medium">Kids</span>
                </label>
              </div>
            </div>

            {/* Type Filters */}
            <div className="rounded-2xl border-2 border-cyan-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-5">
                <div className="h-1 w-1 rounded-full bg-cyan-600"></div>
                <p className="text-lg font-bold text-cyan-900 uppercase tracking-wide">
                  Types
                </p>
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-cyan-50 transition-colors">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-2 border-blue-300 text-blue-600 focus:ring-2 focus:ring-blue-400 cursor-pointer"
                    value={"Topwear"}
                    onChange={toggleSubCategory}
                  />
                  <span className="text-cyan-900 font-medium">Topwear</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-cyan-50 transition-colors">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-2 border-blue-300 text-blue-600 focus:ring-2 focus:ring-blue-400 cursor-pointer"
                    value={"Bottomwear"}
                    onChange={toggleSubCategory}
                  />
                  <span className="text-cyan-900 font-medium">Bottomwear</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-cyan-50 transition-colors">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-2 border-blue-300 text-blue-600 focus:ring-2 focus:ring-blue-400 cursor-pointer"
                    value={"Winterwear"}
                    onChange={toggleSubCategory}
                  />
                  <span className="text-cyan-900 font-medium">Winterwear</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1">
          {/* Header and Sort */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-900 mb-2">
                  All Collections
                </h1>
                <p className="text-cyan-700 font-medium">
                  {filterProducts.length} products found
                </p>
              </div>

              {/* Sort Dropdown */}
              <select
                onChange={(e) => {
                  setSortType(e.target.value);
                }}
                className="rounded-xl border-2 border-cyan-300 bg-white px-5 py-3 font-medium text-blue-900 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer transition-all"
              >
                <option value="relevant">Sort: Relevant</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>

            {/* Divider */}
            <div className="h-1 bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 rounded-full"></div>
          </div>

          {/* Products Grid */}
          {filterProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
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
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <svg
                className="h-16 w-16 text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters or search terms
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
