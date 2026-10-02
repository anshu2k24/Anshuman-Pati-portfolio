"use client";

import { useState } from "react";
import Navigation from "../../components/navigation";
import {
  CpuChipIcon,
  SparklesIcon,
  CodeBracketIcon,
  CheckBadgeIcon,
} from "../../components/Icons";

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
      icon: <CpuChipIcon />,
      title: "Multimodal Sensor Fusion",
      description:
        "Fuses live seismic vibration, structural tilt, and geological movement readings from ESP32 edge nodes with optical CCTV feeds.",
    },
    {
      icon: <SparklesIcon />,
      title: "YOLOv8 Rockfall Detection",
      description:
        "Runs real-time computer vision inference on hazardous slope surfaces to identify early rock displacement and slope fractures.",
    },
    {
      icon: <CheckBadgeIcon />,
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
    "Tailwind CSS",
  ];

  const keyMetrics = [
    { label: "Hardware Nodes", value: "ESP32 + Tilt/Seismic" },
    { label: "Vision Model", value: "YOLOv8 Edge Detection" },
    { label: "Alert Levels", value: "Low / Medium / Critical" },
    { label: "Competition", value: "Smart India Hackathon 2025" },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 min-h-screen text-slate-800">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="py-24 sm:py-32 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-semibold border border-emerald-200 shadow-xs">
            🎯 {project.award}
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            {project.name}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-600 to-cyan-600 mt-2">
              {project.tagline}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {project.overview}
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-700 transition-all shadow-xs"
            >
              <CodeBracketIcon className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {keyMetrics.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
                  {item.label}
                </p>
                <p className="text-base sm:text-lg font-bold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">System Highlights</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            Early hazard detection through real-time hardware sensing and deep learning vision
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {highlights.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-xs ring-1 ring-slate-200 hover:shadow-md transition-all flex flex-col"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-100 text-teal-800 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-teal-700 text-sm font-semibold mb-3">
            <CodeBracketIcon className="w-4 h-4" /> Integrated Stack
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Technologies & Microcontrollers
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-10 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Anshuman Pati — Built with engineering precision.</p>
      </footer>
    </div>
  );
}
