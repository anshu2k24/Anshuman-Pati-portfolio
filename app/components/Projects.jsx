import Link from "next/link";

const FEATURED_PROJECTS = [
  {
    name: "Shatru",
    year: "2026",
    slug: "shatru",
    award: "1st Place Winner, Altaria v1.0 (Cyber & AI Track)",
    tagline: "Runtime Backdoor Detection Engine for LLMs",
    desc: "A black-box runtime backdoor detection engine for large language models built in 24 hours. Shatru monitors layerwise Shannon Entropy distributions across layers 6 to 18 in Phi-3-mini to detect Trojan activation spikes without access to model weights or pre-training datasets.",
    stack: ["Python", "Phi-3-mini", "Shannon Entropy", "PyTorch"],
    note: "built in 24 hours sprint, 1st place",
    codeLink: "https://github.com/anshu2k24/shatru",
    imageSlot: "Architecture and Entropy Distribution Visual",
  },
  {
    name: "Gani",
    year: "2025",
    slug: "gani",
    award: "Selected, Smart India Hackathon 2025",
    tagline: "IoT & Computer Vision Early-Warning Platform for Mine Safety",
    desc: "Predicts and detects rockfalls in open-pit mines by fusing live vibration, tilt, and seismic telemetry from ESP32 microcontroller arrays with YOLOv8 visual detection into a Next.js multi-role dashboard with severity-tiered alerts.",
    stack: ["YOLOv8", "ESP32", "Next.js", "Python", "OpenCV"],
    note: "hardware and CV sensor fusion",
    codeLink: "https://github.com/anshu2k24/gani",
    imageSlot: "Hardware & Dashboard Preview Visual",
  },
  {
    name: "Drishti Scene Collector",
    year: "2026",
    slug: "writing",
    isAnchor: true,
    award: "Published at IEEE TEMSCON-ASPAC 2026",
    tagline: "Real-time AI Surveillance System for Campus Safety",
    desc: "Autonomous computer vision surveillance engine processing live campus RTSP feeds to detect collapses, falls, fights, and crowd formation. Multi-model YOLOv8 pipeline sustaining 22 to 25 FPS on a laptop RTX 3050 GPU with Supabase forensic logging.",
    stack: ["YOLOv8", "RTSP", "Computer Vision", "Supabase", "Python"],
    note: "primary author, published IEEE research",
    codeLink: "#",
    imageSlot: "25 FPS Video Pipeline Visual",
  },
];

