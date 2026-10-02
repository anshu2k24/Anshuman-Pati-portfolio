"use client";

export default function Hackathons() {
  const hackathons = [
    {
      event: "CodeUtsava 9.0 NIT Raipur",
      project: "JAR - own everything you generate using AI",
      achievement: "Certificate of Participation",
      tech: ["National Level", "Tech Event", "Problem Solving", "Team Project"],
      certificate: false,
      color: "from-red-400 to-orange-500",
      certificateLink: "#",
      githubLink: "#",
      demoLink: "https://brahmacoders.vercel.app/"
    },
    {
      event: "Hackman V8",
      project: "Hackman V8 Volunteer",
      achievement: "",
      tech: ["Volunteer", "Tech Event", "Management", "Organising"],
      certificate: false,
      color: "from-green-400 to-violet-500",
      certificateLink: "#",
      githubLink: "#",
      demoLink: "#"
    },
    {
      event: "Recursive V2",
      project: "VIP Chakra - VIP threat detection system",
      achievement: "Certificate of Participation",
      tech: ["National Level", "Tech Event", "Problem Solving", "Team Project"],
      certificate: false,
      color: "from-yellow-400 to-orange-500",
      certificateLink: "#",
      githubLink: "#",
      demoLink: "#"
    },
    {
      event: "CypherQuest Hackathon",
      project: "EcoAi",
      achievement: "Certificate of Participation",
      tech: ["Tech Event"],
      certificate: true,
      color: "from-yellow-400 to-orange-500",
      certificateLink: "https://drive.google.com/file/d/1lqBhTO7rpfClabJrgnhJabDsLhljGzwq/view?usp=sharing",
      githubLink: "https://github.com/anshu2k24/enhanced-prompt",
      demoLink: "#"
    },
    {
      event: "MakerBlitz Hackathon",
      project: "Glider",
      achievement: "🥇 Appreciation Prize",
      tech: ["Hardware Event"],
      certificate: true,
      color: "from-blue-400 to-cyan-500",
      certificateLink: "https://drive.google.com/file/d/1fjOZATViAGXAf5Mi6BTpRist7EWQcfq-/view?usp=sharing",
      githubLink: "#",
      demoLink: "#"
    },
    {
      event: "ByteXync Hackathon",
      project: "UniTech",
      achievement: "Certificate of Participation",
      tech: ["Tech Event"],
      certificate: true,
      color: "from-purple-400 to-pink-500",
      certificateLink: "https://drive.google.com/file/d/14vdYZxKt7c3HrT9T0TZywsGTi979__Lc/view?usp=sharing",
      githubLink: "https://github.com/anshu2k24/ByteXync-Hunter_Squad.git",
      demoLink: "#"
    },
    {
      event: "Confluence Hackathon",
      project: "StudyAI",
      achievement: "Certificate of Participation",
      tech: ["Tech Event"],
      certificate: true,
      color: "from-green-400 to-teal-500",
      certificateLink: "https://drive.google.com/file/d/1JAG4AEPpChdb7DnOo1HYBk2cjJOPH0FW/view?usp=drive_link",
      githubLink: "#",
      demoLink: "#"
    },
    {
      event: "TechTrek",
      project: "Roomigo - Pg Accommodation Finder",
      achievement: "Certificate of Participation",
      tech: ["Tech Event"],
      certificate: true,
      color: "from-indigo-400 to-blue-500",
      certificateLink: "https://drive.google.com/file/d/1HcWQVYyG1BU_TaUN-6VQgH-XpEsI9jtH/view?usp=sharing",
      githubLink: "#",
      demoLink: "#"
    },
    {
      event: "Smart India Hackathon 2025",
      project: "Internal Round Selection",
      achievement: "🎯 Qualified for Nationals",
      tech: ["Problem Solving", "Team Project", "Gov of India Hackathon"],
      certificate: false,
      color: "from-orange-400 to-red-500",
      certificateLink: "https://drive.google.com/file/d/1lqBhTO7rpfClabJrgnhJabDsLhljGzwq/view?usp=sharing",
      githubLink: "https://github.com/anshu2k24/AntarAtmaa",
      demoLink: "http://ganiai.vercel.app/"
    },
    {
      event: "Genesis Club - DSCE",
      project: "Tech Team Member",
      achievement: "🤵🏻Contributor",
      tech: ["Leadership", "Teamwork", "College Club"],
      certificate: false,
      color: "from-violet-400 to-purple-500",
      certificateLink: "#",
      githubLink: "#",
      demoLink: "https://hackman.dsce.in/"
    },

  ];

  return (
    <section
      id="hackathons"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 hidden"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 hidden"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-[#111111]">
              Hackathons & Competitions
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Projects and achievements from various hackathons and coding
            competitions
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <div
              key={index}
              className="group relative bg-white p-0 rounded-3xl border border-[#F0F0F0] hover:border-[#EDEDED] shadow-xs transition-colors overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${hackathon.color}`}
              ></div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${hackathon.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>
              <div className="relative p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-gray-900 transition-all">
                      {hackathon.project}
                    </h3>
                    <p className="text-[#111111] font-semibold text-sm">
                      {hackathon.event}
                    </p>
                  </div>
                  {hackathon.certificate && (
                    <div className="border border-[#F0F0F0] bg-white text-[#0F0F0F] px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-xs">
                      📜 Certified
                    </div>
                  )}
                </div>
                <div className="text-2xl mb-3 font-semibold text-gray-800">
                  {hackathon.achievement}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {hackathon.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="border border-[#F0F0F0] bg-white text-[#5F5F5F] px-3 py-1 rounded-full text-xs font-medium transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  {hackathon.githubLink !== "#" && (
                    <a
                      href={hackathon.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#111111] hover:underline font-semibold group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7FAFBF] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
                    >
                      View Project
                      <span className="transform group-hover/link:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  )}
                  {hackathon.certificate && hackathon.certificateLink !== "#" && (
                    <a
                      href={hackathon.certificateLink}
                      className="flex items-center gap-1 text-[#111111] hover:underline font-semibold group/link"
                    >
                      View Certificate
                      <span className="transform group-hover/link:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  )}
                  {hackathon.demoLink !== "#" && (
                    <a
                      href={hackathon.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#111111] hover:underline font-semibold group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7FAFBF] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
                    >
                      Live Demo
                      <span className="transform group-hover/link:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
