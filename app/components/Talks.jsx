import Image from "next/image";

const TALKS_AND_ACTIVITIES = [
  {
    title: "Workshop Mentorship & Hackman v9 Infrastructure",
    organization: "Genesis Club, DSCE",
    year: "2025 – Present",
    desc: "Managed judging platforms and local server infrastructure for Hackman v9 (50+ teams, 200+ participants). Coordinated Coding Relay technical track at Catalysis 4.0 departmental fest.",
    image: "/images/banner.webp",
    caption: "Technical session and hackathon prep, Dayananda Sagar College of Engineering (2025)",
    note: "50+ teams, live judging infrastructure",
  },
  {
    title: "Drishti Scene Collector Presentation",
    organization: "IEEE TEMSCON-ASPAC",
    year: "2026",
    desc: "Presented primary research on multi-model YOLOv8 edge inference and RTSP anomaly detection heuristics.",
    image: null,
    caption: "Conference research presentation, IEEE TEMSCON-ASPAC (2026)",
    note: "primary author presentation",
  },
  {
    title: "EMCEE & Event Direction",
    organization: "PsychMic Club",
    year: "2025 – Present",
    desc: "Hosting and technical event moderation across department assemblies and student competitions.",
    image: null,
    caption: "Campus events and student assemblies (2025)",
    note: "stage moderation and hosting",
  },
];

const HONORS = [
  {
    award: "Selected, ACM India Summer School 2026",
    context: "Edge AI and Robotics, IISc Bangalore (100 students nationwide)",
    year: "2026",
  },
  {
    award: "1st Place Winner, Altaria v1.0",
    context: "Cyber and AI Track, 24-hour Hackathon, DSCE (Shatru LLM Trojan detection)",
    year: "2026",
  },
  {
    award: "National Qualifier, Smart India Hackathon 2025",
    context: "Open-pit mine safety monitoring platform (Gani)",
    year: "2025",
  },
  {
    award: "Appreciation Prize, MakerBlitz Hackathon",
    context: "Hardware-stabilized glider using MPU6050 and servo surfaces",
    year: "2024",
  },
  {
    award: "School Topper, CBSE Grade 10 & IP Topper Grade 12",
    context: "98.2% in Grade 10; 95.2% in Grade 12 Informatics Practices",
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
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Talks & Leadership
            </h2>
            <span className="font-hand text-xl text-blue-600">
              speaking, mentorship and community
            </span>
          </div>
          <span className="text-xs font-mono text-neutral-400">Talks</span>
        </div>

        {/* Talks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TALKS_AND_ACTIVITIES.map((item, idx) => (
            <div
              key={idx}
              className="border border-neutral-200 rounded-2xl bg-[#FAFAF9] p-5 flex flex-col justify-between shadow-xs hover:border-neutral-300 transition-all"
            >
              <div>
                {/* Photo or Empty Slot Frame */}
                {item.image ? (
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-neutral-200 bg-neutral-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-[center_28%]"
                    />
                  </div>
                ) : (
                  <div className="relative w-full aspect-[4/3] border-2 border-dashed border-neutral-300 rounded-xl mb-4 flex flex-col items-center justify-center bg-white p-4 text-center">
                    <span className="text-xs font-medium text-neutral-700">
                      Photo Slot: 4:3
                    </span>
                    <span className="text-[11px] text-neutral-500">
                      Upload stage or event photo
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-neutral-500">
                    {item.year}
                  </span>
                  <span className="font-hand text-base text-blue-600">
                    {item.note}
                  </span>
                </div>

                <h3 className="font-semibold text-base text-neutral-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-blue-700 mb-3">
                  {item.organization}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <p className="text-xs text-neutral-400 mt-4 pt-3 border-t border-neutral-200">
                {item.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Honors Sub-section */}
        <div className="pt-8 border-t border-neutral-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-semibold text-neutral-700">
              Competitive Honors and Recognition
            </h3>
            <span className="font-hand text-base text-blue-600">
              awards and selections
            </span>
          </div>

          <div className="divide-y divide-neutral-200 border-t border-neutral-200">
            {HONORS.map((honor, i) => (
              <div
                key={i}
                className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-sm hover:bg-neutral-50/80 px-2 rounded-lg transition-colors"
              >
                <div>
                  <span className="font-semibold text-neutral-900 mr-2">
                    {honor.award}
                  </span>
                  <span className="text-neutral-600">: {honor.context}</span>
                </div>
                <span className="font-mono text-xs text-blue-700 font-medium shrink-0">
                  {honor.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
