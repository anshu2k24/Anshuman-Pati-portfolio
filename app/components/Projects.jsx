"use client";

// Helper function to create the URL slug from the project name
const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};

export default function Projects() {
  const projects = [
    {
      name: "EcoAi",
      tech: ["AI", "Sustainability", "Efficiency"],
      desc: "EcoAi aims to reduce carbon footprints due to use of AI. It does this by improving user prompt in the Ai chat itself and reducing the tokens consumed. This alligns with SDG 12,13,14.", // Simplified desc for single string
      gradient: "from-green-400 to-emerald-600",
      liveLink: "#", // Placeholder
      codeLink: "https://github.com/anshu2k24/enhanced-prompt", // Example link
    },
    {
      name: "Shatru",
      tech: ["Python", "Phi-3-mini", "Shannon Entropy"],
      desc: "Runtime backdoor detection engine for LLMs monitoring Shannon Entropy distributions across layers 6-18 of Phi-3-mini to fingerprint Trojan activation patterns. Detects poisoned models on trigger input without access to training data or model weights - a novel black-box approach to LLM supply-chain security.",
      gradient: "from-cyan-400 to-blue-600",
      liveLink: "#",
      codeLink: "https://github.com/anshu2k24/shatru",
    },
    {
      name: "Gani",
      tech: ["YOLOv8", "ESP32", "Next.js", "Python"],
      desc: "IoT and ML early-warning platform for rockfall prediction in open-pit mines, fusing live vibration, tilt, and seismic sensor data from ESP32 hardware with YOLOv8 visual detection. Built with severity-tiered alerts (Low, Medium, Critical) and real-time sensor telemetry; selected for Smart India Hackathon 2025.",
      gradient: "from-teal-400 to-cyan-600",
      liveLink: "#",
      codeLink: "https://github.com/anshu2k24/gani",
    },    {
      name: "Rock, Paper, and Scissor",
      tech: ["YOLOv8", "OpenCV", "PyTorch", "NumPy", "Pandas"],
      desc: "A YOLOv8-powered vision system for real-time Rock–Paper–Scissors gesture recognition, built with Python and OpenCV.",
      gradient: "from-purple-400 to-pink-600",
      liveLink: "#",
      codeLink: "https://github.com/anshu2k24/rock-paper-scissors",
    },
    {
      name: "UniTech",
      tech: ["Html", "Css", "js"],
      desc: "A full-stack platform designed to connect university students with tech as well as non-tech related  events, and collaboration opportunities, be it intra or inter college. Not limiting to only hackathons, we provide a platform for any event possible.",
      gradient: "from-blue-400 to-cyan-600",
      liveLink: "#",
      codeLink: "https://github.com/anshu2k24/ByteXync-Hunter_Squad.git",
    },
    {
      name: "Password Manager",
      desc: "A secure, web-based app built in Python. It uses Fernet encryption (derived via PBKDF2HMAC) to protect credentials in a CSV file, and integrates the Gemini API to generate unique, personalized usernames.",
      tech: [
        "Python",
        "Pandas",
        "Cryptography (Fernet/PBKDF2)",
        "Google Gemini API",
        "HTML",
        "Css",
        "JS"
      ],
      gradient: "from-orange-400 to-red-600",
      liveLink: "#",
      codeLink: "https://github.com/anshu2k24/Password-Manager",
    },
    {
      name: "StudyAi",
      tech: ["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Trained Models", "Firebase (Cloud)"],
    desc: "Are you tired of juggling endless notes, trying to make sense of mountains of information? StudyAI is here to supercharge your studying and help you study smarter, not harder!",
      gradient: "from-violet-400 to-purple-600",
      liveLink: "#",
      codeLink: "#",
    },
    {
      name: "PCFR",
      tech: ["Arduino Uno", "Rain Sensor", "SG90 Servo", "Rain sensor module"],
      desc: "Project name: 'Protecting Clothes From Rain' - an IoT solution to automatically turns the cloth drying rod under a roof like cover when rain is detected.",
      gradient: "from-teal-400 to-green-600",
      liveLink: "#",
      codeLink: "#",
    },
    {
    name: "NeroBot",
    tech: ["YOLO (Object Detection)", "OpenCV", "Arduino Uno", "SG90 Servo"],
    desc: "A custom-built, jellyfish-inspired underwater robot designed to detect and collect marine plastic pollution, demonstrating intelligent perception and basic grasping motion.",
    gradient: "from-indigo-400 to-blue-600",
    liveLink: "#", // Placeholder
    codeLink: "#", // Placeholder
},
    {
      name: "Glider 🏅",
      tech: ["Arduino Uno", "MPU6050", "Li-ion Battery", "SG90 Servo"],
      desc: "An autonomous stabilization system for a model glider, using an MPU6050 for real-time stabilisation of our own designed glider.",
      gradient: "from-pink-400 to-rose-600",
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-[#111111]">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[#F0F0F0] rounded-3xl overflow-hidden transition-colors shadow-xs"
            >
              <div className={`h-2 ${project.gradient}`}></div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>
              <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0F0F0F] transition-colors">
                    {project.name}
                  </h3>
                  <div
                    className={`w-3 h-3 rounded-full ${project.gradient} group-hover:scale-150 transition-transform duration-300`}
                  ></div>
                </div>
                {/* Use the specific project description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed min-h-0">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white border border-[#F0F0F0] text-[#5F5F5F] px-3 py-1 rounded-full text-xs font-medium transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`/projects/${createSlug(project.name)}`} // Dynamic slug generation
                    className="flex items-center gap-1 text-[#111111] hover:underline text-sm font-semibold group/link"
                  >
                    View Details
                    <span className="transform group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>

                  {/* Existing Links, updated to use project data */}
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 text-[#111111] hover:underline text-sm font-semibold group/link ${
                        project.liveLink === "#"
                          ? "opacity-50 pointer-events-none"
                          : ""
                      }`}
                    >
                      Live Demo
                      <span className="transform group-hover/link:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  )}
                  {project.codeLink !== "#" && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm font-semibold group/link ${
                      project.codeLink === "#"
                        ? "opacity-50 pointer-events-none"
                        : ""
                    }`}
                  >
                    Source Code
                    <span className="transform group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                  )}
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
