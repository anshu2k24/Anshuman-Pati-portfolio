export default function Publications() {
  const publications = [
    {
      title: "Drishti Scene Collector: Real-time AI Surveillance for Anomaly Detection",
      venue: "IEEE TEMSCON-ASPAC 2026",
      role: "Primary Author",
      year: "2026",
      status: "Published",
      desc: "Real-time AI surveillance system running live on campus RTSP CCTV feeds, detecting medical collapses, falls, fights, crowd formation, and unauthorised vehicle entry. Architected multi-model YOLOv8 pipeline with mathematically-defined heuristics per anomaly class, sustaining 22 to 25 FPS on an NVIDIA RTX 3050 (6GB).",
      tech: ["YOLOv8", "Computer Vision", "Anomaly Detection", "RTSP", "Edge Inference", "Supabase"],
      note: "peer-reviewed primary research",
    },
  ];

  return (
    <section id="writing" className="border-t border-neutral-200/80 py-20 bg-[#FAFAF9]">
      <span id="publications" className="block -mt-20 pt-20" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-neutral-200 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Research & Publications
            </h2>
            <span className="font-hand text-xl text-blue-600">
              peer-reviewed papers
            </span>
          </div>
          <span className="text-xs font-mono text-neutral-400">Research</span>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-2xl bg-white p-6 sm:p-8 shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono text-neutral-500">
                    {pub.year}
                  </span>
                  <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-0.5">
                    {pub.status}: {pub.role}
                  </span>
                </div>
                <span className="font-hand text-lg text-blue-600">
                  {pub.note}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2 tracking-tight">
                {pub.title}
              </h3>

              <p className="text-sm font-semibold text-blue-700 mb-4">
                Presented at {pub.venue}
              </p>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 max-w-3xl">
                {pub.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                {pub.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium bg-neutral-100 text-neutral-700 rounded-md px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
