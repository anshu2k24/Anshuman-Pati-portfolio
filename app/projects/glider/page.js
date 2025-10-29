'use client'

import React from 'react';
// Assuming all necessary components/icons are available in your system
import Navigation from "../../components/navigation"; 

import {
    CpuChipIcon,       // For Arduino/Hardware
    HandIcon,         // For Servo
    CodeBracketIcon,
    UsersIcon,
    GitHubIcon,
    LinkedInIcon,
    CheckBadgeIcon,   // For Hackathon Win/Achievement
    DatabaseIcon,     
    GlobeAltIcon,     // For Marine/Sustainability (repurposed for Avionics/Aero)
} from "../../components/Icons"; 

// --- Project Data (UPDATED for Glider) ---
const project = {
    name: "Glider Stabilization System",
    tech: ["Arduino Uno", "MPU6050", "Li-ion Battery", "SG90 Servo"],
    desc: "An autonomous stabilization system for a model glider, using an MPU6050 (Inertial Measurement Unit) for real-time stabilization of our custom-designed glider.",
    gradient: "from-pink-400 to-rose-600",
    liveLink: "#", 
    codeLink: "#", 
};

// --- Contributor Data (UPDATED for Glider Team) ---
// Simplified roles as the project focus was singular (avionics implementation)
const contributors = [
    {
        name: "Anshuman Pati",
        github: "https://github.com/anshu2k24/",
        linkedin: "https://www.linkedin.com/in/anshuman-pati-5575bb34a/",
        role: "Team Lead | Avionics Control",
    },
    {
        name: "JAYANTH MIDDE",
        github: "https://github.com/Jayasurya09s",
        linkedin: "https://www.linkedin.com/in/jayanth-midde-968150321/",
        role: "Hardware & Fabrication",
    },
    {
        name: "Dhruva K R",
        github: "https://github.com/Dhruva-0812/", 
        linkedin: "https://www.linkedin.com/in/dhruva-k-r-a448a934a/", 
        role: "Sensor Integration | Design",
    },
    {
        name: "Aman Kumar Singh",
        github: "https://github.com/AmanSingh007coder",
        linkedin: "https://www.linkedin.com/in/aman-kumar-singh-be/",
        role: "Sensor Integration | Design",
    }
];

// --- Feature Data (UPDATED for Glider) ---
const features = [
    {
        icon: <GlobeAltIcon className="w-8 h-8" />,
        title: "Pioneering Avionics Implementation",
        description: "The only team in the hackathon to successfully implement avionics and autonomous stabilization, leading to an Appreciation Cash Prize.",
        color: "text-green-600",
    },
    {
        icon: <CpuChipIcon className="w-8 h-8" />,
        title: "Real-Time MPU6050 Sensor Data",
        description: "Utilized the MPU6050 (6-axis gyro/accelerometer) for real-time calculation of pitch and roll to maintain stable flight.",
        color: "text-rose-500", // Adjusted color
    },
    {
        icon: <HandIcon className="w-8 h-8" />,
        title: "Servo Actuation for Control",
        description: "SG90 servo motors were strategically used to physically adjust the control surfaces (ailerons/rudders) based on the Arduino's stabilization logic.",
        color: "text-purple-600", // Adjusted color
    },
    {
        icon: <CheckBadgeIcon className="w-8 h-8" />,
        title: "CS Background Success Story",
        description: "Our successful implementation was highly appreciated, demonstrating the ability of a CS background team to master complex hardware and aerospace concepts.",
        color: "text-blue-500", 
    },
];

