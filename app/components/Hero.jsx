"use client";

import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const navItems = ["Home", "Tech Stack", "Projects", "Hackathons", "Contact"];
  const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check window width - 768px+ for tablet and above
  useEffect(() => {
    const handleResize = () => setIsTabletOrDesktop(window.innerWidth >= 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="home" className="pt-20 min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      {/* Spline Background for Tablet+ screens */}
      {isTabletOrDesktop && (
        <div className="absolute inset-0 w-full h-full">
          <Spline
            scene="https://prod.spline.design/HvslEaJIVL9auw6l/scene.splinecode"
            className="w-full h-full"
          />
          {/* Minimal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              <span className="hidden sm:inline">code Anshu()&#123;...&#125;</span>
              <span className="sm:hidden">Anshu</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium group text-sm lg:text-base"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200/50">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content - Only visible on Mobile */}
      {!isTabletOrDesktop && (
        <>
          {/* Decorative elements for mobile */}
          <div className="absolute top-20 right-0 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-grow flex items-center">
            <div className="w-full">
              <div className="max-w-3xl mx-auto text-center">
                {/* Greeting */}
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200/50 shadow-sm">
                    👋 Welcome to my portfolio
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
                  <span className="text-gray-900">Hi, I'm </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
                    Anshuman Pati
                  </span>
                </h1>

                {/* Subtitle */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                  Full Stack Web Developer
                  <span className="block text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-2">
                    MERN Stack
                  </span>
                </h2>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Passionate about crafting{" "}
                  <span className="font-semibold text-gray-800">elegant</span>,{" "}
                  <span className="font-semibold text-gray-800">scalable</span>, and{" "}
                  <span className="font-semibold text-gray-800">user-centric</span>{" "}
                  web applications. Transforming ideas into seamless digital
                  experiences with modern technologies.
                </p>

                {/* Tech Highlights */}
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {["React", "Next.js", "Node.js", "MongoDB", "AI/ML"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4 items-center mb-12">
                  <a
                    href="https://drive.google.com/file/d/19MGI9WudPmYDgX3LTtQbf39hdxRf7Y1D/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-base shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      📄 Download Resume
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                  </a>

                  <a
                    href="#contact"
                    className="group w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-300 text-gray-800 rounded-xl font-bold text-base shadow-lg hover:shadow-xl hover:border-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    💬 Let's Connect
                    <svg
                      className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {[
                    { number: "15+", label: "Projects" },
                    { number: "6+", label: "Hackathons" },
                    { number: "20+", label: "Technologies" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Mobile only */}
          <div className="relative z-10 pb-8 flex justify-center">
            <a
              href="#techstack"
              className="animate-bounce flex flex-col items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              <span className="text-sm font-medium">Scroll Down</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </>
      )}

      {/* Tablet+ screens - Just Spline with minimal UI */}
      {isTabletOrDesktop && (
        <div className="relative z-10 flex-grow flex items-end justify-center pb-12">
          <a
            href="#techstack"
            className="animate-bounce flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors drop-shadow-lg"
          >
            <span className="text-sm font-medium">Explore More</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      )}

      {/* Custom animation */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}