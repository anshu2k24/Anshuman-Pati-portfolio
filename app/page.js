"use client";

import { useState } from "react";
import Navigation from "./components/navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Talks from "./components/Talks";
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
        <Projects />
        <Publications />
        <Talks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
