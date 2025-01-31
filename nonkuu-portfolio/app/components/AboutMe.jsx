'use client';

import React, { useState } from "react";
import Image from "next/image";
import TabButton from './TabButton';

const AboutMe = () => {
    const [tab, setTab] = useState("skills");

    // Handle tab change
    const handleTabChange = (selectedTab) => {
        setTab(selectedTab);
    };

    // Tab content data
    const TAB_DATA = [
        {
            id: "skills",
            content: (
                <div className="mb-6">

                    <div className="grid grid-cols-3 gap-4">
                        <div className="skills">
                            <i className="bx bxl-html5 bx-burst text-4xl text-orange-500"></i>
                            <p className="text-gray-400 text-sm mt-2">HTML5</p>
                        </div>
                        <div className="skills flex flex-col items-center">
                            <i className="bx bxl-css3 bx-burst text-4xl text-blue-500"></i>
                            <p className="text-gray-400 text-sm mt-2">CSS3</p>
                        </div>
                        <div className="skills flex flex-col items-center">
                            <i className="bx bxl-javascript bx-burst text-4xl text-yellow-500"></i>
                            <p className="text-gray-400 text-sm mt-2">JavaScript</p>
                        </div>
                        <div className="skills flex flex-col items-center">
                            <i className="bx bxl-react bx-burst text-4xl text-blue-400"></i>
                            <p className="text-gray-400 text-sm mt-2">React</p>
                        </div>
                        <div className="skills flex flex-col items-center">
                            <i className="bx bxl-tailwind-css  bx-burst text-4xl text-teal-400"></i>
                            <p className="text-gray-400 text-sm mt-2">Tailwind CSS</p>
                        </div>
                        <div className="skills flex flex-col items-center">
                            <i className="bx bxl-nodejs bx-burst text-4xl text-green-500"></i>
                            <p className="text-gray-400 text-sm mt-2">Node.js</p>
                        </div>
                        <div className="skills flex flex-col items-center">
                            <i className="bx bxl-figma bx-burst text-4xl text-purple-500"></i>
                            <p className="text-gray-400 text-sm mt-2">Figma</p>
                        </div>
                        <div className="skills flex flex-col items-center">
                            <i className="bx bx-pencil bx-burst text-4xl text-gray-300"></i>
                            <p className="text-gray-400 text-sm mt-2">Wireframing</p>
                        </div>
                        <div className="skills flex flex-col items-center">
                            <i className="bx bx-paint bx-burst text-4xl text-pink-400"></i>
                            <p className="text-gray-400 text-sm mt-2">Prototyping</p>
                        </div>

                    </div>
                </div>


            ),
        },
        {
            id: "education",
            content: (
                <p>
                    Certification in Full-Stack Software Engineering from ALX Africa.
                    UX/UI Design Foundations -  Coursera(in Progress) .
                </p>
            ),
        },
        {
            id: "certifications",
            content: (
                <ul className="list-disc pl-5">
                    <li>Certified full-stack Software Engineer </li>
                    <li>UX/UI Design Foundations</li>
                </ul>
            ),
        },
    ];

    console.log("Current Tab:", tab);
    console.log("Tab Content:", TAB_DATA.find((t) => t.id === tab)?.content);


    return (
        <section className="text-white " id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                {/* Image Section */}
                <div className="relative flex items-center justify-center ">
                    {/* Outer glowing border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 blur-2xl "></div>

                    {/* Image container */}
                    <div className="relative w-80 h-80 border-4 border-[#b17cae] border-spacing-5 rounded-full overflow-hidden">
                        <Image
                            src="/images/yandah2.jpeg"
                            alt="hero image"
                            width={250}
                            height={250}
                            className="object-cover w-full h-full rounded-full"
                            priority={true}
                        />
                    </div>
                </div>
                {/* Text Section */}
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-base text-[#adabad] lg:text-lg leading-relaxed">
                        I am a full-stack web developer and aspiring UX/UI designer
                        with a passion for creating interactive and user-friendly
                        web applications. My expertise includes working with
                        JavaScript, React, Redux, Node.js, Express, MySQL, HTML, CSS, and Git.

                        As a UX/UI enthusiast, I enjoy designing intuitive interfaces
                        that enhance user experiences while maintaining functionality
                        and aesthetic appeal. I am a quick learner, always looking to
                        expand my knowledge and skill set. Being a team player, I am
                        excited to collaborate with others to develop innovative and
                        impactful applications.
                    </p>

                    {/* Tab Buttons */}
                    <div className="flex flex-row justify-start mt-8">
                        {TAB_DATA.map(({ id }) => (
                            <TabButton
                                key={id}
                                selectTab={() => handleTabChange(id)}
                                active={tab === id}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </TabButton>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div
                        className={`mt-8 transition-opacity duration-300 ${tab ? "opacity-100" : "opacity-50"}`}
                    >
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
