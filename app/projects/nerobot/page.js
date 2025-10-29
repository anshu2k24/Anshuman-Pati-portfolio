'use client'

import React from 'react';
// Assuming all necessary components/icons are available in your system
import Navigation from "../../components/navigation"; 

import {
    CpuChipIcon,      // For Arduino/Hardware
    CameraIcon,       // For YOLO/CV
    HandIcon,         // For Grasping Arm/Servo
    CodeBracketIcon,
    UsersIcon,
    GitHubIcon,
    LinkedInIcon,
    CheckBadgeIcon,
    DatabaseIcon,     
    GlobeAltIcon,     // For Marine/Sustainability
} from "../../components/Icons"; 

// --- Project Data (UPDATED for NeroBot) ---
const project = {
    name: "NeroBot",
    tech: ["YOLO (Object Detection)", "OpenCV", "Arduino Uno", "SG90 Servo"],
    desc: "A custom-built, jellyfish-inspired underwater robot designed to detect and collect marine plastic pollution, demonstrating intelligent perception and basic grasping motion.",
    gradient: "from-indigo-400 to-blue-600",
    liveLink: "#", // Placeholder
    codeLink: "#", // Placeholder
};

// --- Contributor Data (UPDATED: Merged teams and added specific roles) ---
const contributors = [
    {
        name: "Anshuman Pati",
        github: "https://github.com/anshu2k24/",
        linkedin: "https://www.linkedin.com/in/anshuman-pati-5575bb34a/",
        role: "Project Lead | Hardware Team Lead",
    },
    {
        name: "JAYANTH MIDDE",
        github: "https://github.com/Jayasurya09s",
        linkedin: "https://www.linkedin.com/in/jayanth-midde-968150321/",
        role: "Hardware Team",
    },
    {
        name: "Navya km",
        github: "#", 
        linkedin: "https://www.linkedin.com/in/navya-km-930483363/", // Placeholder
        role: "Hardware Team",
    },
    {
        name: "Dhruva K R",
        github: "https://github.com/Dhruva-0812/", 
        linkedin: "https://www.linkedin.com/in/dhruva-k-r-a448a934a/", // Placeholder
        role: "Hardware Team",
    },
    {
        name: "Nathwani Darshil",
        github: "https://github.com/Darshil-N",
        linkedin: "https://www.linkedin.com/in/darshil-nathwani-bba698307/",
        role: "Software Team Lead",
    },
    {
        name: "Aman Kumar Singh",
        github: "https://github.com/AmanSingh007coder",
        linkedin: "https://www.linkedin.com/in/aman-kumar-singh-be/",
        role: "Software Team",
    },
    {
        name: "Musaddik Jamadar",
        github: "#", // Placeholder
        linkedin: "https://www.linkedin.com/in/musaddik-jamadar-7a5909375/", // Placeholder
        role: "Software Team",
    },
    {
        name: "Varsha Nazare",
        github: "#", 
        linkedin: "#", 
        role: "Software Team",
    }
];

// --- Feature Data (UPDATED for NeroBot) ---
const features = [
    {
        icon: <CameraIcon className="w-8 h-8" />,
        title: "YOLO-Based Plastic Detection",
        description: "Intelligent perception system using YOLO (You Only Look Once) to identify plastic bottles in real-time video feed.",
        color: "text-red-500",
    },
    {
        icon: <CpuChipIcon className="w-8 h-8" />,
        title: "Arduino Control System",
        description: "The Arduino Uno serves as the brain for the physical prototype, managing motor control for movement and grasping actions.",
        color: "text-indigo-500",
    },
    {
        icon: <HandIcon className="w-8 h-8" />,
        title: "Basic Grasping Mechanism",
        description: "A mechanical arm powered by SG90 Servo motors and cardboard, successfully simulating the autonomous collection of waste.",
        color: "text-blue-600",
    },
    {
        icon: <GlobeAltIcon className="w-8 h-8" />,
        title: "Sustainable Focus",
        description: "Prototype built with recycled components (bottles) and focused on addressing the critical issue of marine plastic pollution.",
        color: "text-green-600",
    },
];

