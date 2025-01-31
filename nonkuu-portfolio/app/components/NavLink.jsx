'use client';

import React from "react";
import Link from "next/link";

const NavLink = ({ href, children }) => {
    return (
        <Link legacyBehavior href={href}>
            <a className="block py-2 pl-2 pr-3 text-gray-500 hover:text-[#00BCD4] sm:text-xl transition-all">
                {children}
            </a>
        </Link>
    );
};

export default NavLink;

