import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between font-medium py-5 ">
      <img src={assets.logo} className="w-36" alt="Logo" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-600">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 h-[1.5] bg-grey- hidden" />
        </NavLink>
        <NavLink to="/collections" className="flex flex-col items-center gap-1">
          <p>Collections</p>
          <hr className="w-2/4 h-[1.5] bg-grey- hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 h-[1.5] bg-grey- hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 h-[1.5] bg-grey- hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
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
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 aspect-square rounded-full text-[8px] text-white bg-black">
            10
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
