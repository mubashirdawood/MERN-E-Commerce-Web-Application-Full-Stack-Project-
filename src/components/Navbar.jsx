import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {

const [visible,setvisible]=useState(false);

 const {showSearch, setShowSearch} = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between font-medium py-5 ">
      <Link to="/"><img src={assets.logo} className="w-36" alt="Logo" /></Link>
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
         onClick={() => 
          
          
          setShowSearch(!showSearch)
        }

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
          <p className="absolute `bottom-[-5px]`  w-4 text-center leading-4 aspect-square rounded-full text-[8px] text-white bg-black">
            10
          </p>
        </Link>

         <img onClick={()=>{setvisible(true)}} src={assets.menu_icon}  className="w-5 cursor-pointer sm:hidden" alt="" />



        {/* sidebar for small screen */}
        <div className={`absolute top-0 bg-gray right-0 bottom-0 bg-white overflow-hidden transition-all ${visible ? 'w-full' : 'w-0'} `}>
        <div className="flex flex-col text-gray-500">
          <div onClick={()=>{setvisible(false)}} className="flex items-center cursor-pointer gap-4 p-3">
              <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
              <p>Back</p>
          </div>
          <NavLink onClick={()=>{setvisible(false)}} className="py-2 pl-6 border-b" to='/' >Home</NavLink>
          <NavLink onClick={()=>{setvisible(false)}} className="py-2 pl-6 border-b" to='/collections'>Collections</NavLink>
          <NavLink onClick={()=>{setvisible(false)}} className="py-2 pl-6 border-b" to='/contact'>Contact</NavLink>
          <NavLink onClick={()=>{setvisible(false)}} className="py-2 pl-6 border-b" to='/about'>About</NavLink>
        </div>


        </div>



      </div>
    </div>
  );
};

export default Navbar;
