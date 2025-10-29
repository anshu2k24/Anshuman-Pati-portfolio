"use client";

import React from "react";
import Navigation from "../../components/navigation";

import {
  CloudRainIcon, // Assuming a suitable rain-related icon exists or can be replaced
  BoltIcon, // For automation/IoT
  CodeBracketIcon, // For the code link/GitHub
  WrenchIcon, // For components/tech stack
  UsersIcon, // For contributors
  GitHubIcon,
  LinkedInIcon,
  CheckBadgeIcon,
  DatabaseIcon, // Keeping some generic icons for structure
} from "../../components/Icons";

// --- Project Data (Updated with PCFR) ---
const project = {
  name: "PCFR",
  tech: ["Arduino Uno", "Rain Sensor", "SG90 Servo", "Rain sensor module"],
  desc: "An IoT solution to automatically turns the cloth drying rod under a roof like cover when rain is detected.",
  gradient: "from-teal-400 to-green-600",
  liveLink: "#", // Placeholder
  codeLink: "#", // Placeholder
};

// --- Contributor Data (Updated with new list and generic roles) ---
const contributors = [
  {
    name: "Anshuman Pati",
    github: "https://github.com/anshu2k24",
    linkedin: "https://www.linkedin.com/in/anshuman-pati-5575bb34a/",
  },
  {
    name: "Midde Jayanth",
    github: "https://github.com/Jayasurya09s",
    linkedin: "https://www.linkedin.com/in/jayanth-midde-968150321/",
  },
  {
    name: "Aman Kumar Singh",
    github: "https://github.com/AmanSingh007coder",
    linkedin: "https://www.linkedin.com/in/aman-kumar-singh-be/",
  },
];

// --- Feature Data (Updated for PCFR) ---
const features = [
  {
    icon: <CloudRainIcon className="w-8 h-8" />,
    title: "Automatic Rain Detection",
    description:
      "Utilizes a highly sensitive Rain Sensor module to accurately detect the onset of rain in real-time.",
    color: "text-blue-500",
  },
  {
    icon: <BoltIcon className="w-8 h-8" />,
    title: "Instant Cloth Protection",
    description:
      "Triggers a rapid response, using the SG90 Servo to automatically pull the clothes drying rod under a protective cover.",
    color: "text-green-600",
  },
  {
    icon: <WrenchIcon className="w-8 h-8" />,
    title: "Reliable Arduino Control",
    description:
      "The Arduino Uno acts as the robust micro-controller, ensuring reliable, low-power operation and precise movement control.",
    color: "text-teal-600",
  },
];

// --- Contributor Card Component (Color adjusted for Green/Teal) ---
const ContributorCard = ({ member, isHighlighted }) => {
  // Styles adapted to the teal/green theme
  const cardClasses = isHighlighted
    ? "bg-white rounded-xl p-5 shadow-2xl ring-2 ring-green-600 hover:shadow-green-300 transition-all border-t-4 border-green-600"
    : "bg-white rounded-xl p-5 shadow-xl ring-1 ring-teal-100 hover:shadow-2xl transition-all border-t-4 border-teal-500";
  const nameClasses = "text-lg font-bold text-slate-900 leading-tight";
  const roleClasses = isHighlighted
    ? "text-sm text-green-700 font-semibold mb-3"
    : "text-sm text-teal-700 font-semibold mb-3";

  return (
    <div key={member.name} className={cardClasses}>
      <div className="flex flex-col items-center gap-1">
        <h3 className={nameClasses}>{member.name}</h3>

        <div className="flex gap-4">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-green-700 transition-colors"
              title={`${member.name} on GitHub`}
            >
              <GitHubIcon className="w-6 h-6" />
            </a>
          )}
          {member.linkedin && member.linkedin !== "#" && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-green-700 transition-colors"
              title={`${member.name} on LinkedIn`}
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function PCFRDemoPage() {
  return (
    <div className="bg-white text-slate-800 font-sans min-h-screen">
      {/* Navigation Placeholder */}
      <Navigation />
      {/* Hero Section (FIXED) */}
      <section
        id="hero"
        className="pt-32 pb-20 sm:pt-40 sm:pb-20 text-center relative overflow-hidden bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <p className="text-sm bg-teal-100 text-teal-700 font-medium px-4 py-1 rounded-full w-fit mx-auto">
            IOT Mini Project 💡
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
            {project.name}
            <span
              className={`block text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} mt-4`}
            >
              Protecting Clothes From Rain
            </span>
          </h1>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            {project.desc}
          </p>
        </div>
      </section>
      ---
      {/* Features Section */}
      <section
        id="features"
        className="py-24 bg-slate-50 border-t border-slate-200"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            How PCFR Works: Simple & Effective IoT
          </h2>
          <p className="text-xl text-slate-600 mb-16">
            Our solution combines simple, low-cost electronics to create a
            powerful, set-and-forget home automation utility.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-teal-100 hover:shadow-2xl transition-all border-t-4 border-green-400"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 ${feature.color} mb-6 shadow-md`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Tech Stack & Contributors Section */}
      <section id="tech" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-start gap-16 py-4">
            {/* Tech Stack */}
            <div className="w-full lg:max-w-xl mt-8">
              <div className="bg-slate-50 rounded-2xl p-8 shadow-inner ring-1 ring-slate-200">
                <div className="inline-flex items-center gap-2 text-green-700 text-sm font-medium mb-3">
                  <DatabaseIcon className="w-5 h-5 text-green-500" /> Core
                  Hardware Components
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  PCFR Technology Stack 🛠️
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-teal-100 text-teal-800 px-5 py-2 rounded-full text-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-slate-600 italic border-l-4 border-green-500 pl-4">
                  These components form the backbone of the PCFR system,
                  providing accurate sensing and reliable mechanical movement
                  for fully automatic protection.
                </p>
              </div>
            </div>

            {/* Embedded Contributor Display */}
            <div id="team" className="w-full lg:max-w-md mt-8 lg:mt-0">
              <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">
                Core Development Team
              </h2>
              <div className="grid grid-cols-1 gap-6 w-full max-w-sm mx-auto">
                {contributors.map((member) => (
                  <ContributorCard
                    key={member.name}
                    member={member}
                    isHighlighted={member.name === "Anshuman Pati"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      ---
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-green-400 py-12 text-center text-slate-300 text-md">
        <p className="flex items-center justify-center gap-2 font-light">
          &copy; 2025 PCFR Project | Learning IOT 💖
        </p>
      </footer>
    </div>
  );
}
