import React from "react";
import { assets } from "../assets/assets";
const Hero = () => {
  return (
    <section className="mt-8">
      <div className="relative overflow-hidden rounded-3xl border border-2 hover:shadow-amber-50 border-gray-800 shadow-gray-700 bg-white shadow-xl">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />

        <div className="relative grid grid-cols-1 sm:grid-cols-2 items-stretch">
      {/* hero left */}
          <div className="flex items-center px-6 py-10 sm:px-10 sm:py-14">
            <div className="max-w-xl text-gray-900">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                OUR BEST SELLER
              </div>

              <h1 className="prata-regular mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Latest Arrivals
              </h1>

              <p className="mt-3 text-sm text-gray-600 sm:text-base">
                Discover new-season essentials and trending picks, curated for you.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-gray-900 active:scale-[0.99]">
                  Shop now
                </button>
                <button className="rounded-full border border-gray-300 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-white">
                  View collection
                </button>
              </div>
            </div>
          </div>

          {/* hero right */}
          <div className="relative h-72 sm:h-full">
            <img
              src={assets.hero_img}
              className="h-full w-full object-cover"
              alt="Latest arrivals"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
