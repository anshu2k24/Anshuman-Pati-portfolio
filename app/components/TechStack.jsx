"use client";

import { useState } from "react";

const CATEGORIES = ["All", "AI & Machine Learning", "Languages", "Web & Frameworks", "Hardware & Cloud"];

const TECHS = [
  // AI & ML
  {
    name: "YOLOv8",
    category: "AI & Machine Learning",
    badge: "Computer Vision",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "OpenCV",
    category: "AI & Machine Learning",
    badge: "Image Processing",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "TensorFlow / PyTorch",
    category: "AI & Machine Learning",
    badge: "Deep Learning",
    color: "from-orange-500 to-amber-600",
  },
  {
    name: "Transformers & LLMs",
    category: "AI & Machine Learning",
    badge: "NLP & Security",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "RAG Pipelines",
    category: "AI & Machine Learning",
    badge: "Information Retrieval",
    color: "from-cyan-500 to-blue-600",
  },

  // Languages
  {
    name: "Python",
    category: "Languages",
    badge: "Core Language",
    color: "from-yellow-400 to-blue-500",
  },
  {
    name: "JavaScript",
    category: "Languages",
    badge: "ES6+ Modern",
    color: "from-yellow-300 to-amber-500",
  },
  {
    name: "TypeScript",
    category: "Languages",
    badge: "Type-Safe",
    color: "from-blue-400 to-indigo-600",
  },
  {
    name: "C / C++",
    category: "Languages",
    badge: "Low-Level & Systems",
    color: "from-blue-600 to-slate-800",
  },
  {
    name: "SQL",
    category: "Languages",
    badge: "Relational Queries",
    color: "from-cyan-600 to-sky-700",
  },

  // Web & Frameworks
  {
    name: "Next.js",
    category: "Web & Frameworks",
    badge: "App Router / SSR",
    color: "from-slate-800 to-black",
  },
  {
    name: "React",
    category: "Web & Frameworks",
    badge: "UI Library",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Node.js",
    category: "Web & Frameworks",
    badge: "Runtime Environment",
    color: "from-green-500 to-emerald-700",
  },
  {
    name: "Tailwind CSS",
    category: "Web & Frameworks",
    badge: "Utility Styling",
    color: "from-teal-400 to-cyan-500",
  },
  {
    name: "MongoDB Atlas",
    category: "Web & Frameworks",
    badge: "NoSQL Database",
    color: "from-green-600 to-emerald-800",
  },

  // Hardware & Cloud
  {
    name: "ESP32",
    category: "Hardware & Cloud",
    badge: "IoT Microcontroller",
    color: "from-red-500 to-rose-600",
  },
  {
    name: "Arduino Uno",
    category: "Hardware & Cloud",
    badge: "Sensors & Robotics",
    color: "from-teal-500 to-cyan-600",
  },
  {
    name: "Supabase",
    category: "Hardware & Cloud",
    badge: "Cloud DB & Auth",
    color: "from-emerald-400 to-teal-600",
  },
  {
    name: "Git & GitHub",
    category: "Hardware & Cloud",
    badge: "Version Control & CI",
    color: "from-slate-700 to-zinc-900",
  },
  {
    name: "Docker",
    category: "Hardware & Cloud",
    badge: "Containerization",
    color: "from-blue-500 to-cyan-600",
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredTechs =
    activeTab === "All"
      ? TECHS
      : TECHS.filter((tech) => tech.category === activeTab);

  return (
    <section id="techstack" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-[#111111]">Tech Stack</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Languages, frameworks, and edge technologies I use to build robust AI systems
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeTab === category
                    ? "bg-[#0F0F0F] text-white shadow-xs"
                    : "bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredTechs.map((tech) => (
            <div
              key={tech.name}
              className="group relative bg-white rounded-2xl p-5 border border-[#F0F0F0] hover:border-[#EDEDED] transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div
                className={`h-1 w-8 rounded-full bg-gradient-to-r ${tech.color} mb-3`}
              ></div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-[#0F0F0F] transition-colors">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  {tech.badge}
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">
                  {tech.category.split(" ")[0]}
                </span>
                <span className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-emerald-500 transition-colors"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
