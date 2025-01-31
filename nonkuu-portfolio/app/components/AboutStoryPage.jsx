"use client";

import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import journeyAnimation from "/public/animations/journey-animation.json";

const AboutStoryPage = () => {
    const { ref: timelineRef, inView: timelineInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const timelineData = [
        {
            year: "2017",
            description:
                "Landed my first job as a Marketing Specialist at Fanaka Capital Ltd Pty. I quickly became the 'Spreadsheet Whisperer,' charming Excel into submission while sipping way too much coffee.",
            color: "bg-gradient-to-r from-rose-400 to-amber-300",
        },
        {
            year: "2020",
            description:
                "During the lockdown, I binged *Arrow* and was absolutely mesmerized by Felicity Smoak. Her tech brilliance, witty comebacks, and unshakeable confidence planted the seed for my tech dreams. She didn’t just inspire me to explore technology—she also taught me the art of storytelling. Let’s be honest, who wouldn’t want to hack systems while dropping sarcastic one-liners?",
            color: "bg-gradient-to-r from-blue-400 via-cyan-500 to-stone-600",
        },
        {
            year: "2023",
            description:
                "Joined the ALX Software Engineering Program. It was love at first 'Hello, World!' My perfectionist tendencies and obsession with details turned me into a UX/UI enthusiast. Who knew my habit of aligning sticky notes perfectly would actually pay off?",
            color: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",  
        },
        {
            year: "2024",
            description:
                "Graduated to building cutting-edge apps. My creations are so user-friendly even my grandma can navigate them—and she still thinks Facebook is the internet. Mission accomplished!",
            color: "bg-gradient-to-r from-green-400 to-blue-500",
        },
    ];


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Car animation
        gsap.to(".animate-drive", {
            x: "100vw", // Drive horizontally across the viewport
            ease: "linear",
            scrollTrigger: {
                trigger: ".timeline-cards",
                start: "top 80%",
                end: "bottom top",
                scrub: 1,
            },
        });

        // Timeline cards animation
        document.querySelectorAll(".timeline-card").forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "top 50%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <div className="text-white min-h-screen p-8 bg-[#121212]">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    My Journey
                </h1>
                <p className="text-lg mb-12 leading-relaxed">
                    From a marketing specialist to a passionate full-stack developer and aspiring UX/UI designer, my journey has been a transformative one. Here's how it unfolded:
                </p>

                {/* Driving Animation */}
                <div className="relative w-full h-32 overflow-hidden">
                    <Lottie
                        animationData={journeyAnimation}
                        loop
                        autoplay
                        className="absolute w-24 h-24 top-8 left-0 animate-drive"
                    />
                </div>

                {/* Timeline Cards */}
                <div
                    ref={timelineRef}
                    className="timeline-cards grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
                >
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`timeline-card  relative group perspective w-full h-450  shadow-lumelight  rounded-lg p-4 ${item.color}`}
                        >
                            <p className="text-lg font-bold">{item.year}</p>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutStoryPage;
