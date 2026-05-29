import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault(); //not reload page on submit
  };

  return (
    <div className="bg-linear-to-r from-blue-500 to-cyan-500 rounded-3xl px-6 py-12 sm:px-12 my-16">
      <p className="text-2xl sm:text-3xl font-bold text-white">
        Subscribe to our newsletter and get 10% off your first purchase
      </p>
      <p className="text-blue-100 mt-3 text-sm sm:text-base">
        Enter your email address to stay updated with our latest news and
        offers.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex flex-col sm:flex-row items-center gap-3 my-6 mx-auto"
      >
        <input
          className="sm:flex-1 outline-none w-full rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-white rounded-lg text-blue-600 px-8 py-3 font-semibold hover:bg-blue-50 transition-colors w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
