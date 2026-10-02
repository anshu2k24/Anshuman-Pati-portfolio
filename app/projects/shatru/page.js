"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/navigation";

export default function ShatruProjectPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const project = {
    name: "Shatru",
    tagline: "Runtime Backdoor Detection Engine for Large Language Models",
    award: "1st Place Winner — Altaria v1.0 (Cyber & AI Track, DSCE)",
    github: "https://github.com/anshu2k24/shatru",
    overview:
      "A black-box runtime backdoor detection engine for large language models built in a 24-hour hackathon sprint. Shatru monitors Shannon Entropy distributions across layers 6–18 of Phi-3-mini to detect Trojan activation patterns on trigger input — completely without access to training data or internal model weights.",
  };

  const highlights = [
    {
      title: "Entropy Fingerprinting",
      description:
        "Monitors statistical divergence in Shannon Entropy across transformer layers 6 through 18 during inference to spot anomalous token distribution spikes.",
    },
    {
      title: "True Black-Box Defense",
      description:
        "Detects backdoors without requiring access to pre-training datasets, weights, or fine-tuning checkpoints — addressing real-world API security.",
    },
    {
      title: "Supply-Chain Resilience",
      description:
        "Provides runtime verification against poisoned open-source models, preventing stealth prompt injection and triggered malicious payloads.",
    },
    {
      title: "Layerwise Statistical Profiling",
      description:
        "Captures baseline activation profiles on clean inputs to compute threshold boundaries, flagging trigger-induced deviations with high statistical sensitivity.",
    },
  ];

  const techStack = [
    "Python",
    "Phi-3-mini",
    "Shannon Entropy",
    "PyTorch",
    "Transformers",
    "Statistical Modeling",
  ];

  const keyMetrics = [
    { label: "Target Model", value: "Phi-3-mini" },
    { label: "Analyzed Layers", value: "Layers 6–18" },
    { label: "Detection Method", value: "Shannon Entropy Fingerprinting" },
    { label: "Sprint Result", value: "1st Place (Altaria v1.0)" },
  ];

  return (
    <div className="bg-[#FAFAF8] min-h-screen text-[#121212]">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            ← Back to Featured Systems
          </Link>
        </div>

        {/* Header */}
        <header className="border-b border-neutral-200 pb-10 mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200/70 rounded-full px-3 py-1">
              {project.award}
            </span>
            <span className="font-hand text-xl text-blue-600">
              runtime AI security & trojan detection
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-4">
            {project.name}
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-700 font-medium mb-6">
            {project.tagline}
          </p>

          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl mb-8">
            {project.overview}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-neutral-900 text-white px-6 py-3 text-sm font-medium rounded-xl hover:bg-neutral-800 transition-all shadow-sm"
            >
              View GitHub Repository →
            </a>
          </div>
        </header>

        {/* Award Ceremony Winning Photo */}
        <section className="mb-14">
          <div className="border border-neutral-200 rounded-2xl bg-white overflow-hidden shadow-xs p-3 sm:p-4">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/80">
              <Image
                src="/images/shatru.jpeg"
                alt="1st Place Winning Team receiving the award certificate for Shatru at Altaria v1.0"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover object-center"
              />
            </div>
            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-neutral-600">
              <span className="font-medium text-neutral-900">
                🏆 1st Place Podium Ceremony · Altaria v1.0 (Cyber & AI Track, DSCE)
              </span>
              <span className="font-mono text-neutral-400">
                Team Shatru · 24-Hour Hackathon Sprint
              </span>
            </div>
          </div>
        </section>

        {/* Specifications Cards */}
        <section className="mb-14">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium">
              System Specifications
            </h2>
            <span className="font-hand text-lg text-blue-600">
              key technical metrics
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keyMetrics.map((item, idx) => (
              <div
                key={idx}
                className="border border-neutral-200 rounded-xl bg-white p-5 shadow-xs"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5 font-medium">
                  {item.label}
                </div>
                <div className="text-base sm:text-lg font-semibold text-neutral-900">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* System Architecture & Methodology */}
        <section className="mb-14">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium">
              System Architecture & Methodology
            </h2>
            <span className="font-hand text-lg text-blue-600">
              engineering breakdown
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((feature) => (
              <div
                key={feature.title}
                className="border border-neutral-200 rounded-2xl bg-white p-6 shadow-xs space-y-2.5"
              >
                <h3 className="text-lg font-bold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-4 font-medium">
            Technologies & Frameworks
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium bg-white border border-neutral-200 rounded-lg px-3.5 py-1.5 text-neutral-800 shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10 text-center text-sm text-neutral-500 bg-white">
        <p>© {new Date().getFullYear()} Anshuman Pati · Built with precision</p>
      </footer>
    </div>
  );
}
