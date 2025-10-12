"use client";

import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Hackathons from "./components/Hackathons";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
      
      <Hero />
      <TechStack />
      <Projects />
      <Hackathons />
      <Socials />
      <Contact />
      <Footer />
    </div>
  );
}
