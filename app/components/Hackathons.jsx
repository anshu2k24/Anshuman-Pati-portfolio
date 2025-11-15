"use client";

export default function Hackathons() {
  const hackathons = [
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
      className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
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
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200/50 overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${hackathon.color}`}
              ></div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${hackathon.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                      {hackathon.project}
                    </h3>
                    <p
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${hackathon.color} font-semibold text-sm`}
                    >
                      {hackathon.event}
                    </p>
                  </div>
                  {hackathon.certificate && (
                    <div className="bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
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
                      className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:from-gray-200 hover:to-gray-300 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  {hackathon.githubLink !== "#" && (
                  <a
                    href={hackathon.githubLink}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold group/link"
                  >
                    View Project
                    <span className="transform group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                  )}
                  {hackathon.certificate && hackathon.certificateLink!=="#" && (
                    <a
                      href={hackathon.certificateLink}
                      className="flex items-center gap-1 text-purple-600 hover:text-purple-700 font-semibold group/link"
                    >
                      View Certificate
                      <span className="transform group-hover/link:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  )}
                  {hackathon.demoLink!=="#" && (
                    <a
                      href={hackathon.demoLink}
                      className="flex items-center gap-1 text-red-600 hover:text-red-700 font-semibold group/link"
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
