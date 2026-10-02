import Link from "next/link";

const FEATURED_PROJECTS = [
  {
    name: "Shatru",
    year: "2026",
    slug: "shatru",
    award: "1st Place, Altaria v1.0 (Cyber & AI Track)",
    tagline: "Runtime Backdoor Detection Engine for LLMs",
    desc: "A black-box runtime backdoor detection engine for large language models built in a 24-hour sprint. Shatru monitors layerwise Shannon Entropy distributions across layers 6 to 18 in Phi-3-mini to detect Trojan activation spikes without access to model weights or pre-training datasets.",
    stack: ["Python", "Phi-3-mini", "Shannon Entropy", "PyTorch", "Transformers"],
    note: "24hr hackathon sprint · 1st place",
    codeLink: "https://github.com/anshu2k24/shatru",
    isAnchor: false,
  },
  {
    name: "Gani",
    year: "2025",
    slug: "gani",
    award: "Selected, Smart India Hackathon 2025",
    tagline: "IoT & Computer Vision Early-Warning Platform for Mine Safety",
    desc: "Predicts and detects rockfalls in open-pit mines by fusing live vibration, tilt, and seismic telemetry from ESP32 microcontroller arrays with YOLOv8 visual detection into a Next.js multi-role dashboard with severity-tiered alerts.",
    stack: ["YOLOv8", "ESP32", "Next.js", "Python", "OpenCV", "IoT"],
    note: "hardware & CV sensor fusion",
    codeLink: "https://github.com/anshu2k24/gani",
    isAnchor: false,
  },
  {
    name: "Drishti Scene Collector",
    year: "2026",
    slug: "writing",
    award: "IEEE TEMSCON-ASPAC 2026 (Forthcoming)",
    tagline: "Autonomous Real-Time AI Surveillance System for Campus Safety",
    desc: "Autonomous computer vision surveillance engine processing live campus RTSP feeds to detect medical collapses, falls, fights, and crowd formation. Multi-model YOLOv8 pipeline sustaining 22 to 25 FPS on a laptop RTX 3050 GPU with Supabase forensic logging.",
    stack: ["YOLOv8", "RTSP", "Computer Vision", "Supabase", "Python"],
    note: "primary author · forthcoming IEEE research",
    codeLink: "#",
    isAnchor: true,
  },
];

