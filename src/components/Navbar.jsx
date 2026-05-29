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
        ? "bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-md"
        : "text-blue-700 hover:bg-blue-50 hover:shadow-sm",
    ].join(" ");

  const [visible, setvisible] = useState(false);

  const { showSearch, setShowSearch } = useContext(ShopContext);

  return (
    <div>
      <div className="sticky mt-4 top-0 z-50 py-5 bg-linear-to-r from-blue-50 to-cyan-50 shadow-md rounded-3xl border-2 border-blue-200">
        <div className="flex items-center justify-between font-medium px-4 sm:px-6">
          <Link to="/">
            <img src={assets.logo} className="w-28 sm:w-36" alt="Logo" />
          </Link>

          <div className="hidden rounded-full sm:flex items-center justify-center flex-1 px-6">
            <ul className="flex items-center gap-4 rounded-full border-2 border-cyan-300 bg-white/70 backdrop-blur-sm shadow-lg px-4 py-2">
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

          <div className="flex items-center gap-4">
            <img
              onClick={() => setShowSearch(!showSearch)}
              src={assets.search_icon}
              alt="Search"
              className="w-5 cursor-pointer"
            />

            <div className="group relative">
              <img
                src={assets.profile_icon}
                alt="Profile"
                className="w-5 cursor-pointer hover:opacity-70 transition-opacity"
              />
              <div className="group-hover:block hidden absolute right-0 text-cyan-700 bg-cyan-50 shadow-lg p-4 rounded-xl z-50 border border-cyan-200">
                <div className="flex flex-col gap-2 w-36 py-3">
                  <Link
                    to="/profile"
                    className="cursor-pointer hover:text-blue-600 block font-medium"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/order"
                    className="cursor-pointer hover:text-blue-600 block font-medium"
                  >
                    Orders
                  </Link>
                  <Link
                    to="/logout"
                    className="cursor-pointer hover:text-red-600 block text-red-600 font-semibold border-t border-cyan-200 pt-2"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/cart" className="relative">
              <img
                src={assets.cart_icon}
                alt="Cart"
                className="w-5 cursor-pointer hover:opacity-70 transition-opacity"
              />
              <p className="absolute -bottom-1 -right-2 w-4 text-center leading-4 aspect-square rounded-full text-[8px] text-white bg-linear-to-r from-blue-600 to-cyan-600">
                10
              </p>
            </Link>

            <img
              onClick={() => {
                setvisible(true);
              }}
              src={assets.menu_icon}
              className="w-5 cursor-pointer sm:hidden"
              alt="Menu"
            />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setvisible(false)}
        ></div>
        <div
          className={`fixed top-0 right-0 bottom-0 z-50 bg-linear-to-b from-blue-50 to-cyan-50 overflow-hidden transition-transform duration-300 transform ${
            visible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col text-blue-700 h-full">
            <div
              onClick={() => {
                setvisible(false);
              }}
              className="flex items-center cursor-pointer gap-4 p-4 border-b border-blue-200"
            >
              <img
                className="h-4 rotate-180"
                src={assets.dropdown_icon}
                alt="Close"
              />
              <p className="font-semibold text-blue-900">Close</p>
            </div>
            <NavLink
              onClick={() => {
                setvisible(false);
              }}
              className="py-3 pl-6 border-b border-blue-200 hover:bg-blue-100 transition-colors font-medium"
              to="/"
              end
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => {
                setvisible(false);
              }}
              className="py-3 pl-6 border-b border-blue-200 hover:bg-blue-100 transition-colors font-medium"
              to="/collections"
            >
              Collections
            </NavLink>
            <NavLink
              onClick={() => {
                setvisible(false);
              }}
              className="py-3 pl-6 border-b border-blue-200 hover:bg-blue-100 transition-colors font-medium"
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink
              onClick={() => {
                setvisible(false);
              }}
              className="py-3 pl-6 border-b border-blue-200 hover:bg-blue-100 transition-colors font-medium"
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
