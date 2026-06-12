import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setvisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname.includes("collections") ||
      location.pathname === "/"
    ) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  }, [location]);

  const handleSearch = () => {
    if (search.trim()) {
      setShowSearch(true);
      if (location.pathname !== "/collections") {
        navigate("/collections");
      }
    }
  };

  return (
    <AnimatePresence>
      {showSearch && visible && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="border-t border-b bg-gray-50 text-center relative"
        >
          <div className="inline-flex items-center justify-center border border-gray-300 px-5 py-2 my-5 rounded-full w-3/4 sm:w-1/2 mx-auto bg-white shadow-sm transition-focus-within focus-within:ring-2 focus-within:ring-blue-200">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              type="text"
              placeholder="Search for products"
              className="flex-1 outline-none bg-inherit text-sm"
            ></input>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-4 h-4 cursor-pointer"
              src={assets.search_icon}
              alt="Search"
              onClick={handleSearch}
            />
          </div>
          <motion.img
            whileHover={{ scale: 1.2, rotate: 90 }}
            src={assets.cross_icon}
            className="cursor-pointer w-3 absolute right-6 top-1/2 -translate-y-1/2"
            onClick={() => setShowSearch(false)}
            alt="Close"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchBar;
