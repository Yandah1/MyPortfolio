"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";

// Dynamic imports for client-side only components
const TypeAnimation = dynamic(() => import("react-type-animation").then(mod => mod.TypeAnimation), { ssr: false });

const HeroSection = () => {
    return (
        <section className="lg:py-16 mt-10 lg:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-[#f4f8f8] mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4cd] to-[#a70067]">
                            Hello, I&apos;m{" "} Nonkuu
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "A Software Engineer",
                                1000,
                                "A Web Developer",
                                1000,
                                "A UI/UX Designer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="no-highlight no-focus"
                        />
                    </h1>
                    <p className="text-[#b1acb0] text-base sm:text-lg mb-6 lg:text-xl">
                        I am a skilled software engineer specializing in frontend web development and UI/UX design.
                        I love to create user-friendly and visually engaging digital experiences that delight users.
                    </p>
                    <div className="mb-6">
                        <Link
                            href="/contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#00BCD4] to-[#a70040] hover:bg-[#80DEEA] text-white"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="/resume"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#00BCD4] to-[#a7005f] hover:bg-[#80DEEA] text-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-cyan-600 rounded-full px-5 py-2">
                                View My Resume
                            </span>
                        </Link>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex justify-center sm:justify-start gap-4 text-3xl mb-4">
                        <Link href="https://github.com/yandah1" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-github text-gray-200 text-2xl border-2 border-gray-500 rounded-full p-2 hover:text-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all duration-300"></i>
                        </Link>
                        <Link href="https://linkedin.com/in/nonkuu1" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-linkedin text-gray-200 text-2xl border-2 border-gray-500 rounded-full p-2 hover:text-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all duration-300"></i>
                        </Link>
                        <Link href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-twitter text-gray-200 text-2xl border-2 border-gray-500 rounded-full p-2 hover:text-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all duration-300"></i>
                        </Link>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="relative flex items-center justify-center">
                        {/* Outer glowing border */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 blur-2xl"></div>

                        {/* Image container */}
                        <div className="relative w-64 h-64 border-4 border-[#b17cae] rounded-full overflow-hidden">
                            <Image
                                src="/images/yandah.jpeg"
                                alt="hero image"
                                width={250}
                                height={250}
                                className="object-cover w-full h-full rounded-full"
                                priority={true}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