const OTHER_PROJECTS = [
  {
    name: "EcoAi",
    year: "2024",
    slug: "ecoai",
    award: "CypherQuest Hackathon",
    desc: "Prompt efficiency optimization tool designed to reduce token consumption and carbon footprint in conversational AI.",
    stack: "Next.js · Prompt Optimization · AI",
    codeLink: "https://github.com/anshu2k24/enhanced-prompt",
  },
  {
    name: "Rock, Paper, and Scissors",
    year: "2024",
    slug: "rock-paper-and-scissor",
    award: null,
    desc: "Real-time hand gesture recognition system built with YOLOv8 and OpenCV, fine-tuned on Kaggle dataset.",
    stack: "YOLOv8 · OpenCV · PyTorch · Python",
    codeLink: "https://github.com/anshu2k24/rock-paper-scissors",
  },
  {
    name: "UniTech",
    year: "2024",
    slug: "unitech",
    award: "ByteXync Hackathon",
    desc: "Campus collaboration and event directory platform connecting students for hackathons and inter-college contests.",
    stack: "JavaScript · HTML5 · CSS3",
    codeLink: "https://github.com/anshu2k24/ByteXync-Hunter_Squad.git",
  },
  {
    name: "Password Manager",
    year: "2024",
    slug: "password-manager",
    award: null,
    desc: "Desktop credential management tool utilizing Fernet symmetric encryption derived via PBKDF2HMAC with Google Gemini integration.",
    stack: "Python · Cryptography (Fernet) · Pandas",
    codeLink: "https://github.com/anshu2k24/Password-Manager",
  },
  {
    name: "Glider",
    year: "2024",
    slug: "glider",
    award: "Appreciation Prize, MakerBlitz",
    desc: "Autonomous stabilization system for a physical model glider, utilizing an MPU6050 6-axis IMU for pitch/roll correction.",
    stack: "Arduino Uno · MPU6050 · SG90 Servo",
    codeLink: "#",
  },
  {
    name: "NeroBot",
    year: "2024",
    slug: "nerobot",
    award: null,
    desc: "Jellyfish-inspired underwater robot designed for marine plastic pollution detection and grasping with computer vision.",
    stack: "YOLO · OpenCV · Arduino Uno",
    codeLink: "#",
  },
  {
    name: "PCFR",
    year: "2024",
    slug: "pcfr",
    award: null,
    desc: "Automated weather protection IoT mechanism that retracts outdoor clothes-drying racks under shelter upon rain detection.",
    stack: "Arduino Uno · Rain Sensor · SG90 Servo",
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
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Featured Systems
            </h2>
            <span className="font-hand text-xl text-blue-600">
              selected works and prototypes
            </span>
          </div>
          <span className="text-xs font-mono text-neutral-400">Work</span>
        </div>

        {/* Featured Projects Cards with Soft Rounded Corners */}
        <div className="space-y-10 mb-16">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.name}
              className="border border-neutral-200 rounded-2xl bg-white p-6 sm:p-8 shadow-xs hover:border-neutral-300 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Text & Info */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-mono text-neutral-500">
                      {project.year}
                    </span>
                    <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-0.5">
                      {project.award}
                    </span>
                    <span className="font-hand text-lg text-blue-600 ml-auto">
                      {project.note}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                    {project.name}
                  </h3>

                  <p className="text-sm font-medium text-neutral-500">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Stack Badges (Soft Pills) */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-neutral-100 text-neutral-700 rounded-md px-2.5 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Rounded Action Buttons */}
                  <div className="flex items-center gap-3 pt-3">
                    {project.isAnchor ? (
                      <a
                        href={`#${project.slug}`}
                        className="inline-flex items-center text-xs font-medium bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition-all shadow-xs"
                      >
                        Read Research Paper
                      </a>
                    ) : (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center text-xs font-medium bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition-all shadow-xs"
                      >
                        Project Case Study
                      </Link>
                    )}

                    {project.codeLink !== "#" && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-medium bg-white text-neutral-700 border border-neutral-300 px-4 py-2 rounded-lg hover:border-neutral-900 hover:text-neutral-900 transition-all shadow-xs"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Clean Image Preview Slot */}
                <div className="lg:col-span-5">
                  <div className="border-2 border-dashed border-neutral-300 rounded-xl bg-neutral-50 aspect-[16/11] flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-xs font-medium text-neutral-700 mb-1">
                      {project.imageSlot}
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      UI demo, diagram or screenshot slot
                    </div>
                    <span className="font-hand text-base text-blue-600 mt-2">
                      ready for asset
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archive List */}
        <div className="border-t border-neutral-200 pt-8">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-sm font-semibold text-neutral-700">
              Additional Systems & Archive
            </h4>
            <span className="text-xs text-neutral-500 font-mono">
              {OTHER_PROJECTS.length} Systems
            </span>
          </div>

          <div className="divide-y divide-neutral-200 border-t border-neutral-200">
            {OTHER_PROJECTS.map((project) => (
              <div
                key={project.name}
                className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 hover:bg-neutral-50/80 px-2 rounded-lg transition-colors"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-neutral-400 w-12 shrink-0">
                    {project.year}
                  </span>
                  <div>
                    <span className="font-semibold text-sm text-neutral-900 mr-2">
                      {project.name}
                    </span>
                    {project.award && (
                      <span className="text-[11px] bg-neutral-100 text-neutral-600 rounded-sm px-2 py-0.5 mr-2">
                        {project.award}
                      </span>
                    )}
                    <span className="text-xs text-neutral-600">
                      : {project.desc}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0 text-xs font-medium">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-neutral-900 hover:text-blue-600 underline underline-offset-2"
                  >
                    Details
                  </Link>
                  {project.codeLink !== "#" && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 underline underline-offset-2"
                    >
                      GitHub
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
