'use client';

import AboutMe from "../components/AboutMe";
import AboutStoryPage from "../components/AboutStoryPage";

const AboutPage = () => {
  return (
    <div className="mt-10 min-h-screen">
      <AboutStoryPage className="mt-8 bg-black" />
      <AboutMe classNam="mt-8 bg-black" />  
    
    </div>
  );
};

export default AboutPage;
