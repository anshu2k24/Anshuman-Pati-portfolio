export default function Publications() {
  const publications = [
    {
      title: "Drishti Scene Collector: Edge-Deployed Computer Vision Architecture for Campus Anomaly Detection",
      venue: "IEEE TEMSCON-ASPAC 2026",
      role: "Primary Author",
      year: "2026",
      status: "Presented (Proceedings Forthcoming)",
      desc: "Peer-reviewed research paper presenting an edge-deployed computer vision architecture for autonomous campus safety monitoring. The work formalizes mathematically-defined heuristic models for anomalous human behavior detection (syncope/medical collapse, violent altercations, irregular crowd gathering) and evaluates multi-model YOLOv8 inference latency across live multi-camera RTSP feeds running on constrained local compute.",
      tech: ["YOLOv8", "Edge Inference", "Heuristic Modeling", "RTSP Streaming", "Supabase", "Computer Vision"],
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
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              Research & Publications
            </h2>
            <span className="font-hand text-2xl text-blue-600">
              peer-reviewed papers & proceedings
            </span>
          </div>
          <span className="text-sm font-mono text-neutral-400">Research</span>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-2xl bg-white p-6 sm:p-9 shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-sm font-mono text-neutral-500 font-medium">
                    {pub.year}
                  </span>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200/70 rounded-full px-3 py-1">
                    {pub.status} · {pub.role}
                  </span>
                </div>
                <span className="font-hand text-xl text-blue-600">
                  {pub.note}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2 tracking-tight">
                {pub.title}
              </h3>

              <p className="text-base font-semibold text-blue-700 mb-4">
                Presented at {pub.venue}
              </p>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-6 max-w-3xl">
                {pub.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                {pub.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs sm:text-sm font-medium bg-neutral-100 text-neutral-700 rounded-lg px-3 py-1"
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
