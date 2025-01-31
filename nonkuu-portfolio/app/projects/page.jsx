"use client";

import React from 'react'
import ProjectCard from '../components/ProjectsCard';
import ProjectTag from '../components/ProjectTag';
import ProjectsSection from '../components/ProjectsSection';

const ProjectPage = () => {
  return (
    <div className='min-h-screen  mt-18 flex flex-col items-center justify-center bg-[#121212f9] '>
    
      <ProjectsSection/>  
    </div>
  )
  
}

export default  ProjectPage;