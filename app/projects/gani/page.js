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
      title: "Multimodal Sensor Telemetry",
      description:
        "Fuses live seismic vibration, structural tilt, and geological movement readings from ESP32 edge nodes with optical CCTV feeds for high-confidence event detection.",
    },
    {
      title: "YOLOv8 Rockfall Computer Vision",
      description:
        "Runs real-time computer vision inference on hazardous slope surfaces to identify early rock displacement and slope fractures before structural collapse.",
    },
    {
      title: "Tiered Alert & Monitoring Console",
      description:
        "Engineered a low-latency Next.js monitoring dashboard categorizing threats into Low, Medium, and Critical alerts with instant sound triggers and visual beacons.",
    },
    {
      title: "Resilient Offline Operation",
      description:
        "Engineered edge nodes to log sensor telemetry locally and maintain core alert thresholds even in transient connectivity and harsh mine conditions.",
    },
  ];

  const techStack = [
    "YOLOv8",
    "ESP32",
    "Python",
    "Next.js",
    "OpenCV",
    "IoT Telemetry",
    "Sensor Fusion",
  ];

  const keyMetrics = [
    { label: "Hardware Nodes", value: "ESP32 + Tilt/Seismic Sensors" },
    { label: "Vision Model", value: "YOLOv8 Edge Detection" },
    { label: "Alert Levels", value: "Low / Medium / Critical" },
    { label: "Competition", value: "Smart India Hackathon 2025" },
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
              mine safety & edge CV
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
