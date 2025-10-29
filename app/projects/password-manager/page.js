"use client";

import React, { useState } from "react";
import Navigation from "../../components/navigation";
import {
  LockClosedIcon,
  ZapIcon,
  DatabaseIcon,
  GitHubIcon,
  LinkedInIcon,
} from "../../components/Icons";

// Project Data (from original component)
const project = {
  name: "Secure Password Manager",
  tagline: "Unbreakable Credentials, Powered by AI.",
  desc: "A secure, web-based tool. It uses Fernet encryption (derived via PBKDF2HMAC) to protect credentials in a CSV file, and integrates the Google Gemini API to generate unique, personalized usernames.",
  tech: [
    "Python",
    "Pandas",
    "Cryptography (Fernet/PBKDF2)",
    "Google Gemini API",
    "HTML",
    "Css",
    "JS",
  ],
  gradient: "from-orange-500 to-red-600",
  codeLink: "https://github.com/anshu2k24/Password-Manager",
};

// Contributor Data (from original component)
const contributors = [
  {
    name: "Anshuman Pati",
    github: "https://github.com/anshu2k24",
    linkedin: "https://www.linkedin.com/in/anshuman-pati-5575bb34a/",
    role: "Python Developer",
  },
  {
    name: "Aman Kumar Singh",
    github: "https://github.com/AmanSingh007coder",
    linkedin: "https://www.linkedin.com/in/aman-kumar-singh-be/",
    role: "Web Developer",
  },
];

const features = [
  {
    icon: <LockClosedIcon />,
    title: "Military-Grade Encryption",
    description:
      "Credentials are protected using Fernet symmetric encryption. Keys are securely derived from a master password via the robust PBKDF2HMAC key derivation function.",
    color: "text-red-600",
  },
  {
    icon: <ZapIcon />,
    title: "AI Username Generation",
    description:
      "Integrates the Google Gemini API to generate five creative, unique, and personalized usernames based on user details and the target platform.",
    color: "text-orange-500",
  },
  {
    icon: <DatabaseIcon />,
    title: "Local Data Persistence",
    description:
      "Uses the Pandas library to efficiently manage and store encrypted username/password pairs and salts in a secure, local CSV file.",
    color: "text-amber-500",
  },
];

const ContributorCard = ({ member, isHighlighted }) => {
  // Adapted styles from UniTech to the Password Manager colors
  const cardClasses = isHighlighted
    ? "bg-white rounded-xl p-4 shadow-2xl ring-2 ring-red-600 hover:shadow-red-300 transition-all border-t-4 border-red-600"
    : "bg-white rounded-xl p-4 shadow-xl ring-1 ring-orange-100 hover:shadow-2xl transition-all border-t-4 border-orange-500";
  const nameClasses = isHighlighted
    ? "text-md font-bold text-red-700 leading-tight"
    : "text-md font-bold text-slate-900 leading-tight";
  const roleClasses = isHighlighted
    ? "text-xs text-red-800 font-semibold mb-3"
    : "text-xs text-orange-700 font-semibold mb-3";

  return (
    <div key={member.name} className={cardClasses}>
      <div className="flex flex-col items-center">
        <h3 className={nameClasses}>{member.name}</h3>
        <p className={roleClasses}>{member.role || "Team Member"}</p>

        <div className="flex gap-3">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
              title={`${member.name} on GitHub`}
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          )}
          {member.linkedin && member.linkedin !== "#" && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              title={`${member.name} on LinkedIn`}
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function SecurePasswordManagerPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white text-slate-800 font-sans min-h-screen">
      {/* Navigation - Dark Nav remains for contrast (UniTech structure) */}
      {/* Note: Ensure your Navigation component handles the isMenuOpen prop */}
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        className="bg-slate-900"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 text-center relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            {project.name}
            <span
              className={`block text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} mt-4`}
            >
              {project.tagline}
            </span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            {project.desc}
          </p>

          <div className="flex justify-center gap-4 pt-4 pb-12">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all text-lg shadow-lg"
              title="View the Python source code"
            >
              <GitHubIcon className="w-6 h-6" />
              View Source Code
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-start gap-26 py-8">
            {/* Embedded Contributor Display */}
            <div className="pt-4 w-full lg:max-w-sm">
              <h2 className="text-2xl font-bold mb-8 text-slate-800 text-center">
                Core Contributors
              </h2>
              {/* Centering the Contributor list container */}
              <div className="flex flex-col gap-8 w-full max-w-sm mx-auto">
                {contributors.map((member) => (
                  <ContributorCard
                    key={member.name}
                    member={member}
                    isHighlighted={member.name === "Anshuman Pati"}
                  />
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="w-full lg:max-w-xl">
              <div className="bg-slate-50 rounded-2xl p-8 shadow-inner ring-1 ring-slate-200">
                <div className="inline-flex items-center gap-2 text-red-700 text-sm font-medium mb-3">
                  <DatabaseIcon className="w-5 h-5 text-red-500" /> Project
                  Dependencies
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-red-100 text-red-800 px-5 py-2 rounded-full text-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-slate-600 italic border-l-4 border-red-500 pl-4">
                  This project showcases strong cryptography skills and
                  integration with modern AI services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Features Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Core Architecture & Technology
          </h2>
          <p className="text-xl text-slate-600 mb-16">
            A deep dive into the robust security and intelligence features.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-red-100 hover:shadow-2xl transition-all border-t-4 border-red-400"
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

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-red-400 py-12 text-center text-slate-300 text-md">
        <p className="flex items-center justify-center gap-2 font-light">
          &copy; 2025 Secure Password Manager | Built to Learn
        </p>
      </footer>
    </div>
  );
}
