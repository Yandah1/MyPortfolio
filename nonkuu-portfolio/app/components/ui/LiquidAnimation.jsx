"use client";

import React from "react";
import { motion } from "framer-motion";

const liquidVariants = {
  initial: {
    clipPath: "circle(0% at 50% 50%)",
  },
  animate: {
    clipPath: "circle(150% at 50% 50%)",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    clipPath: "circle(0% at 50% 50%)",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const LiquidAnimation = ({ children, colorFrom = "#00BCD4", colorTo = "#A70067" }) => {
  return (
    <motion.div
      variants={liquidVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-50"
      style={{
        background: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
      }}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default LiquidAnimation;
