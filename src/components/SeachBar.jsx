import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setvisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collections")) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50  text-center">
      <div className="inline-flex mr-2 items-center justify-center border border-gray-300 px-5 py-2 my-5 rounded-full w=3/4 sm:w-1/2  mx-auto">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for products"
          className="flex-1 outline-none bg-inherit text-sm"
        ></input>
        <img className="w-4 h-4" src={assets.search_icon} alt="Search" />
      </div>
      <img
        src={assets.cross_icon}
        className="cursor-pointer w-3 inline"
        onClick={() => setShowSearch(false)}
        alt="Close"
      />
    </div>
  ) : null;
};

export default SearchBar;
