"use client";

import React from "react";
import EmailSection from "../components/EmailSection"; 


const Contact = () => {
  return (
    <>
    
      <main className="min-h-screen m-2 mt-11 flex flex-col items-center justify-center bg-[#121212f9]">
        {/* Email Section */}
        <div className="w-full max-w-4xl px-4 mt-12">
        
          <EmailSection className="mt-10 px-3"/>
        </div>
      </main>
    </>
  );
};

export default Contact;
