"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-28 sm:pt-36 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Narrative & Punchy Hook */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.08]">
              Anshuman Pati
            </h1>

            <p className="text-2xl sm:text-3xl font-medium text-neutral-800 leading-snug">
              I build machine learning systems that run under real-world compute and security constraints.
            </p>

            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-xl">
              Focused on edge computer vision, runtime LLM security, and deployable systems architecture.
              Studying Information Science and Engineering at Dayananda Sagar College of Engineering.
            </p>

            {/* Quick Access Channels & Action Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://drive.google.com/file/d/1pSNvC8wb6eBipCeX4HWb0emujOtJHFFa/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-neutral-900 text-white px-6 py-3.5 text-base font-medium rounded-xl hover:bg-neutral-800 transition-all shadow-sm"
                >
                  Resume (PDF)
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-white text-neutral-800 border border-neutral-300 px-6 py-3.5 text-base font-medium rounded-xl hover:border-neutral-900 hover:text-neutral-900 transition-all shadow-xs"
                >
                  Get in touch
                </a>

                <a
                  href="https://github.com/anshu2k24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-neutral-800 border border-neutral-300 px-4.5 py-3.5 text-base font-medium rounded-xl hover:border-neutral-900 hover:text-neutral-900 transition-all shadow-xs"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/anshu2k24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-neutral-800 border border-neutral-300 px-4.5 py-3.5 text-base font-medium rounded-xl hover:border-neutral-900 hover:text-neutral-900 transition-all shadow-xs"
                >
                  LinkedIn ↗
                </a>
              </div>

              <span className="font-hand text-2xl text-blue-600 block">
                grab my resume or explore my channels
              </span>
            </div>
          </div>

          {/* Prominent, Larger Workshop Mentorship Photo */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200/80 shadow-lg bg-neutral-100">
              <Image
                src="/images/banner.webp"
                alt="Anshuman Pati conducting technical mentorship session"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-[center_28%]"
              />
            </div>
            <p className="text-sm text-neutral-500 mt-3 text-center">
              Technical workshop & hackathon mentorship at Dayananda Sagar College of Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
