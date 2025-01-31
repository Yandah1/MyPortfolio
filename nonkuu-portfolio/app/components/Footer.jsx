import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-black">  
            <div className="container p-12 flex flex-col sm:flex-row justify-between">
                {/* Logo/Branding */}
                <div className="flex flex-col mb-6 sm:mb-0">
                    <div className="text-3xl font-bold text-[#00BCD4] bg-gradient-to-br from-[#00BCD4] to-[#A70067] bg-clip-text text-transparent">
                        NK
                    </div>
                    <p className="text-slate-600 mt-2 text-sm">Nonkululeko Khanyile</p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col sm:flex-row mb-6 sm:mb-0">
                    <ul className="flex flex-col sm:flex-row gap-4 text-slate-400">
                        <li>
                            <Link href="/" className="hover:text-[#00BCD4]">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-[#00BCD4]">
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:text-[#00BCD4]">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-[#00BCD4]">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="flex gap-4 mb-6 sm:mb-0">
                    <a href="https://www.linkedin.com/in/nonkuu1" target="_blank" className="hover:text-[#00BCD4]">
                        LinkedIn
                    </a>
                    <a href="https://twitter.com" target="_blank" className="hover:text-[#00BCD4]">
                        Twitter
                    </a>
                    <a href="https://github.com/yandah1" target="_blank" className="hover:text-[#00BCD4]">
                        GitHub
                    </a>
                </div>

                {/* Newsletter */}
                <div className="mb-6 sm:mb-0">
                    <h3 className="text-lg font-semibold text-[#00BCD4]">Subscribe to my Newsletter</h3>
                    <form className="flex items-center gap-2 mt-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="p-2 rounded bg-[#33353F] text-white placeholder:text-slate-500"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-gradient-to-br from-[#00BCD4] to-[#A70067] rounded text-white hover:bg-[#00BCD4]"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Legal & Copyright */}
            <div className="bg-[#121212] py-4 text-center text-sm text-slate-600">
                <p>© {new Date().getFullYear()} All rights reserved.</p>
                <div className="flex justify-center gap-4 mt-2">
                    <Link href="/privacy-policy" className="hover:text-[#00BCD4]">Privacy Policy</Link>
                    <Link href="/terms-conditions" className="hover:text-[#00BCD4]">Terms & Conditions</Link>
                    <Link href="/cookie-policy" className="hover:text-[#00BCD4]">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
