'use client';

import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import Navbar from '../components/Navbar';

const ResumePage = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'about', label: 'About Me' },
  ];

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <section className="bg-gray-900 text-white py-16">
      <Navbar />
      <div className="container mx-auto grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Left Section: Hire Me and Tabs */}
        <div className="space-y-6">
          {/* Hire Me Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Hire Me?</h2>
            <p className="text-gray-400">
              I am a passionate full-stack developer with expertise in creating intuitive
              and user-friendly web applications. Currently, I am expanding my knowledge
              in UI/UX design to create seamless and visually appealing experiences for users.
            </p>
            <p className="text-gray-400">
              My work reflects a balance of functionality and aesthetics, with a keen eye for
              detail and a commitment to excellence.
            </p>
          </div>

          {/* Tabs */}
          <div className="space-y-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`w-full px-4 py-2 text-left rounded-lg font-medium ${activeTab === tab.id
                  ? 'bg-gradient-to-br from-[#00BCD4] to-[#a70040] hover:bg-[#80DEEA] text-white'
                  : 'bg-gray-700 text-gray-400'
                  }`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section: Tab Content */}
        <div className="flex flex-col  p-6 rounded-lg">
          {activeTab === 'experience' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
              <ul className="space-y-4">
                <li>
                  <strong>Marketing Specialist</strong> - Fanaka Capital Ltd Pty
                  <br />
                  <span className="text-gray-400">2017 - 2021</span>
                </li>
                {/* Add more experience here */}
              </ul>
            </div>
          )}
          {activeTab === 'education' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="space-y-4">
                <li>
                  <strong>Full-Stack Software Engineering</strong> - ALX Africa
                  <br />
                  <span className="text-gray-400">Certification</span>
                </li>
                <li>
                  <strong>UX Design</strong> - Coursera (In Progress)
                </li>
              </ul>
            </div>
          )}
          {activeTab === 'skills' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">MY SKILLS</h3>

              {/* Software Skills */}
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
                </div>
              </div>

              {/* UX Skills */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">UX DESIGN</h4>
                <div className="grid grid-cols-3 gap-4">
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
                  <div className="skills flex flex-col items-center">
                    <i className="bx bx-cloud bx-burst text-4xl text-blue-500"></i>
                    <p className="text-gray-400 text-sm mt-2">Next.js</p>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h4 className="text-lg font-bold mb-4">SOFT-SKILLS</h4>
                <div className="space-y-4">
                  {[
                    { skill: 'Communication', level: '90%' },
                    { skill: 'Creativity', level: '90%' },
                    { skill: 'Problem Solving', level: '85%' },
                    { skill: 'Team Collaboration', level: '80%' },
                    { skill: 'Adaptability', level: '95%' },
                    { skill: 'Time Management', level: '88%' },
                  ].map(({ skill, level }) => (
                    <div key={skill}>
                      <h5 className="text-sm font-medium text-gray-300 mb-1">{skill}</h5>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                          style={{ width: level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === 'about' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">About Me</h3>
              <p className="text-gray-400">
                I am a full-stack developer passionate about creating interactive and
                user-friendly web applications. I enjoy crafting intuitive designs and
                developing robust backend systems.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
