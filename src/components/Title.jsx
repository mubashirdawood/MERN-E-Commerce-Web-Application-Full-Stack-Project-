import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-3 items-center justify-center mb-6">
      <div className="flex items-center gap-2">
        <p className="text-gray-500 font-light text-2xl md:text-3xl tracking-wide uppercase">
          {text1} <span className="text-black font-extrabold">{text2}</span>
        </p>
        <div className="w-12 md:w-16 h-[2px] bg-black/80 rounded-full"></div>
      </div>
    </div>
  );
};

export default Title;
