'use client';

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay.jsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/projects", label: "Projects" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#151414] border border-[#33353F] bg-opacity-100">
            <div className="flex items-center justify-between p-4">
                {/* Logo */}
                <Link href="/" className="flex-between">
                    <div className="text-2xl sm:text-ml font-semibold text-[#00BCD4] bg-gradient-to-br from-[#00BCD4] to-[#A70067] bg-clip-text text-transparent">
                        Nonkuu <span className="text-[#A70067]">..</span>
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5 text-white" />
                        </button>
                    )}
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <ul className="flex text-gray-400 space-x-1">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path}>{link.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {navbarOpen && <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} />}
        </nav>
    );
};

export default Navbar;
