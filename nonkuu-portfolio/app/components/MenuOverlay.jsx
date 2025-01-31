"use client";

import React from "react";
import NavLink from "./NavLink";
import { XMarkIcon } from "@heroicons/react/24/solid";

const MenuOverlay = ({ links, setNavbarOpen }) => {
    return (
        <div className="absolute top-0 left-0 right-0 bg-[#151414] p-4 flex flex-col items-center space-y-4 md:hidden z-20">
            <button
                onClick={() => setNavbarOpen(false)}
                className="self-end px-2 py-1 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
                <span className="sr-only">Close Menu</span>
                <XMarkIcon className="h-6 w-6 text-white" />
            </button>
            <ul className="flex flex-col space-y-4">
                {links.map((link, index) => (
                    <li key={index} onClick={() => setNavbarOpen(false)}>
                        <NavLink href={link.path}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuOverlay;
