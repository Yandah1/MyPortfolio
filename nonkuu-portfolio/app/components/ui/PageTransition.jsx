"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Liquid swipe animation with a smooth circle expansion
const liquidSwipe = {
  initial: { clipPath: "circle(0% at 50% 50%)" },
  animate: { clipPath: "circle(150% at 50% 50%)" },
  exit: { clipPath: "circle(0% at 50% 50%)" },
  transition: {
    duration: 1,
    ease: "easeInOut",
  },
};

// Custom liquid swipe using a path (more irregular effect)
const customLiquidSwipe = {
  initial: {
    clipPath: "path('M 0 0 Q 50 100 100 0 T 200 100')",
  },
  animate: {
    clipPath: "path('M 0 0 Q 50 100 100 200 T 200 100')",
  },
  exit: {
    clipPath: "path('M 0 0 Q 50 100 100 0 T 200 100')",
  },
  transition: {
    duration: 1,
    ease: "easeInOut",
  },
};

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={liquidSwipe}
        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 pointer-events-none"
        style={{ zIndex: 9 }}
      />
      <div className="relative z-10">{children}</div>
    </AnimatePresence>
  )
};

export default PageTransition;
