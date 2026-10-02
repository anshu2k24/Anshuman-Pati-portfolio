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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-[#111111]">
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
              className="group relative bg-white p-0 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-200/50 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#111111]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 transition-all">
                      {pub.title}
                    </h3>
                    <div className="space-y-1 mb-4">
                      <p className="text-lg font-semibold text-[#111111]">
                        {pub.venue}
                      </p>
                      <p className="text-sm text-gray-600">
                        {pub.role} • {pub.year}
                      </p>
                    </div>
                  </div>
                  <div className="border border-[#F0F0F0] bg-white text-[#0F0F0F] px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-xs">
                    {pub.status}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{pub.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="border border-[#F0F0F0] bg-white text-[#5F5F5F] px-3 py-1 rounded-full text-xs font-medium transition-colors"
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
