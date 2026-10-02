export default function About() {
  return (
    <section id="about" className="border-t border-neutral-200/80 py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-neutral-200 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              About
            </h2>
            <span className="font-hand text-xl text-blue-600">
              who I am and how I build
            </span>
          </div>
          <span className="text-xs font-mono text-neutral-400">Background</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Photo Slot & Academic Record */}
          <div className="lg:col-span-4 space-y-6">
            {/* Visual Frame Slot for Portrait / Lab */}
            <div className="border-2 border-dashed border-neutral-300 rounded-2xl bg-neutral-50 p-6 text-center min-h-[240px] flex flex-col items-center justify-center">
              <div className="text-xs font-medium text-neutral-700 mb-1">
                Photo Slot: Portrait or Workspace
              </div>
              <div className="text-[11px] text-neutral-500">
                Recommended aspect ratio: 4:5 or 1:1
              </div>
              <span className="font-hand text-base text-blue-600 mt-2">
                drop photo here
              </span>
            </div>

            {/* Academic Track Record */}
            <div className="border border-neutral-200 rounded-2xl bg-white p-5 space-y-3 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
                Academic Background
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-600">B.E. Information Science</span>
                  <span className="font-semibold text-neutral-900">9.8 GPA</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-600">CBSE Grade 10</span>
                  <span className="font-semibold text-neutral-900">98.2% (Topper)</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-neutral-600">Grade 12 IP</span>
                  <span className="font-semibold text-neutral-900">95.2% (Topper)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Technical Competencies */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
              <p className="text-xl sm:text-2xl text-neutral-900 font-medium leading-snug">
                I focus on the intersection of machine learning research and deployable, production software.
              </p>

              <p>
                Currently pursuing a Bachelor of Engineering in Information Science and
                Engineering at Dayananda Sagar College of Engineering in Bengaluru.
                Rather than training models in isolation, I build end-to-end pipelines that operate
                under strict compute, bandwidth, and security constraints.
              </p>

              <p className="text-sm sm:text-base text-neutral-600">
                Whether sustaining 22 to 25 FPS video processing on a single laptop GPU for campus
                surveillance, or detecting Trojan activations across transformer layers during runtime
                inference without access to model weights, I care about systems that survive contact with real-world environments.
              </p>
            </div>

            {/* Categorized Technical Tooling (Clean Soft Cards) */}
            <div className="border-t border-neutral-200 pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                  Core Technologies
                </span>
                <span className="font-hand text-lg text-blue-600">
                  what I build with
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-neutral-200 rounded-xl bg-neutral-50/60 p-4">
                  <span className="text-xs font-medium text-neutral-500 block mb-1">
                    Languages
                  </span>
                  <p className="text-sm font-semibold text-neutral-900">
                    Python, JavaScript, C++, SQL
                  </p>
                </div>

                <div className="border border-neutral-200 rounded-xl bg-neutral-50/60 p-4">
                  <span className="text-xs font-medium text-neutral-500 block mb-1">
                    AI & Computer Vision
                  </span>
                  <p className="text-sm font-semibold text-neutral-900">
                    YOLOv8, Transformers, RAG, OpenCV, PyTorch
                  </p>
                </div>

                <div className="border border-neutral-200 rounded-xl bg-neutral-50/60 p-4">
                  <span className="text-xs font-medium text-neutral-500 block mb-1">
                    Systems & Edge
                  </span>
                  <p className="text-sm font-semibold text-neutral-900">
                    Next.js, Supabase, Docker, ESP32, RTSP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
