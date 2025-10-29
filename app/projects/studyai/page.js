'use client'

import React, { useState } from 'react';
import Navigation from "../../components/navigation"; 

import {
QuestionMarkCircleIcon,
BookOpenIcon,
  GitHubIcon,
  BrainIcon,
  LinkedInIcon,
  CheckBadgeIcon,
  UsersIcon,
  DatabaseIcon,
} from "../../components/Icons"; 

// --- Project Data ---
const project = {
    name: "StudyAi",
    tech: ["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Trained Models", "Firebase (Cloud)"],
    desc: "Are you tired of juggling endless notes, trying to make sense of mountains of information? StudyAI is here to supercharge your studying and help you study smarter, not harder!",
    gradient: "from-violet-400 to-purple-600",
    liveLink: null,
    codeLink: null,
};

// --- Contributor Data (kept same, added generic role for consistency) ---
const contributors = [
    {
        name: "Anshuman Pati",
        github: "https://github.com/anshu2k24",
        linkedin: "https://www.linkedin.com/in/anshuman-pati-5575bb34a/",
        role: "Project Lead | Backend developer",
    },
    {
        name: "Midde Jayanth",
        github: "https://github.com/Jayasurya09s",
        linkedin: "https://www.linkedin.com/in/jayanth-midde-968150321/",
        role: "Frontend developer",
    },
    {
        name: "Mohammad Bilal A",
        github: "https://github.com/Bilal-biryani",
        linkedin: "https://www.linkedin.com/in/mohammad-bilal-a-4bb052340/",
        role: "AI specialist",
    },
];

// --- Feature Data (New features based on user's list, focused on key highlights) ---
const features = [
    {
        icon: <BookOpenIcon />,
        title: "Note Upload & Smart Organization",
        description: "Upload any study material (PDF, Word, images). StudyAI organizes and tags your notes by subject, course, or date automatically.",
        color: "text-purple-600",
    },
    {
        icon: <BrainIcon />,
        title: "AI-Powered Summarization",
        description: "Let StudyAI read and simplify your notes into concise summaries or detailed explanations. You choose how much detail you want!",
        color: "text-violet-500",
    },
    {
        icon: <QuestionMarkCircleIcon />,
        title: "Flashcard Generator & Spaced Repetition",
        description: "Instant flashcards generated from your notes, integrated with spaced-repetition for maximum memorization and efficient review.",
        color: "text-indigo-500",
    },
    {
        icon: <CheckBadgeIcon />,
        title: "AI Progress Tracker",
        description: "Track your study history and receive AI-powered suggestions for areas to focus on next, ensuring adaptive and effective learning paths.",
        color: "text-red-500",
    },
    {
        icon: <UsersIcon />,
        title: "Collaborative Study Groups",
        description: "Share your notes with classmates and study together! Improve your understanding through collaboration and shared insights.",
        color: "text-green-600",
    },
    {
        icon: <DatabaseIcon />,
        title: "Historical Archive & Access",
        description: "All your processed notes are saved in a permanent archive for easy access later. No need to re-upload—everything’s at your fingertips!",
        color: "text-cyan-600",
    },
];

// --- Contributor Card Component ---
const ContributorCard = ({ member, isHighlighted }) => {
    // Styles adapted to the violet/purple theme
    const cardClasses = isHighlighted
        ? "bg-white rounded-xl p-5 shadow-2xl ring-2 ring-purple-600 hover:shadow-purple-300 transition-all border-t-4 border-purple-600"
        : "bg-white rounded-xl p-5 shadow-xl ring-1 ring-violet-100 hover:shadow-2xl transition-all border-t-4 border-violet-500";
    const nameClasses = "text-lg font-bold text-slate-900 leading-tight";
    const roleClasses = isHighlighted
        ? "text-sm text-purple-700 font-semibold mb-3"
        : "text-sm text-violet-700 font-semibold mb-3";

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
                    {member.github && (
                        <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-purple-700 transition-colors"
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
                            className="text-blue-600 hover:text-purple-700 transition-colors"
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
export default function StudyAiPage() {
    return (
        <div className="bg-white text-slate-800 font-sans min-h-screen">

            {/* Navigation Placeholder - Now using the internally defined Navigation component */}
            <Navigation />

            {/* Hero Section */}
            <section id="hero" className="pt-32 pb-24 sm:pt-40 sm:pb-32 text-center relative overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6 space-y-8">

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
                        {project.name}
                        <span
                            className={`block text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} mt-4`}
                        >
                            Your Smart Study Assistant
                        </span>
                    </h1>
                    <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
                        {project.desc}
                    </p>

                    {/* Button Placeholder - Updated message */}
                    <div className="pt-8">
                        <span className="inline-flex bg-violet-100 text-violet-700 px-6 py-2 rounded-full font-semibold text-lg border border-violet-300 shadow-inner">
                            Study Smarter, Not Harder! 🎓
                        </span>
                    </div>

                </div>
            </section>

            {/* --- */}

            {/* Features Section */}
            <section id="features" className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">
                        Key Features: Revolutionizing Your Study Sessions
                    </h2>
                    <p className="text-xl text-slate-600 mb-16">
                        StudyAI is a cutting-edge platform designed to revolutionize your study sessions. It makes learning easy and fun!
                    </p>
                    {/* Updated to a 3-column grid to fit more features */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-purple-100 hover:shadow-2xl transition-all border-t-4 border-purple-400"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 ${feature.color} mb-6 shadow-md`}>
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

            {/* --- */}

            {/* Tech Stack & Contributors Section */}
            <section id="tech" className="py-24 bg-white border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-center items-start gap-16 py-8">

                        {/* Tech Stack (Moved to the left for better flow with the new data structure) */}
                        <div className="w-full lg:max-w-xl">
                            <div className="bg-slate-50 rounded-2xl p-8 shadow-inner ring-1 ring-slate-200">
                                <div className="inline-flex items-center gap-2 text-purple-700 text-sm font-medium mb-3">
                                    <DatabaseIcon className="w-5 h-5 text-purple-500" /> Technology Magic
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                                    StudyAI Technology Stack ⚙️
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-violet-100 text-violet-800 px-5 py-2 rounded-full text-md font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="mt-8 text-slate-600 italic border-l-4 border-purple-500 pl-4">
                                    This powerful stack ensures a dynamic user experience (React), smooth server-side functionality (Node.js), flexible data management (firebase), and intelligent core functionality (AI models).
                                </p>
                            </div>
                        </div>

                        {/* Embedded Contributor Display (Moved to the right) */}
                        <div id="team" className="w-full lg:max-w-md mt-8 lg:mt-0">
                            <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">
                                Core Development Team 🤝
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
            
            {/* --- */}

            {/* Footer */}
            <footer className="bg-slate-900 border-t border-purple-400 py-12 text-center text-slate-300 text-md">
                <p className="flex items-center justify-center gap-2 font-light">
                    &copy; 2025 StudyAi | Fueling the future of learning
                </p>
            </footer>
        </div>
    );
}
