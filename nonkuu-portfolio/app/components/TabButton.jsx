"use client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
    default: { width: "0%", backgroundColor: "transparent" },
    active: { width: "100%", backgroundColor: "#00BCD4" },
    hover: { backgroundColor: "#6e1185 " },
};

const TabButton = ({ selectTab, active, children }) => {
    const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

    return (
        <button
            onClick={selectTab}
            className="relative font-semibold mr-3"
            role="tab"
            aria-selected={active}
        >
            <p className={`${buttonClasses}`}>{children}</p>
            <motion.div
                animate={active ? "active" : "default"}
                whileHover="hover"
                variants={variants}
                transition={{ duration: 0.3 }}
                className="h-1 absolute bottom-0 left-0"
            ></motion.div>
        </button>
    );
};

export default TabButton;
