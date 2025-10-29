"use client";

import { useState } from "react";
import Navigation from "../../components/navigation";
import {
  UserGroupIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  CalendarIcon,
  CodeBracketIcon,
  HeartIcon,
  CheckCircleIcon,
  GitHubIcon, 
  LinkedInIcon, 
} from "../../components/Icons"; 

export default function UniTechPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Project Data
  const project = {
    name: "UniTech",
    tagline: "The First Step: Connecting University Innovation",
    desc: "A full-stack platform, conceived during my very first hackathon, designed to connect university students with both technical and non-technical events and collaboration opportunities, bridging the gap between intra- and inter-college communities.",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-blue-500 via-cyan-500 to-teal-400", 
    codeLink: "https://github.com/anshu2k24/ByteXync-Hunter_Squad.git",
  };

  // Contributor Data
  const contributors = [
    {
      name: "Anshuman Pati",
      github: "https://github.com/anshu2k24",
      linkedin: "https://www.linkedin.com/in/anshuman-pati-5575bb34a/",
      role: "Project Lead",
    },
    {
      name: "Midde Jayanth",
      github: "https://github.com/Jayasurya09s",
      linkedin: "https://www.linkedin.com/in/jayanth-midde-968150321/",
      role: "Developer",
    },
    {
      name: "Aman Kumar Singh",
      github: "https://github.com/AmanSingh007coder",
      linkedin: "https://www.linkedin.com/in/aman-kumar-singh-be/",
      role: "Developer",
    },
    {
      name: "Nitin",
      github: "https://github.com/hellandheaven2005",
      linkedin: "#", // Retained '#' for optional LinkedIn link
      role: "Developer",
    },
  ];

  const features = [
    {
      icon: <GlobeAltIcon />,
      title: "Inter-College Bridge",
      description:
        "The core idea: breaking down campus barriers to allow students to easily discover and join events hosted by any university.",
    },
    {
      icon: <CalendarIcon />,
      title: "Beyond Hackathons",
      description:
        "A truly universal event calendar supporting all student activities, from competitive coding to cultural workshops.",
    },
    {
      icon: <UserGroupIcon />,
      title: "Team Formation",
      description:
        "Facilitating collaboration by providing a dedicated hub for students to find partners and form their project teams.",
    },
  ];

  const roadmap = [
    "Develop a fully functional user dashboard for personalized event tracking.",
    "Implement robust searching, sorting, and advanced filtering for events.",
    "Build the dedicated 'Team Builder' module to connect users based on skills.",
    "Integrate real-time notification and reminder services for registered events.",
  ];

  return (
    <div className="bg-white text-slate-800">
      {/* Navigation - Dark Nav remains for contrast */}
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} className="bg-slate-900"/>

      {/* Hero Section - Light Themed */}
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
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-700 transition-all text-lg shadow-lg"
            >
              <CodeBracketIcon className="w-6 h-6" />
              View Source Code
            </a>
          </div>

          {/* Embedded Contributor Display */}
          <div className="pt-8">
            <h2 className="text-2xl font-bold mb-8 text-slate-800">
              Built by the Hunter Squad 🚀
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {contributors.map((member) => {
                // Conditional variables for highlighting
                const isProjectLead = member.name === "Anshuman Pati";
                const cardClasses = isProjectLead 
                  ? "bg-white rounded-xl p-4 shadow-2xl ring-2 ring-emerald-500 hover:shadow-emerald-300 transition-all border-t-4 border-emerald-500" 
                  : "bg-white rounded-xl p-4 shadow-xl ring-1 ring-cyan-100 hover:shadow-2xl transition-all border-t-4 border-cyan-400";
                const nameClasses = isProjectLead
                  ? "text-md font-bold text-emerald-600 leading-tight"
                  : "text-md font-bold text-slate-900 leading-tight";
                const roleClasses = isProjectLead
                  ? "text-xs text-emerald-700 font-semibold mb-3"
                  : "text-xs text-cyan-600 font-semibold mb-3";
                
                return (
                  <div key={member.name} className={cardClasses}>
                    <div className="flex flex-col items-center">                      
                      <h3 className={nameClasses}>
                        {member.name}
                      </h3>
                      <p className={roleClasses}>
                        {member.role || "Team Member"}
                      </p>
                      
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
                        {member.linkedin && member.linkedin !== '#' && (
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
              })}
            </div>
          </div>
          
        </div>
      </section>

      ---
      
      {/* Features Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            The Vision Behind UniTech
          </h2>
           <p className="text-xl text-slate-600 mb-16">
            Solving the core problem of event discovery for students.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-cyan-100 hover:shadow-2xl transition-all border-t-4 border-cyan-400"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-500 text-white mb-6 shadow-md">
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

      {/* Tech Stack + Roadmap */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16">
          {/* Tech Stack */}
          <div className="bg-slate-50 rounded-2xl p-8 shadow-inner ring-1 ring-slate-200">
            <div className="inline-flex items-center gap-2 text-blue-700 text-sm font-medium mb-3">
              <CodeBracketIcon className="w-5 h-5 text-blue-500" /> Technology Foundation
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              My First Foray into Web Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-cyan-100 text-cyan-800 px-5 py-2 rounded-full text-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
             <p className="mt-8 text-slate-600 italic border-l-4 border-cyan-400 pl-4">
              This stack was the foundation where the journey started, focusing on core web principles.
            </p>
          </div>

          {/* Roadmap */}
          <div className="bg-slate-50 rounded-2xl p-8 shadow-inner ring-1 ring-slate-200">
            <div className="inline-flex items-center gap-2 text-teal-600 text-sm font-medium mb-3">
              <AcademicCapIcon className="w-5 h-5 text-teal-500" /> Next Steps
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Future Roadmap & Growth
            </h3>
            <ul className="space-y-4">
              {roadmap.map((item, i) => (
                <li key={item} className="flex items-start gap-4 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircleIcon className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      ---

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-cyan-400 py-12 text-center text-slate-300 text-md">
        <p className="flex items-center justify-center gap-2 font-light">
          &copy; 2025 UniTech | Built with
          <HeartIcon className="w-5 h-5 text-red-500" />
          by the Hunter Squad
        </p>
      </footer>
    </div>
  );
}