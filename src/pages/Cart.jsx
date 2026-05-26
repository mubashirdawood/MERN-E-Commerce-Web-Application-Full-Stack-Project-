import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 4999,
      quantity: 1,
      image: "https://via.placeholder.com/100",
      size: "Free Size",
    },
    {
      id: 2,
      name: "Classic Cotton T-Shirt",
      price: 999,
      quantity: 2,
      image: "https://via.placeholder.com/100",
      size: "M",
    },
    {
      id: 3,
      name: "Denim Jeans",
      price: 2499,
      quantity: 1,
      image: "https://via.placeholder.com/100",
      size: "32",
    },
  ]);

  const currency = "PKR";

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 5000 ? 0 : 299;
  const tax = Math.round(subtotal * 0.17);
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 pb-12">
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-gray-100 p-6">
              <svg
                className="h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 mb-8">
            Add some items to get started with your shopping
          </p>
          <Link
            to="/collections"
            className="inline-block rounded-xl bg-black px-8 py-3 font-semibold text-white hover:bg-gray-900 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {cartItems.length} item(s) in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border-2 border-gray-200 bg-white p-4 sm:p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4 sm:gap-6">
                  {/* Product Image */}
                  <div className="h-24 w-24 sm:h-28 sm:w-28 shrink-0 rounded-xl bg-gray-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Size: {item.size}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {currency} {item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex flex-col justify-between items-end">
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-gray-50 p-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="h-8 w-8 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-600"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-semibold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="h-8 w-8 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-600"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping Link */}
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all mt-6"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 sticky top-28">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="space-y-4 pb-6 border-b border-gray-200">
                {/* Subtotal */}
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-900">
                    {currency} {subtotal.toLocaleString()}
                  </span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <div className="text-right">
                    {shipping === 0 ? (
                      <span className="font-semibold text-green-600">Free</span>
                    ) : (
                      <>
                        <span className="font-semibold text-gray-900">
                          {currency} {shipping}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">
                          Free on orders over {currency} 5,000
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Tax */}
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (17%)</span>
                  <span className="font-semibold text-gray-900">
                    {currency} {tax.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="mb-6 flex justify-between pt-6">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold bg-linear-to-r from-black to-gray-700 bg-clip-text text-transparent">
                  {currency} {total.toLocaleString()}
                </span>
              </div>

              {/* Checkout Button */}
              <Link
                to="/placeorder"
                className="block w-full rounded-xl bg-black px-6 py-3 text-center font-semibold text-white hover:bg-gray-900 transition-colors mb-3"
              >
                Proceed to Checkout
              </Link>

              {/* Continue Shopping Button */}
              <button
                onClick={() => window.history.back()}
                className="w-full rounded-xl border-2 border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </button>

              {/* Security Info */}
              <div className="mt-6 rounded-lg bg-green-50 p-4">
                <div className="flex gap-3">
                  <svg
                    className="h-5 w-5 text-green-600 mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L7.414 8l3.293 3.293a1 1 0 01-1.414 1.414l-4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-green-900">
                      Your payment is secure
                    </p>
                    <p className="text-xs text-green-700">
                      We use SSL encryption to protect your data
                    </p>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mt-6">
                <p className="mb-2 text-sm font-semibold text-gray-900">
                  Apply Promo Code
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
                  />
                  <button className="rounded-lg bg-gray-200 px-4 py-2 font-semibold text-gray-900 hover:bg-gray-300 transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <svg
              className="mx-auto mb-3 h-8 w-8 text-gray-900"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
            </svg>
            <h3 className="font-semibold text-gray-900">Secure Checkout</h3>
            <p className="text-xs text-gray-600 mt-1">SSL Encrypted</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <svg
              className="mx-auto mb-3 h-8 w-8 text-gray-900"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2 1 1 0 010 2zM9 11a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0zM9 15a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="font-semibold text-gray-900">Easy Returns</h3>
            <p className="text-xs text-gray-600 mt-1">30-Day Guarantee</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <svg
              className="mx-auto mb-3 h-8 w-8 text-gray-900"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
            <h3 className="font-semibold text-gray-900">Fast Shipping</h3>
            <p className="text-xs text-gray-600 mt-1">2-3 Days Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
