"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-28 sm:pt-36 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Narrative & Punchy Hook (Golden Ratio Major Column: ~60%) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              Bengaluru, India · AI Research & Engineering
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
              Anshuman Pati
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-neutral-800 leading-snug">
              I build machine learning systems that run under real-world compute and security constraints.
            </p>

            <p className="text-base text-neutral-600 leading-relaxed max-w-xl">
              From real-time 25 FPS computer vision pipelines running on laptop GPUs
              (published at IEEE TEMSCON-ASPAC 2026) to black-box runtime backdoor detection
              engines for LLMs (1st place at Altaria v1.0). Studying Information Science at
              Dayananda Sagar College of Engineering (GPA 9.8).
            </p>

            {/* Rounded Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://drive.google.com/file/d/1pSNvC8wb6eBipCeX4HWb0emujOtJHFFa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-neutral-900 text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-neutral-800 transition-all shadow-sm"
              >
                Resume (PDF)
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-neutral-800 border border-neutral-300 px-6 py-3 text-sm font-medium rounded-lg hover:border-neutral-900 hover:text-neutral-900 transition-all shadow-xs"
              >
                Get in touch
              </a>

              <span className="font-hand text-xl text-blue-600 ml-1">
                grab my resume or get in touch
              </span>
            </div>
          </div>

          {/* Complete, Uncropped Photo (Golden Ratio Minor Column: ~40%) */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[2400/2271] rounded-2xl overflow-hidden border border-neutral-200/80 shadow-md bg-neutral-100">
              <Image
                src="/images/banner.webp"
                alt="Anshuman Pati conducting technical mentorship session in Bengaluru"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-contain"
              />
            </div>
            <p className="text-xs text-neutral-500 mt-3 text-center">
              Technical workshop at Dayananda Sagar College of Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
