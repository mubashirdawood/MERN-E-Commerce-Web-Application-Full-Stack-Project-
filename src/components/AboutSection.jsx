import React from "react";

const AboutSection = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            About Us
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
            We build modern shopping experiences for every customer.
          </h2>
    
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">
                Quality-first products
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Every item is selected for style, comfort and lasting value.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">
                Fast & friendly support
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                We’re here to help you at every step, from browsing to delivery.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">
                Trusted by shoppers
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Customers return for the ease of our store and the reliability
                of our service.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">
                Style-driven collections
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Fresh arrivals and trending styles designed for real day-to-day
                wear.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-gray-100 p-5 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-yellow to-transparent opacity-90" />
          <div className="relative rounded-[1.75rem] overflow-hidden bg-white shadow-lg">
         
          </div>
          <div className="mt-6 rounded-3xl bg-black/95 p-6 text-white shadow-xl backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
              Our promise
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              Timeless style with effortless shopping.
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/80">
              From curated collections to fast delivery, we deliver a premium
              shopping experience for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
