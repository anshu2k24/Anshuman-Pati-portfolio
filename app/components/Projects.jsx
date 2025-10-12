"use client";

export default function Projects() {
  const projects = [
    { name: "EcoAi", tech: ["AI", "Sustainability", "Efficiency"], gradient: "from-green-400 to-emerald-600" },
    { name: "Rock, Paper, and Scissor", tech: ["YOLOv8", "TensorFlow", "OpenCV"], gradient: "from-purple-400 to-pink-600" },
    { name: "UniTech", tech: ["React", "Firebase", "Node.js"], gradient: "from-blue-400 to-cyan-600" },
    { name: "Password Manager", tech: ["Python", "Encryption", "Web"], gradient: "from-orange-400 to-red-600" },
    { name: "StudyAi", tech: ["React", "TailwindCSS", "Firebase", "Python AI"], gradient: "from-violet-400 to-purple-600" },
    { name: "PCFR", tech: ["Arduino Uno", "Rain Sensor", "SG90 Servo"], gradient: "from-teal-400 to-green-600" },
    { name: "NeroBot", tech: ["Arduino Uno", "SG90 Servo"], gradient: "from-indigo-400 to-blue-600" },
    { name: "Glider", tech: ["Arduino Uno", "MPU6050", "Li-ion Battery", "SG90 Servo"], gradient: "from-pink-400 to-rose-600" },
  ];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Featured Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">A showcase of my recent work and side projects</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className="p-6 relative">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">{project.name}</h3>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient} group-hover:scale-150 transition-transform duration-300`}></div>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">A comprehensive solution built with modern technologies to solve real-world problems and enhance user experience.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:from-gray-200 hover:to-gray-300 transition-all">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-semibold group/link">Live Demo<span className="transform group-hover/link:translate-x-1 transition-transform">→</span></a>
                  <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm font-semibold group/link">Source Code<span className="transform group-hover/link:translate-x-1 transition-transform">→</span></a>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
    