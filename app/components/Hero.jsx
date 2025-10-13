"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import profilePic from "./me.jpg"; // Update this path

export default function Hero() {
  const navItems = ["Home", "Tech Stack", "Projects", "Hackathons", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  // Tech icons that will float in background (Using dark icons for light theme)
  const techIcons = [
    { icon: "⚛️", name: "React", size: "text-4xl" },
    { icon: "📱", name: "Next.js", size: "text-3xl" },
    { icon: "⚫", name: "Node.js", size: "text-5xl" }, 
    { icon: "🍃", name: "MongoDB", size: "text-4xl" },
    { icon: "⚡", name: "JavaScript", size: "text-3xl" },
    { icon: "🎨", name: "CSS", size: "text-4xl" },
    { icon: "🔷", name: "TypeScript", size: "text-3xl" },
    { icon: "🐍", name: "Python", size: "text-4xl" },
    { icon: "🤖", name: "AI", size: "text-5xl" },
    { icon: "🔥", name: "Firebase", size: "text-3xl" },
    { icon: "🎯", name: "API", size: "text-4xl" },
    { icon: "💾", name: "Database", size: "text-3xl" },
  ];

  // Track mouse position for button animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate button tilt based on mouse position
  const getButtonTransform = () => {
    if (!buttonRef.current) return {};
    const button = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = button.left + button.width / 2;
    const buttonCenterY = button.top + button.height / 2;
    const deltaX = (mousePosition.x - buttonCenterX) / 25;
    const deltaY = (mousePosition.y - buttonCenterY) / 25;

    return {
      transform: `perspective(1000px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg) scale(1.05)`,
    };
  };

  // Split text into individual letters with floating animation
  const FloatingText = ({ text, className = "" }) => {
    return (
      <span className={`inline-block ${className}`}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block animate-float"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: `${3 + (index % 3)}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-pink-50 text-gray-900" 
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft, Light Theme Blurs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        {/* Floating Tech Icons */}
        {techIcons.map((tech, i) => (
          <div
            key={i}
            className={`absolute ${tech.size} text-gray-500 opacity-20 hover:opacity-40 transition-opacity duration-300 animate-float-tech`} 
            style={{
              left: `${(i * 13 + 10) % 90}%`,
              top: `${(i * 17 + 15) % 80}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${15 + (i % 5) * 3}s`,
            }}
            title={tech.name}
          >
            {tech.icon}
          </div>
        ))}

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gray-400/30 rounded-full animate-float-particle" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Navigation - Premium Glassmorphism Style (Unchanged from previous step) */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100 shadow-lg shadow-gray-200/50"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl sm:text-2xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 drop-shadow-[0_0_8px_rgba(79,70,229,0.3)]">
                <span className="hidden sm:inline">code Anshu()&#123;...&#125;</span>
                <span className="sm:hidden">Anshu</span>
              </span>
            </div>

            <div className="hidden md:flex space-x-2 lg:space-x-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium group text-sm lg:text-base rounded-lg hover:bg-blue-50/50" 
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors backdrop-blur-sm text-gray-800"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-300 bg-white/90 border-t border-gray-100 ${
              isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2.5 px-4 rounded-lg hover:bg-gray-100/80"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-grow flex items-center">
        <div className="w-full">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* --- IMPROVED PROFILE PICTURE COMPONENT --- */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
                
                {/* 1. Orbit Glow Layer (Pulse & Rotate) */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-0 animate-orbital-glow"
                ></div>

                {/* 2. Background Ring (Subtle Spin) */}
                <div 
                  className="absolute inset-0 p-1.5 rounded-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 shadow-2xl shadow-blue-300/50 animate-spin-slow"
                  style={{ animationDuration: '20s' }}
                >
                   {/* Inner container to hold the image, creating a visible ring */}
                  <div className="w-full h-full bg-white rounded-full p-1.5"> 
                    <Image
                      src={profilePic}
                      alt="Anshuman Pati"
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* --- END IMPROVED PROFILE PICTURE COMPONENT --- */}


            {/* Main Heading with Floating Letters */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-gray-800">Hi, I'm </span>
              <br className="sm:hidden" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700">
                <FloatingText text="Anshuman Pati" />
              </span>
            </h1>

            {/* Subtitle with Floating Effect */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700">
                <FloatingText text="Full Stack Developer" />
              </span>
            </h2>

            {/* MERN Badge */}
            <div className="inline-block mb-8 animate-pulse-glow-light">
              <span className="px-6 py-2 bg-blue-100/70 backdrop-blur-sm text-blue-700 rounded-full text-lg font-bold border border-blue-300 shadow-lg shadow-blue-200/50"> 
                MERN Stack
              </span>
            </div>

            {/* Description - Slightly darker gray for readability */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Crafting{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-700">
                elegant
              </span>
              ,{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700">
                scalable
              </span>
              , and{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-orange-700">
                user-centric
              </span>{" "}
              web experiences that make a difference.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {["React", "Next.js", "Node.js", "MongoDB", "AI/ML"].map(
                (tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-md hover:bg-gray-50 hover:scale-110 hover:border-blue-300 transition-all duration-300 animate-fade-in-up" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-12">
              <a
                ref={buttonRef}
                href="https://drive.google.com/file/d/19MGI9WudPmYDgX3LTtQbf39hdxRf7Y1D/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-700 to-purple-700 text-white font-extrabold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:shadow-purple-700/50 transition-all duration-300 transform"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.1s ease-out',
                  ...getButtonTransform()
                }}
              >
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-sm bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"></div>
                </div>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <span className="text-2xl animate-bounce-subtle group-hover:scale-110 transition-transform">📄</span>
                  <span className="tracking-wide">Download Resume</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="#contact"
                className="group w-full sm:w-auto px-10 py-5 bg-white/50 backdrop-blur-md border-2 border-gray-300 text-gray-700 rounded-2xl font-bold text-lg shadow-lg hover:bg-gray-100 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-300/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="text-2xl group-hover:scale-125 transition-transform">💬</span>
                <span className="font-extrabold tracking-wide">Let's Connect</span>
                <svg
                  className="w-6 h-6 group-hover:translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
              {[
                { number: "15+", label: "Projects", icon: "🚀" },
                { number: "6+", label: "Hackathons", icon: "🏆" },
                { number: "20+", label: "Technologies", icon: "⚡" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group text-center p-6 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/50 animate-fade-in-up" 
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 pb-8 flex justify-center">
        <a
          href="#techstack"
          className="animate-bounce flex flex-col items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group"
        >
          <span className="text-sm font-medium">Explore More</span>
          <svg
            className="w-6 h-6 group-hover:scale-125 transition-transform"
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

      {/* Custom Animations - ADDED ORBITAL GLOW KEYFRAME */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(2deg);
          }
          50% {
            transform: translateY(-5px) rotate(-2deg);
          }
          75% {
            transform: translateY(-12px) rotate(1deg);
          }
        }

        @keyframes float-tech {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -20px) rotate(5deg);
          }
          50% {
            transform: translate(-15px, -40px) rotate(-5deg);
          }
          75% {
            transform: translate(10px, -25px) rotate(3deg);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(100px, -100vh);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes pulse-glow-light {
          0%, 100% {
            box-shadow: 0 0 10px rgba(79, 70, 229, 0.15); 
          }
          50% {
            box-shadow: 0 0 25px rgba(79, 70, 229, 0.3);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* NEW ELEGANT PROFILE GLOW ANIMATION */
        @keyframes orbital-glow {
          0% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.15); /* Subtly expands */
          }
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
        }

        /* Applying Keyframes */
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-tech {
          animation: float-tech linear infinite;
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        // .animate-spin-slow {
        //   animation: spin-slow 20s linear infinite; /* Slowed spin for subtlety */
        // }

        // .animate-spin-reverse {
        //   animation: spin-reverse 6s linear infinite;
        // }

        .animate-bounce-subtle {
          animation: bounce-subtle 1.5s ease-in-out infinite;
        }

        .animate-pulse-glow-light {
          animation: pulse-glow-light 2s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-orbital-glow {
          animation: orbital-glow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}