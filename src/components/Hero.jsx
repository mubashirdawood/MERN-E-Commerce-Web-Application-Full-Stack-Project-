import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  
  // Mouse hover parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Rotate container slightly based on mouse position
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-2, 2]);

  // Image parallax
  const imgX = useTransform(smoothX, [-0.5, 0.5], [10, -10]);
  const imgY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);

  // Magnetic Button Effect
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const smoothBtnX = useSpring(btnX, springConfig);
  const smoothBtnY = useSpring(btnY, springConfig);

  const containerRect = useRef(null);
  const buttonRect = useRef(null);

  useEffect(() => {
    const updateRects = () => {
      if (containerRef.current) {
        containerRect.current = containerRef.current.getBoundingClientRect();
      }
      if (buttonRef.current) {
        buttonRect.current = buttonRef.current.getBoundingClientRect();
      }
    };

    updateRects();
    window.addEventListener("resize", updateRects);
    window.addEventListener("scroll", updateRects);

    return () => {
      window.removeEventListener("resize", updateRects);
      window.removeEventListener("scroll", updateRects);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRect.current) return;
    
    const { left, top, width, height } = containerRect.current;
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);

    if (buttonRect.current) {
        const { left: btnLeft, top: btnTop, width: btnWidth, height: btnHeight } = buttonRect.current;
        const btnCenterX = btnLeft + btnWidth / 2;
        const btnCenterY = btnTop + btnHeight / 2;
        const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);
        
        if (dist < 100) {
            btnX.set((e.clientX - btnCenterX) * 0.4);
            btnY.set((e.clientY - btnCenterY) * 0.4);
        } else {
            btnX.set(0);
            btnY.set(0);
        }
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    btnX.set(0);
    btnY.set(0);
  };

  const text1 = "Elegance in";
  const text2 = "Every Detail";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Removed blur filter as it's heavy
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="mt-8 perspective-1000">
      <motion.div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", willChange: "transform" }}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] backdrop-blur-md transition-shadow hover:shadow-[0_48px_80px_-16px_rgba(6,182,212,0.15)]"
      >
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              x: [0, 50, 0], 
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ willChange: "transform" }}
            className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[100px]"
          />
          <motion.div 
            animate={{ 
              x: [0, -40, 0], 
              y: [0, 60, 0],
              scale: [1, 1.1, 1],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ willChange: "transform" }}
            className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[100px]"
          />
          <motion.div 
            animate={{ 
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-linear-to-br from-blue-50/40 via-teal-50/40 to-cyan-50/40" 
          />
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 items-center min-h-[550px]">
          {/* hero left */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center px-8 py-14 sm:px-16 sm:py-24 z-10"
          >
            <div className="max-w-xl">
              <motion.div 
                variants={itemVariants} 
                className="inline-flex items-center gap-2 rounded-full border border-cyan-200/50 bg-white/60 px-5 py-1.5 text-[10px] font-black tracking-[0.2em] text-cyan-700 uppercase backdrop-blur-md shadow-sm"
              >
                <motion.span 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" 
                />
                Exclusive Collection
              </motion.div>

              <motion.h1 
                variants={itemVariants} 
                className="prata-regular mt-8 text-4xl leading-[1.05] sm:text-5xl lg:text-7xl text-slate-900 drop-shadow-sm font-medium"
              >
                {text1.split("").map((char, i) => (
                  <motion.span key={i} variants={charVariants}>{char}</motion.span>
                ))}<br />
                <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {text2.split("").map((char, i) => (
                    <motion.span key={i} variants={charVariants}>{char}</motion.span>
                  ))}
                </span>
              </motion.h1>

              <motion.p 
                variants={itemVariants} 
                className="mt-8 text-base text-slate-600 sm:text-lg max-w-md leading-relaxed font-light"
              >
                Redefining modern luxury through sustainable <br className="hidden md:block" /> 
                craftsmanship and contemporary silhouettes.
              </motion.p>

              <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center gap-6">
                <motion.div
                  ref={buttonRef}
                  style={{ x: smoothBtnX, y: smoothBtnY, willChange: "transform" }}
                >
                  <Link to='/collection' className="group relative flex items-center justify-center overflow-hidden rounded-full bg-slate-900 px-10 py-5 text-sm font-black text-white shadow-xl transition-all hover:shadow-blue-500/25">
                    <span className="relative z-10 tracking-widest uppercase">Start Shopping</span>
                    <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-blue-600 to-cyan-500 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-0" />
                    <motion.div 
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="relative z-10 ml-3"
                    >
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.div>
                  </Link>
                </motion.div>
                
                <Link to="/collection" className="group flex items-center gap-3 text-sm font-bold text-slate-800 transition-colors hover:text-blue-600 tracking-widest uppercase">
                  View Lookbook
                  <div className="relative h-[2px] w-8 bg-slate-200 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600 -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* hero right */}
          <motion.div 
            style={{ x: imgX, y: imgY, transformStyle: "preserve-3d", willChange: "transform" }}
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[400px] sm:h-full p-8 sm:p-12 z-0"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-[0_48px_80px_-24px_rgba(0,0,0,0.3)]">
              <motion.img
                src={assets.hero_img}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 1.2 }}
                className="h-full w-full object-cover"
                alt="Latest arrivals"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-blue-900/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Status Detail */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
                className="absolute bottom-8 left-8 right-8 backdrop-blur-xl bg-white/20 border border-white/30 p-5 rounded-3xl shadow-2xl hidden lg:block overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
                <div className="flex items-center gap-5">
                  <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-white/20">A</div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/90 font-black">Limited Edition</div>
                    <div className="text-white font-bold text-lg">Autumn Aura '24</div>
                  </div>
                  <div className="ml-auto bg-white/20 h-10 w-10 rounded-full flex items-center justify-center text-white">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full border-2 border-blue-200/20 blur-md pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full border border-cyan-200/20 blur-sm pointer-events-none" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;