// --- Contributor Card Component (Color adjusted for Indigo/Blue) ---
const ContributorCard = ({ member, isHighlighted }) => {
    // Styles adapted to the indigo/blue theme
    const cardClasses = isHighlighted
        ? "bg-white rounded-xl p-5 shadow-2xl ring-2 ring-blue-600 hover:shadow-blue-300 transition-all border-t-4 border-blue-600"
        : "bg-white rounded-xl p-5 shadow-xl ring-1 ring-indigo-100 hover:shadow-2xl transition-all border-t-4 border-indigo-500";
    const nameClasses = "text-lg font-bold text-slate-900 leading-tight";
    const roleClasses = isHighlighted
        ? "text-sm text-blue-700 font-semibold mb-3"
        : "text-sm text-indigo-700 font-semibold mb-3";

    return (
        <div key={member.name} className={cardClasses}>
            <div className="flex flex-col items-center">
                <h3 className={nameClasses}>
                    {member.name}
                </h3>
                <p className={roleClasses}>
                    {member.role || "Team Member"}
                </p>

                <div className="flex gap-4">
                    {member.github && member.github !== '#' && (
                        <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-blue-700 transition-colors"
                            title={`${member.name} on GitHub`}
                        >
                            <GitHubIcon className="w-6 h-6" />
                        </a>
                    )}
                    {member.linkedin && member.linkedin !== '#' && (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-indigo-700 transition-colors"
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
export default function NeroBotPage() {
    return (
        <div className="bg-white text-slate-800 font-sans min-h-screen">

            {/* Navigation Placeholder */}
            <Navigation />

            {/* Hero Section (IMPROVED) */}
<section id="hero" className="pt-32 pb-24 sm:pt-40 sm:pb-32 text-center relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 space-y-8">
        <p className='relative z-10 text-sm bg-indigo-100 text-indigo-700 font-medium px-4 py-1 rounded-full w-fit mx-auto shadow-sm'>
            Sem II - Mini project🌊
        </p>

        <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
            {project.name}
            <span
                className={`block text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} mt-4`}
            >
                From Vision to Reality
            </span>
        </h1>
        <p className="relative z-10 text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            {project.desc}
        </p>
    </div>
</section>

            {/* --- 2. Contributors Section (IMPROVED - Grouped by Team) --- */}
<div id="team" className="w-full mb-10">
    <h2 className="text-4xl font-extrabold mb-12 text-slate-900 text-center">
        Meet the TritoNexus Team
    </h2>
    
    {/* Hardware Team */}
    <div className='max-w-6xl mx-auto mb-16'>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {contributors.filter(c => c.role.includes("Hardware")).map((member) => (
                <ContributorCard
                    key={member.name}
                    member={member}
                    isHighlighted={member.role.includes("Lead")}
                />
            ))}
        </div>
    </div>
    
    {/* Software Team */}
    <div className='max-w-6xl mx-auto'>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"> 
            {contributors.filter(c => c.role.includes("Software")).map((member) => (
                <ContributorCard
                    key={member.name}
                    member={member}
                    isHighlighted={member.role.includes("YOLO")}
                />
            ))}
        </div>
    </div>
</div>

            {/* Features Section (IMPROVED) */}
<section id="features" className="py-24 bg-slate-50 border-t border-slate-200">
    <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-slate-900">
            Key Innovations: AI & Mechanics in Sync
        </h2>
        <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto">
            NeroBot represents a blend of advanced computer vision and fundamental robotics to tackle marine pollution.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature) => (
                <div
                    key={feature.title}
                    // ADDED: Hover scale effect
                    className="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-blue-100 transition-all border-t-4 border-indigo-400 transform hover:scale-[1.03] hover:shadow-2xl" 
                >
                    <div className="flex flex-col items-center text-center">
                        <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-indigo-50 ${feature.color} mb-6 shadow-md ring-4 ring-indigo-100`}> 
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900">
                            {feature.title}
                        </h3>
                        <p className="text-slate-700">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>
            {/* Tech Stack Section */}
            <section id="tech-and-team" className="py-24 bg-white border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* --- 1. Tech Stack Section --- */}
        {/* We center this section horizontally */}
        <div id="tech" className="w-full max-w-4xl mx-auto "> 
            <div className="bg-slate-50 rounded-2xl p-8 shadow-inner ring-1 ring-slate-200">
                <div className="inline-flex items-center gap-2 text-indigo-700 text-sm font-medium mb-3">
                    <DatabaseIcon className="w-5 h-5 text-indigo-500" /> Core Technologies
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                    NeroBot Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                    {/* Ensure 'project' is defined in the parent scope */}
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-md font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <p className="mt-8 text-slate-600 italic border-l-4 border-indigo-500 pl-4">
                    The software utilizes efficient models (YOLO, TorchScript) for real-time perception, while the hardware relies on the robust Arduino Uno for control and actuation.
                </p>
            </div>
        </div>
    </div>
</section>
            

            {/* Footer */}
            <footer className="bg-slate-900 border-t border-blue-400 py-12 text-center text-slate-300 text-md">
                <p className="flex items-center justify-center gap-2 font-light">
                    &copy; 2025 Project NeroBot | TritoNexus | AI Meets Marine Robotics
                </p>
            </footer>
        </div>
    );
}