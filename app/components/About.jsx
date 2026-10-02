import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="border-t border-neutral-200/80 py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-neutral-200 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              About
            </h2>
            <span className="font-hand text-2xl text-blue-600">
              who I am and how I build
            </span>
          </div>
          <span className="text-sm font-mono text-neutral-400">Background</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Authentic Portrait & Academic Record */}
          <div className="lg:col-span-4 space-y-6">
            {/* Portrait Frame */}
            <div className="space-y-2">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-200/80 shadow-md bg-neutral-100">
                <Image
                  src="/images/dias_formal.jpeg"
                  alt="Anshuman Pati at Dayananda Sagar Institutions podium"
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover object-[center_15%]"
                  priority
                />
              </div>
              <p className="text-xs text-neutral-500 text-center">
                Dayananda Sagar Institutions · Department Assembly
              </p>
            </div>

            {/* Academic Track Record */}
            <div className="border border-neutral-200 rounded-2xl bg-white p-6 space-y-3.5 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block font-medium">
                Academic Background
              </span>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-600">B.E. Information Science</span>
                  <span className="font-bold text-neutral-900">9.8 GPA</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-600">CBSE Grade 10</span>
                  <span className="font-bold text-neutral-900">98.2% (Topper)</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-neutral-600">Grade 12 IP</span>
                  <span className="font-bold text-neutral-900">95.2% (Topper)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Technical Competencies */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-neutral-700 leading-relaxed">
              <p className="text-2xl sm:text-3xl text-neutral-900 font-medium leading-snug">
                I focus on the intersection of machine learning research and deployable, production software.
              </p>

              <p>
                Currently pursuing a Bachelor of Engineering in Information Science and
                Engineering at Dayananda Sagar College of Engineering in Bengaluru.
                Rather than training models in isolation, I build end-to-end pipelines that operate
                under strict compute, bandwidth, and security constraints.
              </p>

              <p className="text-neutral-600">
                Whether architecting multi-model edge vision networks for campus-wide anomaly detection,
                or analyzing activation divergence across transformer layers during runtime inference without
                access to weights, I care about engineering resilient systems that survive contact with real-world environments.
              </p>
            </div>

            {/* Categorized Technical Tooling (Clean Soft Cards) */}
            <div className="border-t border-neutral-200 pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium">
                  Core Technologies
                </span>
                <span className="font-hand text-xl text-blue-600">
                  what I build with
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-neutral-200 rounded-xl bg-neutral-50/70 p-4.5">
                  <span className="text-xs font-medium text-neutral-500 block mb-1.5">
                    Languages
                  </span>
                  <p className="text-sm font-semibold text-neutral-900 leading-snug">
                    Python, JavaScript, C++, SQL
                  </p>
                </div>

                <div className="border border-neutral-200 rounded-xl bg-neutral-50/70 p-4.5">
                  <span className="text-xs font-medium text-neutral-500 block mb-1.5">
                    AI & Computer Vision
                  </span>
                  <p className="text-sm font-semibold text-neutral-900 leading-snug">
                    YOLOv8, Transformers, RAG, OpenCV, PyTorch
                  </p>
                </div>

                <div className="border border-neutral-200 rounded-xl bg-neutral-50/70 p-4.5">
                  <span className="text-xs font-medium text-neutral-500 block mb-1.5">
                    Systems & Edge
                  </span>
                  <p className="text-sm font-semibold text-neutral-900 leading-snug">
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
