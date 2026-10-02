"use client";

import { useState } from "react";
import Navigation from "./components/navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Talks from "./components/Talks";
import Honors from "./components/Honors";
import Hackathons from "./components/Hackathons";
import Leadership from "./components/Leadership";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#121212]">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Publications />
        <Talks />
        <Honors />
        <Hackathons />
        <Leadership />
        <Socials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
