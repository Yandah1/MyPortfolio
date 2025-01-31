"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation.js";

import Stairs from "./Stairs.jsx";

const StairTransition = ({ children }) => {
    const pathname = usePathname(); // Get the current pathname

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname} // Use the pathname as the unique key
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                {/* Main content */}
                <div className="h-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                    <Stairs />
                </div>
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default StairTransition;
