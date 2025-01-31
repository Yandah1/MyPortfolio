"use client";
import React, { useState } from "react";
import Link from "next/link";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors
    const data = {
      name: e.target.name.value, 
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      if (response.status === 200) {
        setEmailSubmitted(true);
        e.target.reset(); // Reset form on successful submission
      } else {
        throw new Error("Failed to send message. Please try again later.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent 
          rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10">
        <h5 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          If you have any questions or inquiries, feel free to reach out. We're here to help!
        </p>
        <div className="socials flex flex-row gap-2">
          <div className="flex justify-center sm:justify-start gap-4 text-3xl mb-4">
            <Link href="https://github.com/yandah1" target="_blank">
              <i className="bx bxl-github text-gray-200 text-2xl border-2 border-gray-500 rounded-full p-2 hover:text-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all duration-300"></i>
            </Link>
            <Link href="https://linkedin.com/in/nonkuu1" target="_blank">
              <i className="bx bxl-linkedin ext-gray-200 text-2xl border-2 border-gray-500 rounded-full p-2 hover:text-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all duration-300"></i>
            </Link>
            <Link href="https://twitter.com/yourtwitter" target="_blank">
              <i className="bx bxl-twitter ext-gray-200 text-2xl border-2 border-gray-500 rounded-full p-2 hover:text-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all duration-300"></i>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mb-4">
              Message sent successfully! We will get back to you soon.
            </p>
          )}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Name Input */}
          <div className="mb-6">
           
            <input
              name="name"
              type="text"
              id="name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
           
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
           
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Subject"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your message"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "opacity-50 cursor-not-allowed" : ""
            } bg-gradient-to-br from-[#00BCD4] to-[#a70040] hover:bg-[#80DEEA] text-white font-medium py-2.5 px-5 rounded-lg w-full`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
