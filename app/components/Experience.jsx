import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-neutral-200/80 py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-neutral-200 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              Experience
            </h2>
            <span className="font-hand text-2xl text-blue-600">
              roles and research work
            </span>
          </div>
          <span className="text-sm font-mono text-neutral-400">Experience</span>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-2xl bg-white p-6 sm:p-8 shadow-xs hover:border-neutral-300 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-neutral-100 pb-5 mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                    {exp.role}
                  </h3>
                  <p className="text-base font-semibold text-blue-700 mt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-sm font-mono text-neutral-600">
                  <span className="px-3 py-1 bg-neutral-100 rounded-lg font-medium text-neutral-800">
                    {exp.duration}
                  </span>
                  {exp.type && (
                    <span className="text-xs uppercase tracking-wider text-neutral-500 font-sans font-medium bg-neutral-50 border border-neutral-200 rounded-md px-2 py-0.5">
                      {exp.type}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-6 text-base sm:text-lg text-neutral-700 leading-relaxed">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-neutral-400 select-none mt-1 text-sm">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-100">
                {exp.tech.map((t) => (
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
