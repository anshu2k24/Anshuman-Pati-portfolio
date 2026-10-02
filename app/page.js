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
import About from "./components/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Publications />
      <TechStack />
      <Honors />
      <Hackathons />
      <Leadership />
      <Socials />
      <Contact />
      <Footer />
    </div>
  );
}
