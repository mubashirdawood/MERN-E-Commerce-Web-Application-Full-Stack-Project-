import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    [
      "px-4 py-2 rounded-full transition-all duration-200",
      "text-sm font-medium",
      isActive
        ? "bg-black text-white shadow-sm"
        : "text-gray-700 hover:bg-white hover:shadow-sm",
    ].join(" ");

  const [visible, setvisible] = useState(false);

  const { showSearch, setShowSearch } = useContext(ShopContext);

  return (
    <div className="sticky top-0 z-50 py-5">
      <div className="flex items-center justify-between font-medium">
        <Link to="/">
          <img src={assets.logo} className="w-36" alt="Logo" />
        </Link>

        {/* pill nav (desktop) */}
        <div className="hidden sm:flex items-center justify-center flex-1 px-6">
          <ul className="flex items-center gap-2 rounded-full border border-2 border-gray-400 bg-white/70 backdrop-blur-sm shadow-lg px-2 py-2">
            <li>
              <NavLink to="/" className={navLinkClass} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/collections" className={navLinkClass}>
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(!showSearch)}
          src={assets.search_icon}
          alt="Search"
          className="w-5 cursor-pointer"
        />
        {/* <img src={assets.cart_icon} alt="Cart"  className='w-5 cursor-pointer'/> */}

        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute right-0 text-gray-500 bg-gray-100 shadow-lg p-4 rounded-md">
            <div className="flex flex-col gap-2 w-36 py-3">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="Cart"
            className="w-5 cursor-pointer"
          />
          <p className="absolute -bottom-1 -right-2 w-4 text-center leading-4 aspect-square rounded-full text-[8px] text-white bg-black">
            10
          </p>
        </Link>

        <img
          onClick={() => {
            setvisible(true);
          }}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />



        {/* sidebar for small screen */}
        <div
          className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
        <div className="flex flex-col text-gray-700">
          <div onClick={()=>{setvisible(false)}} className="flex items-center cursor-pointer gap-4 p-4 border-b">
              <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
              <p>Back</p>
          </div>
          <NavLink onClick={()=>{setvisible(false)}} className="py-3 pl-6 border-b" to='/' end>Home</NavLink>
          <NavLink onClick={()=>{setvisible(false)}} className="py-3 pl-6 border-b" to='/collections'>Collections</NavLink>
          <NavLink onClick={()=>{setvisible(false)}} className="py-3 pl-6 border-b" to='/contact'>Contact</NavLink>
          <NavLink onClick={()=>{setvisible(false)}} className="py-3 pl-6 border-b" to='/about'>About</NavLink>
        </div>


        </div>



        </div>
      </div>
    </div>
  );
};

export default Navbar;