const OTHER_PROJECTS = [
  {
    name: "EcoAi",
    year: "2024",
    context: "CypherQuest Hackathon",
    desc: "Prompt efficiency optimization tool designed to reduce token consumption and carbon footprint in conversational AI models.",
    stack: ["Next.js", "Prompt Optimization", "LLM APIs"],
    codeLink: "https://github.com/anshu2k24/enhanced-prompt",
  },
  {
    name: "Rock, Paper, and Scissors",
    year: "2024",
    context: "Computer Vision",
    desc: "Real-time hand gesture recognition system built with YOLOv8 and OpenCV, fine-tuned on custom augmented gesture datasets.",
    stack: ["YOLOv8", "OpenCV", "PyTorch", "Python"],
    codeLink: "https://github.com/anshu2k24/rock-paper-scissors",
  },
  {
    name: "UniTech",
    year: "2024",
    context: "ByteXync Hackathon",
    desc: "Campus collaboration and event directory platform connecting students for hackathons, workshops, and inter-college contests.",
    stack: ["JavaScript", "HTML5", "CSS3", "Node.js"],
    codeLink: "https://github.com/anshu2k24/ByteXync-Hunter_Squad.git",
  },
  {
    name: "Password Manager",
    year: "2024",
    context: "Security & Crypto",
    desc: "Desktop credential management tool utilizing Fernet symmetric encryption derived via PBKDF2HMAC with Google Gemini integration.",
    stack: ["Python", "Cryptography", "Pandas"],
    codeLink: "https://github.com/anshu2k24/Password-Manager",
  },
  {
    name: "Glider",
    year: "2024",
    context: "Appreciation Prize, MakerBlitz",
    desc: "Autonomous stabilization system for a physical model glider, utilizing an MPU6050 6-axis IMU for real-time pitch and roll correction.",
    stack: ["Arduino Uno", "MPU6050", "SG90 Servo"],
    codeLink: "#",
  },
  {
    name: "NeroBot",
    year: "2024",
    context: "Marine Robotics",
    desc: "Jellyfish-inspired underwater robot designed for marine plastic pollution detection and grasping with computer vision inference.",
    stack: ["YOLO", "OpenCV", "Arduino Uno"],
    codeLink: "#",
  },
  {
    name: "PCFR",
    year: "2024",
    context: "IoT Automation",
    desc: "Automated weather protection IoT mechanism that retracts outdoor clothes-drying racks under shelter upon rain detection.",
    stack: ["Arduino Uno", "Rain Sensor", "SG90 Servo"],
    codeLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="work" className="border-t border-neutral-200/80 py-20 bg-[#FAFAF9]">
      <span id="projects" className="block -mt-20 pt-20" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-neutral-200 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              Featured Systems
            </h2>
            <span className="font-hand text-2xl text-blue-600">
              flagship works and prototypes
            </span>
          </div>
          <span className="text-sm font-mono text-neutral-400">Work</span>
        </div>

        {/* Featured Projects Cards */}
        <div className="space-y-8 mb-20">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.name}
              className="border border-neutral-200 rounded-2xl bg-white p-7 sm:p-9 shadow-xs hover:border-neutral-300 transition-all space-y-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-mono text-neutral-500 font-medium">
                    {project.year}
                  </span>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200/70 rounded-full px-3 py-1">
                    {project.award}
                  </span>
                </div>
                <span className="font-hand text-xl text-blue-600">
                  {project.note}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-2">
                  {project.name}
                </h3>

                <p className="text-base font-semibold text-neutral-600 leading-snug">
                  {project.tagline}
                </p>
              </div>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-4xl">
                {project.desc}
              </p>

              {/* Stack Badges (Soft Pills) */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm font-medium bg-neutral-100 text-neutral-700 rounded-lg px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-neutral-100">
                {project.isAnchor ? (
                  <a
                    href={`#${project.slug}`}
                    className="inline-flex items-center text-sm sm:text-base font-medium bg-neutral-900 text-white px-6 py-2.5 rounded-xl hover:bg-neutral-800 transition-all shadow-xs"
                  >
                    Read Research Details →
                  </a>
                ) : (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-sm sm:text-base font-medium bg-neutral-900 text-white px-6 py-2.5 rounded-xl hover:bg-neutral-800 transition-all shadow-xs"
                  >
                    Project Case Study →
                  </Link>
                )}

                {project.codeLink !== "#" && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm sm:text-base font-medium bg-white text-neutral-800 border border-neutral-300 px-5 py-2.5 rounded-xl hover:border-neutral-900 hover:text-neutral-900 transition-all shadow-xs"
                  >
                    GitHub Repository
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Systems & Archive (Refined, Non-AI Directory) */}
        <div className="border-t border-neutral-200 pt-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                Additional Systems & Technical Archive
              </h3>
              <p className="text-sm text-neutral-500 mt-1">
                Exploratory systems, hackathon builds, and embedded prototypes
              </p>
            </div>
            <span className="text-sm font-mono text-neutral-400 font-medium">
              {OTHER_PROJECTS.length} Systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {OTHER_PROJECTS.map((project) => (
              <div
                key={project.name}
                className="border border-neutral-200 rounded-xl bg-white p-5 flex flex-col justify-between hover:border-neutral-300 transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-sm font-bold text-neutral-900">
                      {project.name}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {project.year}
                    </span>
                  </div>

                  {project.context && (
                    <span className="inline-block text-xs font-medium text-neutral-500 bg-neutral-100 rounded-md px-2 py-0.5 mb-2.5">
                      {project.context}
                    </span>
                  )}

                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {project.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3 pt-3 border-t border-neutral-100 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium bg-neutral-50 text-neutral-600 rounded px-2 py-0.5 border border-neutral-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.codeLink !== "#" && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-neutral-900 hover:text-blue-700 underline underline-offset-4 shrink-0 transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
