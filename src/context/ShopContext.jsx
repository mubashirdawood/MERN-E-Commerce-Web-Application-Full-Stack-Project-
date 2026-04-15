import { createContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";

export const ShopContext = createContext();
// contain all the global states and functions related to the shop
const ShopContextProvider = (props) => {
  const currency = "PKR";
  const deliveryfee = 500;
   const [search,setSearch]=useState('');
   const[showSearch,setShowSearch]=useState(false);



  const value = {
    products,
    currency,
    deliveryfee,
    showSearch,setShowSearch,search,setSearch
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};


export default ShopContextProvider;
