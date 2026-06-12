import React from "react";
import { motion } from "framer-motion";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-3 items-center justify-center mb-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2"
      >
        <p className="text-gray-500 font-light text-2xl md:text-3xl tracking-wide uppercase">
          {text1} <span className="text-blue-900 font-extrabold">{text2}</span>
        </p>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }} // Using string for tailwind equivalent or rem
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-12 md:w-16 h-[2px] bg-black/80 rounded-full"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Title;
