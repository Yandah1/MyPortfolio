import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (

    <main className="flex flex-col min-h-screen bg-[#121212]  overflow-auto">

      <Navbar />
      <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <HeroSection />
        <AboutMe /> 
        <ProjectsSection />
        <EmailSection/>
      

      </div>
    </main>
  );
}
