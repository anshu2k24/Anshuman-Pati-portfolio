"use client";

import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-white to-blue-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Experience
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional experience and research work
          </p>
        </div>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-200/50 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {exp.duration} • {exp.location} • {exp.type}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                      <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:from-gray-200 hover:to-gray-300 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
