// "use client";

// import { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import profilePic from "./me.jpg"; // Update this path

// export default function Hero() {
//   const navItems = ["Home", "Tech Stack", "Projects", "Hackathons", "Contact"];
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const buttonRef = useRef(null);

//   // Track mouse position for button animation
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Calculate button tilt based on mouse position
//   const getButtonTransform = () => {
//     if (!buttonRef.current) return {};
//     const button = buttonRef.current.getBoundingClientRect();
//     const buttonCenterX = button.left + button.width / 2;
//     const buttonCenterY = button.top + button.height / 2;
//     const deltaX = (mousePosition.x - buttonCenterX) / 25;
//     const deltaY = (mousePosition.y - buttonCenterY) / 25;
    
//     return {
//       transform: `perspective(1000px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg) scale(1.05)`,
//     };
//   };

//   // Split text into individual letters with floating animation
//   const FloatingText = ({ text, className = "" }) => {
//     return (
//       <span className={`inline-block ${className}`}>
//         {text.split("").map((char, index) => (
//           <span
//             key={index}
//             className="inline-block animate-float"
//             style={{
//               animationDelay: `${index * 0.1}s`,
//               animationDuration: `${3 + (index % 3)}s`,
//             }}
//           >
//             {char === " " ? "\u00A0" : char}
//           </span>
//         ))}
//       </span>
//     );
//   };

//   return (
//     <section
//       id="home"
//       className="pt-20 min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
//         {/* Floating particles */}
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-white/30 rounded-full animate-float-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${10 + Math.random() * 10}s`,
//             }}
//           ></div>
//         ))}
//       </div>

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur-xl z-50 border-b border-white/10 shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             {/* Logo */}
//             <div className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
//               <span className="hidden sm:inline">code Anshu()&#123;...&#125;</span>
//               <span className="sm:hidden">Anshu</span>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex space-x-6 lg:space-x-8">
//               {navItems.map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase().replace(" ", "")}`}
//                   className="relative text-gray-300 hover:text-white transition-colors font-medium group text-sm lg:text-base"
//                 >
//                   {item}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
//                 </a>
//               ))}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
//               aria-label="Toggle menu"
//             >
//               <div className="w-6 h-5 flex flex-col justify-between">
//                 <span
//                   className={`w-full h-0.5 bg-white transition-all duration-300 ${
//                     isMenuOpen ? "rotate-45 translate-y-2" : ""
//                   }`}
//                 ></span>
//                 <span
//                   className={`w-full h-0.5 bg-white transition-all duration-300 ${
//                     isMenuOpen ? "opacity-0" : ""
//                   }`}
//                 ></span>
//                 <span
//                   className={`w-full h-0.5 bg-white transition-all duration-300 ${
//                     isMenuOpen ? "-rotate-45 -translate-y-2" : ""
//                   }`}
//                 ></span>
//               </div>
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           <div
//             className={`md:hidden overflow-hidden transition-all duration-300 ${
//               isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
//             }`}
//           >
//             <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
//               {navItems.map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase().replace(" ", "")}`}
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-gray-300 hover:text-white transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-grow flex items-center">
//         <div className="w-full">
//           <div className="max-w-4xl mx-auto text-center">
//             {/* Profile Picture with Orbit Animation */}
//             <div className="mb-8 flex justify-center">
//               <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
//                 {/* Orbiting rings */}
//                 <div className="absolute inset-0 animate-spin-slow">
//                   <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1/2 shadow-lg shadow-blue-400/50"></div>
//                 </div>
//                 <div className="absolute inset-0 animate-spin-reverse" style={{ animationDuration: '5s' }}>
//                   <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full -translate-x-1/2 shadow-lg shadow-purple-400/50"></div>
//                 </div>
//                 <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '7s' }}>
//                   <div className="absolute top-1/2 right-0 w-3 h-3 bg-pink-400 rounded-full -translate-y-1/2 shadow-lg shadow-pink-400/50"></div>
//                 </div>
                
//                 {/* Main profile picture */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow blur-md opacity-75"></div>
//                 <div className="relative w-full h-full p-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-2xl shadow-purple-500/50">
//                   <div className="w-full h-full bg-slate-900 rounded-full p-1.5">
//                     <Image
//                       src={profilePic}
//                       alt="Anshuman Pati"
//                       className="w-full h-full object-cover rounded-full"
//                       priority
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Greeting Badge */}
//             <div className="inline-block mb-6 animate-bounce-slow">
//               <span className="px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 rounded-full text-sm font-semibold border border-blue-400/30 shadow-lg">
//                 👋 Welcome to my digital space
//               </span>
//             </div>

