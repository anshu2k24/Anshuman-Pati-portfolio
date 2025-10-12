"use client";

import Spline from "@splinetool/react-spline";

export default function Hero() {
  const navItems = ["Home", "Tech Stack", "Projects", "Hackathons", "Contact"];

  return (
    <section id="home" className="pt-20 min-h-screen flex flex-col relative overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/HvslEaJIVL9auw6l/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
  code Anshu()&#123;...&#125;
</div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>{/* Add Hero text/CTA here */}</div>
          <div>{/* Optional second column */}</div>
        </div>
      </div>
    </section>
  );
}
