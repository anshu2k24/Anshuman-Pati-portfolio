import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-neutral-200/80 py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-neutral-200 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Experience
            </h2>
            <span className="font-hand text-xl text-blue-600">
              roles and research work
            </span>
          </div>
          <span className="text-xs font-mono text-neutral-400">Experience</span>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-2xl bg-white p-6 sm:p-8 shadow-xs hover:border-neutral-300 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-neutral-100 pb-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-blue-700 mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                  <span className="px-2.5 py-1 bg-neutral-100 rounded-md font-medium text-neutral-800">
                    {exp.duration}
                  </span>
                  <span>·</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6 text-sm text-neutral-700 leading-relaxed">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-neutral-400 select-none">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-100">
                {exp.tech.map((t) => (
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
