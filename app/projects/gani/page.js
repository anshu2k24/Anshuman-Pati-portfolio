"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../components/navigation";

export default function GaniProjectPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const project = {
    name: "Gani",
    tagline: "IoT & Computer Vision Early-Warning Platform for Mine Safety",
    award: "Selected for Smart India Hackathon 2025 (Nationals / Internal Round)",
    github: "https://github.com/anshu2k24/gani",
    overview:
      "An IoT and machine learning early-warning platform for predicting and detecting rockfalls in open-pit mines. Gani fuses real-time vibration, tilt, and seismic telemetry from ESP32 microcontroller arrays with YOLOv8 visual detection into a Next.js multi-role dashboard with severity-tiered alerts (Low, Medium, Critical).",
  };

  const highlights = [
    {
      title: "Multimodal Sensor Fusion",
      description:
        "Fuses live seismic vibration, structural tilt, and geological movement readings from ESP32 edge nodes with optical CCTV feeds.",
    },
    {
      title: "YOLOv8 Rockfall Detection",
      description:
        "Runs real-time computer vision inference on hazardous slope surfaces to identify early rock displacement and slope fractures.",
    },
    {
      title: "Tiered Alert Dashboard",
      description:
        "Engineered a low-latency Next.js monitoring console categorizing threats into Low, Medium, and Critical alerts with instant sound and visual alarms.",
    },
  ];

  const techStack = [
    "YOLOv8",
    "ESP32",
    "Python",
    "Next.js",
    "OpenCV",
    "IoT Telemetry",
  ];

  const keyMetrics = [
    { label: "Hardware Nodes", value: "ESP32 + Tilt/Seismic" },
    { label: "Vision Model", value: "YOLOv8 Edge Detection" },
    { label: "Alert Levels", value: "Low / Medium / Critical" },
    { label: "Competition", value: "Smart India Hackathon 2025" },
  ];

  return (
    <div className="bg-[#FBFBFA] min-h-screen text-[#141413]">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/#work"
            className="text-sm font-mono text-[#57564F] hover:text-[#141413] transition-colors"
          >
            ← Back to Work
          </Link>
        </div>

        {/* Header */}
        <header className="border-b border-[#E5E5E3] pb-10 mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#57564F] mb-3">
            {project.award}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#141413] mb-4">
            {project.name}
          </h1>
          <p className="text-lg text-[#57564F] mb-6 font-mono">
            {project.tagline}
          </p>
          <p className="text-base text-[#2C2B28] leading-relaxed max-w-2xl mb-8">
            {project.overview}
          </p>

          <div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#141413] text-[#FBFBFA] px-5 py-2.5 text-sm font-mono uppercase tracking-wider hover:bg-[#2C2B28] transition-colors"
            >
              View on GitHub →
            </a>
          </div>
        </header>

        {/* Metrics Ledger */}
        <section className="border-b border-[#E5E5E3] pb-12 mb-12">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#57564F] mb-6">
            Key Specifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {keyMetrics.map((item, idx) => (
              <div key={idx} className="border-t border-[#E5E5E3] pt-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#57564F] mb-1">
                  {item.label}
                </div>
                <div className="text-base font-medium text-[#141413]">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* System Architecture */}
        <section className="border-b border-[#E5E5E3] pb-12 mb-12">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#57564F] mb-6">
            System Highlights & Detection Architecture
          </h2>
          <div className="space-y-8">
            {highlights.map((feature) => (
              <div key={feature.title} className="border-t border-[#E5E5E3] pt-4">
                <h3 className="text-base font-semibold text-[#141413] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#57564F] leading-relaxed max-w-2xl">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#57564F] mb-6">
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono bg-white border border-[#E5E5E3] px-3 py-1.5 text-[#2C2B28]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E5E5E3] py-8 text-center text-xs font-mono text-[#57564F]">
        <p>© {new Date().getFullYear()} Anshuman Pati</p>
      </footer>
    </div>
  );
}