// --- Contributor Card Component (Color adjusted for Pink/Rose) ---
const ContributorCard = ({ member, isHighlighted }) => {
    // Styles adapted to the pink/rose theme
    const cardClasses = isHighlighted
        ? "bg-white rounded-xl p-5 shadow-2xl ring-2 ring-rose-600 hover:shadow-rose-300 transition-all border-t-4 border-rose-600"
        : "bg-white rounded-xl p-5 shadow-xl ring-1 ring-pink-100 hover:shadow-2xl transition-all border-t-4 border-pink-500";
    const nameClasses = "text-lg font-bold text-slate-900 leading-tight";
    const roleClasses = isHighlighted
        ? "text-sm text-rose-700 font-semibold mb-3"
        : "text-sm text-pink-700 font-semibold mb-3";

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
                            className="text-slate-600 hover:text-rose-700 transition-colors"
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
                            className="text-rose-600 hover:text-pink-700 transition-colors"
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
export default function GliderPage() {
    return (
        <div className="bg-white text-slate-800 font-sans min-h-screen">

            {/* Navigation Placeholder */}
            <Navigation />

            {/* Hero Section (UPDATED) */}
<section id="hero" className="pt-32 pb-18 sm:pt-40 sm:pb-32 text-center relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 space-y-8">
        <p className='relative z-10 text-lg bg-rose-100 text-rose-700 font-medium px-4 py-1 rounded-full w-fit mx-auto shadow-sm'>
            MakerBlitz Hackathon Winner: Appreciation Cash Prize 🏆
        </p>

        <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
            {project.name}
            <span
                className={`block text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} mt-4`}
            >
                Autonomous Flight Stabilization
            </span>
        </h1>
        <p className="relative z-10 text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            {project.desc}
        </p>
        <div className="relative z-10 flex justify-center space-x-4">
             {project.codeLink !== '#' && (
                <a 
                    href={project.codeLink} 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-rose-600 hover:bg-rose-700 transition-colors"
                >
                    <CodeBracketIcon className="w-5 h-5 mr-2" /> View Code
                </a>
            )}
             {/* Add a button for "Project Video" or "Live Demo" if applicable */}
        </div>
    </div>
</section>

            {/* --- 2. Contributors Section (IMPROVED - Simple List) --- */}
<div id="team" className="w-full mb-16">
    <h2 className="text-4xl font-extrabold mb-12 text-slate-900 text-center">
        Meet the Team
    </h2>
    
    {/* All Team Members */}
    <div className='max-w-6xl mx-auto px-6'>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {contributors.map((member) => (
                <ContributorCard
                    key={member.name}
                    member={member}
                    isHighlighted={member.role.includes("Lead")}
                />
            ))}
        </div>
    </div>
</div>

            {/* Features Section (UPDATED) */}
<section id="features" className="py-24 bg-slate-50 border-t border-slate-200">
    <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-slate-900">
            Key Innovations & Achievement
        </h2>
        <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto">
            Our project stood out by successfully implementing a fully autonomous avionics system, a task no other team accomplished.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature) => (
                <div
                    key={feature.title}
                    className="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-pink-100 transition-all border-t-4 border-rose-400 transform hover:scale-[1.03] hover:shadow-2xl" 
                >
                    <div className="flex flex-col items-center text-center">
                        <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-pink-50 ${feature.color} mb-6 shadow-md ring-4 ring-pink-100`}> 
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
            {/* Tech Stack Section (UPDATED) */}
            <section id="tech-and-team" className="py-24 bg-white border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* --- 1. Tech Stack Section --- */}
        <div id="tech" className="w-full max-w-4xl mx-auto "> 
            <div className="bg-slate-50 rounded-2xl p-8 shadow-inner ring-1 ring-slate-200">
                <div className="inline-flex items-center gap-2 text-rose-700 text-sm font-medium mb-3">
                    <DatabaseIcon className="w-5 h-5 text-rose-500" /> Core Technologies
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                    Glider Avionics Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="bg-pink-100 text-rose-800 px-5 py-2 rounded-full text-md font-medium" // Adjusted color
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <p className="mt-8 text-slate-600 italic border-l-4 border-rose-500 pl-4">
                    The system relies on the MPU6050 for precise angular measurements (gyroscope/accelerometer) and the Arduino Uno to execute PID control logic and drive the SG90 servos for correction.
                </p>
            </div>
        </div>
    </div>
</section>
            
            {/* Footer (UPDATED) */}
            <footer className="bg-slate-900 border-t border-rose-400 py-12 text-center text-slate-300 text-md">
                <p className="flex items-center justify-center gap-2 font-light">
                    &copy; 2025 Project Glider | Autonomous Stabilization System | Avionics Implementation
                </p>
            </footer>
        </div>
    );
}