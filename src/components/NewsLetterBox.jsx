import React, { useState } from "react";

const NewsLetterBox = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="my-20">
      {/* Main Newsletter Card */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-cyan-500 to-teal-500 px-6 py-16 sm:px-12 sm:py-20 shadow-2xl">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 mb-6 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-xs font-semibold text-white">
              EXCLUSIVE OFFER
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Get 10% Off Your{" "}
            <span className="bg-linear-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent">
              First Order
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-blue-50 mb-8 max-w-2xl">
            Subscribe to our newsletter and be the first to know about new
            collections, exclusive deals, and special promotions. Plus, enjoy
            10% discount on your next purchase!
          </p>

          {/* Success Message */}
          {submitted && (
            <div className="mb-6 rounded-xl bg-green-500/20 border border-green-400 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-green-100 font-semibold">
                  Thanks for subscribing! Check your inbox.
                </span>
              </div>
            </div>
          )}

          {/* Subscription Form */}
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col sm:flex-row gap-3 max-w-md"
          >
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-xl px-5 py-4 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-300 transition-all"
                required
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <button
              type="submit"
              className="rounded-xl bg-linear-to-r from-yellow-400 to-yellow-300 px-8 py-4 font-semibold text-blue-900 hover:shadow-lg hover:shadow-yellow-400/50 transition-all active:scale-95 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-col sm:flex-row gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                <svg
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">100% Secure</p>
                <p className="text-xs text-blue-100">
                  Your email is safe with us
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                <svg
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.5 3A1.5 1.5 0 001 4.5v.006c0 .849.648 1.54 1.5 1.54h17c.852 0 1.5-.691 1.5-1.54V4.5A1.5 1.5 0 0117.5 3h-15z"></path>
                  <path
                    fillRule="evenodd"
                    d="M2 7.5A1.5 1.5 0 013.5 6h13A1.5 1.5 0 0118 7.5v7a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 14.5v-7z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">No Spam</p>
                <p className="text-xs text-blue-100">Unsubscribe anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterBox;