//             {/* Main Heading with Floating Letters */}
//             <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
//               <span className="text-gray-300">Hi, I'm </span>
//               <br className="sm:hidden" />
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
//                 <FloatingText text="Anshuman Pati" />
//               </span>
//             </h1>

//             {/* Subtitle with Floating Effect */}
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
//                 <FloatingText text="Full Stack Developer" />
//               </span>
//             </h2>

//             {/* MERN Badge */}
//             <div className="inline-block mb-8 animate-pulse-glow">
//               <span className="px-6 py-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm text-purple-300 rounded-full text-lg font-bold border border-purple-400/50 shadow-lg shadow-purple-500/30">
//                 MERN Stack
//               </span>
//             </div>

//             {/* Description */}
//             <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
//               Crafting{" "}
//               <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
//                 elegant
//               </span>
//               ,{" "}
//               <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
//                 scalable
//               </span>
//               , and{" "}
//               <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
//                 user-centric
//               </span>{" "}
//               web experiences that make a difference.
//             </p>

//             {/* Tech Stack Pills */}
//             <div className="flex flex-wrap gap-3 justify-center mb-12">
//               {["React", "Next.js", "Node.js", "MongoDB", "AI/ML"].map(
//                 (tech, index) => (
//                   <span
//                     key={tech}
//                     className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-gray-300 shadow-lg hover:bg-white/10 hover:scale-110 hover:border-white/20 transition-all duration-300 animate-fade-in-up"
//                     style={{ animationDelay: `${index * 0.1}s` }}
//                   >
//                     {tech}
//                   </span>
//                 )
//               )}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-12">
//               {/* Magnetic Resume Button */}
//               <a
//                 ref={buttonRef}
//                 href="https://drive.google.com/file/d/19MGI9WudPmYDgX3LTtQbf39hdxRf7Y1D/view"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-purple-500/50 transition-all duration-300 overflow-hidden"
//                 style={mousePosition.x ? getButtonTransform() : {}}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transition = 'transform 0.1s ease-out';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transition = 'transform 0.3s ease-out';
//                   e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
//                 }}
//               >
//                 {/* Animated gradient background */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-xy"></div>
                
//                 {/* Glow effect */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-xl"></div>
//                 </div>

//                 {/* Button content */}
//                 <span className="relative z-10 flex items-center justify-center gap-3">
//                   <span className="text-2xl animate-bounce-subtle">📄</span>
//                   Download Resume
//                   <svg
//                     className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M14 5l7 7m0 0l-7 7m7-7H3"
//                     />
//                   </svg>
//                 </span>

//                 {/* Shine effect */}
//                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
//               </a>

//               {/* Contact Button */}
//               <a
//                 href="#contact"
//                 className="group w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-white/10 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
//               >
//                 <span className="text-2xl">💬</span>
//                 Let's Connect
//                 <svg
//                   className="w-6 h-6 group-hover:translate-y-1 transition-transform"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                   />
//                 </svg>
//               </a>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
//               {[
//                 { number: "15+", label: "Projects", icon: "🚀" },
//                 { number: "6+", label: "Hackathons", icon: "🏆" },
//                 { number: "20+", label: "Technologies", icon: "⚡" },
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 animate-fade-in-up"
//                   style={{ animationDelay: `${0.5 + index * 0.1}s` }}
//                 >
//                   <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
//                     {stat.icon}
//                   </div>
//                   <div className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm sm:text-base text-gray-400 font-medium">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="relative z-10 pb-8 flex justify-center">
//         <a
//           href="#techstack"
//           className="animate-bounce flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group"
//         >
//           <span className="text-sm font-medium">Explore More</span>
//           <svg
//             className="w-6 h-6 group-hover:scale-125 transition-transform"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//             />
//           </svg>
//         </a>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           25% {
//             transform: translateY(-10px) rotate(2deg);
//           }
//           50% {
//             transform: translateY(-5px) rotate(-2deg);
//           }
//           75% {
//             transform: translateY(-12px) rotate(1deg);
//           }
//         }
        
//         @keyframes float-particle {
//           0%, 100% {
//             transform: translate(0, 0);
//             opacity: 0;
//           }
//           10% {
//             opacity: 1;
//           }
//           90% {
//             opacity: 1;
//           }
//           100% {
//             transform: translate(100px, -100vh);
//             opacity: 0;
//           }
//         }

//         @keyframes gradient-xy {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         @keyframes pulse-slow {
//           0%, 100% {
//             opacity: 0.3;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.5;
//             transform: scale(1.1);
//           }
//         }

//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes spin-reverse {
//           from {
//             transform: rotate(360deg);
//           }
//           to {
//             transform: rotate(0deg);
//           }
//         }

