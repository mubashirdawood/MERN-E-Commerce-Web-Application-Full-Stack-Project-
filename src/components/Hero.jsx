import React from "react";
import { assets } from "../assets/assets";
const Hero = () => {
  return (
    <section className="mt-8">
      <div className="relative overflow-hidden rounded-3xl border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-shadow">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-blue-50 via-teal-50 to-cyan-50" />

        <div className="relative grid grid-cols-1 sm:grid-cols-2 items-stretch">
      {/* hero left */}
          <div className="flex items-center px-6 py-10 sm:px-10 sm:py-14">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300 bg-cyan-50/70 px-3 py-1 text-xs font-medium text-cyan-700 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                OUR BEST SELLER
              </div>

              <h1 className="prata-regular mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl text-blue-900">
                Latest Arrivals
              </h1>

              <p className="mt-3 text-sm text-blue-700 sm:text-base">
                Discover new-season essentials and trending picks, curated for you.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button className="rounded-full bg-linear-to-r from-blue-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-cyan-500/50 active:scale-[0.99]">
                  Shop now
                </button>
                <button className="rounded-full border-2 border-cyan-300 bg-cyan-50/70 px-6 py-3 text-sm font-semibold text-cyan-700 shadow-sm transition hover:bg-cyan-100">
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
