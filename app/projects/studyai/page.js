'use client'

import React, { useState } from 'react';
import Navigation from "../../components/navigation"; 





// --- Custom Icons for StudyAi Features ---
export const QuestionMarkCircleIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9.247c.571-.782 1.408-1.258 2.37-1.258 1.42 0 2.57 1.15 2.57 2.57 0 .584-.24 1.12-.66 1.54L9 16h6m-6-8h.01M9 16v.01"></path></svg>
);
export const BookOpenIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.75l-6-3m6 3l6-3m-6 3v13.5m-3-6h6"></path></svg>
);
export const BrainIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6.75a4.5 4.5 0 011.107-2.924L12 3m-2.25 3h-.347c-.987 0-1.89-1.076-1.89-2.25v-.347c0-.987 1.076-1.89 2.25-1.89h.347m-2.25 3H6.75a4.5 4.5 0 00-2.924 1.107L3 12m3.75-6v-.347c0-.987 1.076-1.89 2.25-1.89h.347m-3 3H.347c-.987 0-1.89 1.076-1.89 2.25v.347c0 .987 1.076 1.89 2.25 1.89H6.75m11.25-3v-.347c0-.987-1.076-1.89-2.25-1.89h-.347m3 3h.347c.987 0 1.89 1.076 1.89 2.25v.347c0 .987-1.076 1.89-2.25 1.89H17.25M12 3.75h-.008m-1.5-.75h1.5m-4.5 6h1.5m-3 3h1.5m-1.5 3h1.5m-3 3h1.5m-3 3h1.5m-3 3h1.5m-3 3h1.5M6 17.25v-.347c0-.987 1.076-1.89 2.25-1.89h.347m-3 3H.347c-.987 0-1.89 1.076-1.89 2.25v.347c0 .987 1.076 1.89 2.25 1.89H6.75m11.25-3v-.347c0-.987-1.076-1.89-2.25-1.89h-.347m3 3h.347c.987 0 1.89 1.076 1.89 2.25v.347c0 .987-1.076 1.89-2.25 1.89H17.25M12 3.75h-.008m-1.5-.75h1.5m-4.5 6h1.5m-3 3h1.5m-1.5 3h1.5m-3 3h1.5m-3 3h1.5m-3 3h1.5m-3 3h1.5"></path></svg>
);
export const DatabaseIcon = ({ className = "w-6 h-6" }) => ( // Icon for Tech Stack/Dependencies
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10m-4-10v10m8-10v10m4-10v10m-4-10v10m8-10v10M8 7H4m-4 0h12m4 0h4M8 17H4m-4 0h12m4 0h4"></path></svg>
);
export const CheckBadgeIcon = ({ className = "w-6 h-6" }) => ( // Icon for Progress Tracker
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
export const UsersIcon = ({ className = "w-6 h-6" }) => ( // Icon for Collaboration
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-10a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v9a4 4 0 01-4 4zm-1-9a4 4 0 10-8 0 4 4 0 008 0z"></path></svg>
);
export const RocketLaunchIcon = ({ className = "w-6 h-6" }) => ( // Icon for Contribution
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h-9"></path></svg>
);

export const GitHubIconInternal = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.417 2.865 8.17 6.815 9.492.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.468-1.11-1.468-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.359-1.088.65-1.338-2.776-.235-5.594-1.395-5.594-6.233 0-1.381.484-2.515 1.272-3.411-.127-.235-.559-1.625.111-3.384 0 0 1.04-.343 3.425 1.31.998-.275 2.05-.412 3.123-.412.008 0 .017 0 .025 0 1.073 0 2.125.137 3.123.412 2.385-1.653 3.425-1.31 3.425-1.31.67 1.759.248 3.149.127 3.384.787.896 1.272 2.03 1.272 3.411 0 4.848-2.829 5.908-5.609 6.164.368.318.682.946.682 1.903 0 1.381-.013 2.482-.013 2.814 0 .267.182.578.688.482A9.917 9.917 0 0022 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd" /></svg>;
export const LinkedInIconInternal = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.528-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.775 7 2.484v6.751z" clipRule="evenodd" /></svg>;

// --- Project Data ---
const project = {
    name: "StudyAi",
    // UPDATED tech stack
    tech: ["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Trained Models", "Firebase (Cloud)"],
    // UPDATED description to be more general for the hero section
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
                            <GitHubIconInternal className="w-6 h-6" />
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
                            <LinkedInIconInternal className="w-6 h-6" />
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
                            Your Ultimate Study Assistant 🌟🚀
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