//         @keyframes bounce-slow {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         @keyframes bounce-subtle {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-3px);
//           }
//         }

//         @keyframes pulse-glow {
//           0%, 100% {
//             box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
//           }
//           50% {
//             box-shadow: 0 0 40px rgba(168, 85, 247, 0.6);
//           }
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-float-particle {
//           animation: float-particle linear infinite;
//         }

//         .animate-gradient-xy {
//           background-size: 200% 200%;
//           animation: gradient-xy 3s ease infinite;
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 4s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }

//         .animate-spin-reverse {
//           animation: spin-reverse 6s linear infinite;
//         }

//         .animate-bounce-slow {
//           animation: bounce-slow 2s ease-in-out infinite;
//         }

//         .animate-bounce-subtle {
//           animation: bounce-subtle 1.5s ease-in-out infinite;
//         }

//         .animate-pulse-glow {
//           animation: pulse-glow 2s ease-in-out infinite;
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out forwards;
//           opacity: 0;
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import profilePic from "./me.jpg"; // Update this path

export default function Hero() {
  const navItems = ["Home", "Tech Stack", "Projects", "Hackathons", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

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
      className="pt-20 min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur-xl z-50 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              <span className="hidden sm:inline">code Anshu()&#123;...&#125;</span>
              <span className="sm:hidden">Anshu</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="relative text-gray-300 hover:text-white transition-colors font-medium group text-sm lg:text-base"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${
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
            <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
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
            {/* Profile Picture with Orbit Animation */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
                {/* Orbiting rings */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1/2 shadow-lg shadow-blue-400/50"></div>
                </div>
                <div className="absolute inset-0 animate-spin-reverse" style={{ animationDuration: '5s' }}>
                  <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full -translate-x-1/2 shadow-lg shadow-purple-400/50"></div>
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '7s' }}>
                  <div className="absolute top-1/2 right-0 w-3 h-3 bg-pink-400 rounded-full -translate-y-1/2 shadow-lg shadow-pink-400/50"></div>
                </div>
                
                {/* Main profile picture */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow blur-md opacity-75"></div>
                <div className="relative w-full h-full p-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-2xl shadow-purple-500/50">
                  <div className="w-full h-full bg-slate-900 rounded-full p-1.5">
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

            {/* Greeting Badge */}
            <div className="inline-block mb-6 animate-bounce-slow">
              <span className="px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 rounded-full text-sm font-semibold border border-blue-400/30 shadow-lg">
                👋 Welcome to my digital space
              </span>
            </div>

            {/* Main Heading with Floating Letters */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-gray-300">Hi, I'm </span>
              <br className="sm:hidden" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                <FloatingText text="Anshuman Pati" />
              </span>
            </h1>

            {/* Subtitle with Floating Effect */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                <FloatingText text="Full Stack Developer" />
              </span>
            </h2>

            {/* MERN Badge */}
            <div className="inline-block mb-8 animate-pulse-glow">
              <span className="px-6 py-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm text-purple-300 rounded-full text-lg font-bold border border-purple-400/50 shadow-lg shadow-purple-500/30">
                MERN Stack
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Crafting{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                elegant
              </span>
              ,{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                scalable
              </span>
              , and{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
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
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-gray-300 shadow-lg hover:bg-white/10 hover:scale-110 hover:border-white/20 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-12">
              {/* Magnetic Resume Button */}
              <a
                ref={buttonRef}
                href="https://drive.google.com/file/d/19MGI9WudPmYDgX3LTtQbf39hdxRf7Y1D/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-purple-500/50 transition-all duration-300 overflow-hidden"
                style={mousePosition.x ? getButtonTransform() : {}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transition = 'transform 0.1s ease-out';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transition = 'transform 0.3s ease-out';
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                }}
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-xy"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-xl"></div>
                </div>

                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <span className="text-2xl animate-bounce-subtle">📄</span>
                  Download Resume
                  <svg
                    className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
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

              {/* Contact Button */}
              <a
                href="#contact"
                className="group w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-white/10 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <span className="text-2xl">💬</span>
                Let's Connect
                <svg
                  className="w-6 h-6 group-hover:translate-y-1 transition-transform"
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
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
              {[
                { number: "15+", label: "Projects", icon: "🚀" },
                { number: "6+", label: "Hackathons", icon: "🏆" },
                { number: "20+", label: "Technologies", icon: "⚡" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 animate-fade-in-up"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-400 font-medium">
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
          className="animate-bounce flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group"
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

      {/* Custom Animations */}
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

        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
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

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
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

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.6);
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

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }

        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 1.5s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}