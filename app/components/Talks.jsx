import Image from "next/image";
import Link from "next/link";

const TALKS_AND_ACTIVITIES = [
  {
    title: "Hackathon Technical Defense & Evaluation",
    organization: "Altaria v1.0 & Genesis Club, DSCE",
    year: "2025 – 2026",
    desc: "Defending system architecture, codebases, and edge ML pipelines before hackathon evaluation panels and industry judges. Managing judging platforms and local server infrastructure.",
    image: "/images/hack_explain.jpeg",
    objectPosition: "object-[center_20%]",
    caption: "Live architecture explanation and technical defense before evaluation judges",
    note: "live defense & architecture",
  },
  {
    title: "Technical Presentations & Dais Addresses",
    organization: "ACM Chapter & Department Technical Sessions",
    year: "2025 – Present",
    desc: "Presenting technical research on multi-model edge computer vision, runtime LLM telemetry, and edge robotics across student symposiums and technical gatherings.",
    image: "/images/dias_acm.jpeg",
    objectPosition: "object-[center_15%]",
    caption: "Technical address on the dais at DSCE technical sessions",
    note: "dais presentation & tech talks",
  },
  {
    title: "Keynote EMCEE & Formal Moderation",
    organization: "PsychMic Club & Department Assemblies, DSCE",
    year: "2025 – Present",
    desc: "Stage hosting, keynote speaker introductions, and formal event moderation across institutional assemblies, flagship guest lectures, and student convocations.",
    image: "/images/stage_formal.jpeg",
    objectPosition: "object-[center_15%]",
    caption: "Keynote EMCEE and formal stage moderation at institutional assemblies",
    note: "formal stage hosting & moderation",
  },
];

const HONORS = [
  {
    title: "ACM India Summer School in Edge AI & Robotics",
    distinction: "Selected (Top 100 students nationwide)",
    host: "Indian Institute of Science (IISc), Bangalore",
    focus: "Edge intelligence, autonomous robotics, and constrained ML",
    year: "2026",
  },
  {
    title: "Altaria v1.0 24-Hour Hackathon",
    distinction: "1st Place Winner",
    host: "Dayananda Sagar College of Engineering",
    focus: "Cyber & AI Track — Shatru runtime LLM backdoor detection",
    year: "2026",
  },
  {
    title: "Smart India Hackathon (SIH 2025)",
    distinction: "Selected / Internal Round Qualifier",
    host: "Ministry of Education & DSCE",
    focus: "IoT & Computer Vision Early-Warning Platform for Mine Safety (Gani)",
    year: "2025",
  },
  {
    title: "MakerBlitz Engineering Hackathon",
    distinction: "Appreciation Prize",
    host: "MakerBlitz Hackathon",
    focus: "Hardware-stabilized autonomous glider with live 6-axis IMU surfaces",
    year: "2024",
  },
  {
    title: "Central Board of Secondary Education (CBSE)",
    distinction: "School & Department Topper",
    host: "National Examinations",
    focus: "98.2% in Grade 10 (Topper) · 95.2% in Grade 12 IP (Topper)",
    year: "Academic",
  },
];

export default function Talks() {
  return (
    <section id="talks" className="border-t border-neutral-200/80 py-20 bg-white">
      <span id="hackathons" className="block -mt-20 pt-20" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-neutral-200 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              Talks & Leadership
            </h2>
            <span className="font-hand text-2xl text-blue-600">
              speaking, mentorship and community
            </span>
          </div>
          <span className="text-sm font-mono text-neutral-400">Leadership</span>
        </div>

        {/* Talks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {TALKS_AND_ACTIVITIES.map((item, idx) => (
            <div
              key={idx}
              className="border border-neutral-200 rounded-2xl bg-[#FAFAF9] p-6 flex flex-col justify-between shadow-xs hover:border-neutral-300 transition-all"
            >
              <div>
                {item.image ? (
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 border border-neutral-200 bg-neutral-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className={`object-cover ${item.objectPosition || "object-center"}`}
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-[4/3] rounded-xl mb-5 border border-neutral-200/80 bg-white p-4 flex flex-col justify-between">
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      Event Session
                    </span>
                    <span className="text-sm font-medium text-neutral-700">
                      {item.organization}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-mono text-neutral-500 font-medium">
                    {item.year}
                  </span>
                  <span className="font-hand text-lg text-blue-600">
                    {item.note}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-neutral-900 mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-blue-700 mb-3">
                  {item.organization}
                </p>
                <p className="text-base text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <p className="text-xs text-neutral-400 mt-5 pt-3 border-t border-neutral-200">
                {item.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Honors Editorial Ledger (Authentic, Non-AI) */}
        <div className="pt-10 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                Competitive Honors & Distinctions
              </h3>
              <p className="text-sm text-neutral-500 mt-1">
                Selected fellowships, hackathon podiums, and academic recognitions
              </p>
            </div>
            <span className="font-hand text-xl text-blue-600">
              merit & competitive record
            </span>
          </div>

          {/* Altaria v1.0 1st Place Winning Team Spotlight */}
          <div className="mb-8 border border-neutral-200 rounded-2xl bg-[#FAFAF9] overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-4 sm:p-6 hover:border-neutral-300 transition-all">
            <div className="md:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200/80 bg-neutral-100 shadow-2xs">
              <Image
                src="/images/shatru.jpeg"
                alt="1st Place Winning Team at Altaria v1.0 Hackathon for Shatru"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-center"
              />
            </div>
            <div className="md:col-span-7 space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200/70 rounded-full px-3 py-1">
                  1st Place Winner · Altaria v1.0
                </span>
                <span className="font-hand text-lg text-blue-600">
                  Cyber & AI Track Podium
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                Shatru — Runtime LLM Trojan Defense
              </h4>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Podium finish at Dayananda Sagar College of Engineering in a 24-hour sprint. Engineered black-box Shannon Entropy profiling across Phi-3-mini transformer layers to detect Trojan backdoor activations.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/projects/shatru"
                  className="inline-flex items-center text-sm font-semibold text-neutral-900 hover:text-blue-600 transition-colors"
                >
                  Read Full Project Case Study →
                </Link>
                <a
                  href="https://github.com/anshu2k24/shatru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          <div className="border border-neutral-200 rounded-2xl bg-white overflow-hidden shadow-xs divide-y divide-neutral-200">
            {HONORS.map((honor, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 hover:bg-neutral-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-bold text-base sm:text-lg text-neutral-900">
                      {honor.title}
                    </span>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200/70 rounded-md px-2.5 py-0.5">
                      {honor.distinction}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600">
                    <span className="font-medium text-neutral-800">{honor.host}</span> · {honor.focus}
                  </p>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="font-mono text-sm font-semibold text-neutral-500">
                    {honor.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
