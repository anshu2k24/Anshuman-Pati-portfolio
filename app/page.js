"use client";

import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Hackathons from "./components/Hackathons";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Honors from "./components/Honors";
import Leadership from "./components/Leadership";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
      
      <Hero />
      <Experience />
      <TechStack />
      <Projects />
      <Publications />
      <Honors />
      <Hackathons />
      <Leadership />
      <Socials />
      <Contact />
      <Footer />
    </div>
  );
}
