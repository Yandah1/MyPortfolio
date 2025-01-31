import React from 'react';
import { motion } from 'framer-motion';

// Base animation for each stair
const stairsAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
 
};

// Stairs Component
const Stairs = () => {
  // Define the number of steps in the staircase
  const steps = 6;

  return (
    <>
      {/* Container for the stairs */}
      <div className="relative w-full h-screen overflow-hidden">
        {Array.from({ length: steps }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-[16.67%] bg-gradient-to-r from-[#00BCD4] to-[#A70067]"
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              top: `${-100 * index}%`,
              zIndex: steps - index, // Ensures layering order
            }}
            variants={{
              initial: { top: `${-100 * index}%` },
              animate: { top: `${100 * (steps - index)}%` },
              exit: { top: `${-100 * index}%` },
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: index * 0.1, // Staggered delay
            }}
          ></motion.div>
        ))}
      </div>
    </>
  );
};

export default Stairs;
