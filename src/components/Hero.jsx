import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="mt-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-shadow"
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-blue-50 via-teal-50 to-cyan-50" />

        <div className="relative grid grid-cols-1 sm:grid-cols-2 items-stretch">
          {/* hero left */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center px-6 py-10 sm:px-10 sm:py-14"
          >
            <div className="max-w-xl">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-cyan-300 bg-cyan-50/70 px-3 py-1 text-xs font-medium text-cyan-700 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                OUR BEST SELLER
              </motion.div>

              <motion.h1 variants={itemVariants} className="prata-regular mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl text-blue-900">
                Latest Arrivals
              </motion.h1>

              <motion.p variants={itemVariants} className="mt-3 text-sm text-blue-700 sm:text-base">
                Discover new-season essentials and trending picks, curated for
                you.
              </motion.p>

              <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center gap-3">
                <Link to='/collections' className="rounded-full bg-linear-to-r from-blue-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-cyan-500/50 active:scale-[0.99]">
                  Shop now
                </Link>
                <Link to="/collections" className="rounded-full border-2 border-cyan-300 bg-cyan-50/70 px-6 py-3 text-sm font-semibold text-cyan-700 shadow-sm transition hover:bg-cyan-100 inline-block">
                  View collection
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* hero right */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative h-72 sm:h-full"
          >
            <img
              src={assets.hero_img}
              className="h-full w-full rounded-2xl object-cover"
              alt="Latest arrivals"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-l from-transparent via-transparent to-white/40" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
