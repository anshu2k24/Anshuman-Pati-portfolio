"use client";

export default function Publications() {
  const publications = [
    {
      title: "Drishti Scene Collector: Real-time AI Surveillance for Anomaly Detection",
      venue: "IEEE TEMSCON-ASPAC 2026",
      role: "Primary Author",
      year: "2026",
      description:
        "Real-time AI surveillance system running live on campus RTSP CCTV feeds, detecting medical collapses, falls, fights, crowd formation, and unauthorised vehicle entry. Architected multi-model YOLOv8 pipeline with mathematically-defined heuristics, achieving 22-25 FPS on NVIDIA RTX 3050 (6GB).",
      tech: ["YOLOv8", "Computer Vision", "Anomaly Detection", "RTSP", "Real-time Systems"],
      status: "Published"
    }
  ];

  return (
    <section id="publications" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Publications & Research
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Research contributions and peer-reviewed publications
          </p>
        </div>
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-200/50 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-purple-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                      {pub.title}
                    </h3>
                    <div className="space-y-1 mb-4">
                      <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        {pub.venue}
                      </p>
                      <p className="text-sm text-gray-600">
                        {pub.role} • {pub.year}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-sm">
                    {pub.status}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{pub.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.tech.map((tech, i) => (
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
