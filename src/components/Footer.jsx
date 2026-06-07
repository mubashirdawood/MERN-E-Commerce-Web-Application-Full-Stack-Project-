import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-linear-to-b from-blue-50 to-cyan-50 border-t-2 border-blue-200 -mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vv]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <img src={assets.logo} alt="Logo" className="mb-6 w-32" />
            <p className="text-blue-700 leading-relaxed mb-6">
              Your trusted destination for premium products and exceptional
              customer service. We're committed to bringing you the best
              shopping experience.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#facebook"
                className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#twitter"
                className="h-10 w-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </a>
              <a
                href="#instagram"
                className="h-10 w-10 rounded-full bg-cyan-600 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.25-.148-4.769-1.693-4.919-4.919-.057-1.265-.069-1.645-.069-4.849 0-3.204.013-3.583.069-4.849.15-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-blue-700 hover:text-cyan-600 transition-colors font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-blue-700 hover:text-cyan-600 transition-colors font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-blue-700 hover:text-cyan-600 transition-colors font-medium"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-blue-700 hover:text-cyan-600 transition-colors font-medium"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#faq"
                  className="text-blue-700 hover:text-cyan-600 transition-colors font-medium"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#returns"
                  className="text-blue-700 hover:text-cyan-600 transition-colors font-medium"
                >
                  Returns & Exchange
                </a>
              </li>
              <li>
                <a
                  href="#shipping"
                  className="text-blue-700 hover:text-cyan-600 transition-colors font-medium"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-blue-700 hover:text-cyan-600 transition-colors font-medium"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-cyan-600 mt-1 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <p className="text-xs text-blue-600">Email</p>
                  <p className="text-blue-900 font-medium">contact@shop.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-cyan-600 mt-1 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.8c.166.913.738 1.857 1.97 3.089 1.231 1.231 2.176 1.804 3.089 1.97.416.078.639.43.8.986l.043.152a1 1 0 01-.964 1.178h-2.693a2 2 0 00-2-2 28.068 28.068 0 01-5.281-5.281 2 2 0 00-2-2H3a1 1 0 01-1-1V3z" />
                </svg>
                <div>
                  <p className="text-xs text-blue-600">Phone</p>
                  <p className="text-blue-900 font-medium">+1 (234) 567-8900</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-cyan-600 mt-1 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-xs text-blue-600">Address</p>
                  <p className="text-blue-900 font-medium">
                    123 Main St, City, Country
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-blue-200 py-8">
          {/* Payment Methods */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-blue-900 mb-4">
              We Accept
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="h-8 px-3 rounded-lg bg-white border border-blue-200 flex items-center justify-center">
                <span className="text-xs font-bold text-blue-900">Visa</span>
              </div>
              <div className="h-8 px-3 rounded-lg bg-white border border-blue-200 flex items-center justify-center">
                <span className="text-xs font-bold text-blue-900">
                  Mastercard
                </span>
              </div>
              <div className="h-8 px-3 rounded-lg bg-white border border-blue-200 flex items-center justify-center">
                <span className="text-xs font-bold text-blue-900">PayPal</span>
              </div>
              <div className="h-8 px-3 rounded-lg bg-white border border-blue-200 flex items-center justify-center">
                <span className="text-xs font-bold text-blue-900">
                  Bank Transfer
                </span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-blue-700">
              &copy; 2026 Your Company. All rights reserved.
            </p>
            <p className="text-xs text-blue-600 mt-4 sm:mt-0">
              Made with <span className="text-cyan-600">♥</span> by Your Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
