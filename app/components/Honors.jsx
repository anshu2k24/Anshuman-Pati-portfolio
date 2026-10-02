"use client";

export default function Honors() {
  const honors = [
    {
      title: "ACM India Summer School 2026",
      subtitle: "Edge AI and Robotics, IISc Bangalore",
      achievement: "Selected",
      description: "Among 100 students nationwide selected for ACM India Summer School 2026 at IISc Bangalore.",
      tech: ["Selected", "100 Nationwide"],
      color: "from-blue-400 to-cyan-500",
      badge: "🎓"
    },
    {
      title: "Altaria v1.0",
      subtitle: "24-hour Hackathon, DSCE",
      achievement: "1st Place",
      description: "Won 1st Place in Cyber and AI track at Altaria v1.0, 24-hour hackathon.",
      tech: ["1st Place", "Cyber & AI"],
      color: "from-yellow-400 to-orange-500",
      badge: "🥇"
    },
    {
      title: "Smart India Hackathon 2025",
      subtitle: "Government of India",
      achievement: "Qualified for Nationals",
      description: "Qualified for Nationals in Smart India Hackathon 2025.",
      tech: ["Nationals", "Govt. of India"],
      color: "from-orange-400 to-red-500",
      badge: "🎯"
    },
    {
      title: "MakerBlitz Hackathon",
      subtitle: "Hardware Hackathon",
      achievement: "Appreciation Prize",
      description: "Sole team to integrate live electronics for hardware-stabilised glider balancing.",
      tech: ["Appreciation", "Hardware"],
      color: "from-blue-400 to-cyan-500",
      badge: "🏅"
    },
    {
      title: "CBSE Grade 10",
      subtitle: "School Topper",
      achievement: "98.2%",
      description: "School Topper in CBSE Grade 10 examinations.",
      tech: ["Topper", "Academic"],
      color: "from-green-400 to-emerald-500",
      badge: "📚"
    },
    {
      title: "CBSE Grade 12 (IP)",
      subtitle: "IP Topper",
      achievement: "95.2%",
      description: "IP Topper in CBSE Grade 12 examinations.",
      tech: ["Topper", "Academic"],
      color: "from-purple-400 to-pink-500",
      badge: "📚"
    }
  ];

  return (
    <section id="honors" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Honors & Awards
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Recognition for academic excellence and competitive achievements
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {honors.map((honor, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200/50 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${honor.color}`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${honor.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                      {honor.title}
                    </h3>
                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${honor.color} font-semibold text-sm`}>
                      {honor.subtitle}
                    </p>
                  </div>
                  <div className="text-3xl">{honor.badge}</div>
                </div>
                <div className="text-2xl mb-3 font-bold text-gray-800">{honor.achievement}</div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{honor.description}</p>
                <div className="flex flex-wrap gap-2">
                  {honor.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium hover:from-gray-200 hover:to-gray-300 transition-all"
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
