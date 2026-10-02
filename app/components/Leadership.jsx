"use client";

export default function Leadership() {
  const leadership = [
    {
      title: "Core Tech Team",
      organization: "Genesis Club (DSCE)",
      duration: "2025 – Present",
      description:
        "Managed tech infrastructure and judging for Hackmanv9 (50+ teams, 200+ participants). Coordinated Coding Relay at Catalysis 4.0, the department tech fest.",
      tech: ["Leadership", "Team Management", "Event Coordination"],
      color: "from-violet-400 to-purple-500"
    },
    {
      title: "EMCEE Member",
      organization: "PsychMic Club",
      duration: "2025 – Present",
      description: "Member of EMCEE team for PsychMic Club events and activities.",
      tech: ["Public Speaking", "Event Management"],
      color: "from-indigo-400 to-blue-500"
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Leadership & Activities
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Leadership roles and extracurricular involvement
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200/50 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className="relative">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                    {item.title}
                  </h3>
                  <p className={`text-transparent bg-clip-text bg-gradient-to-r ${item.color} font-semibold text-sm`}>
                    {item.organization}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{item.duration}</p>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, i) => (
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
