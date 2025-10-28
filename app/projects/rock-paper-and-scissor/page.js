"use client";

import { useState } from "react";
import Navigation from "../../components/navigation";
import {
  CpuChipIcon,
  SparklesIcon,
  CodeBracketIcon,
  ChartBarIcon,
  GitHubIcon,
  LinkedInIcon,
} from "../../components/Icons";

export default function RockPaperScissorsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contributor = {
    name: "Anshuman Pati",
    github: "https://github.com/anshu2k24/rock-paper-scissors",
    linkedin: "https://www.linkedin.com/in/anshuman-pati-5575bb34a/",
    role: "Developer & Computer Vision Engineer",
  };

  const features = [
    {
      icon: <CpuChipIcon />,
      title: "Real-Time Detection",
      description:
        "Predicts rock, paper, and scissors gestures from images or live video using YOLOv8 and OpenCV.",
    },
    {
      icon: <SparklesIcon />,
      title: "Optimized Training",
      description:
        "Fine-tuned YOLOv8n model on Kaggle’s Rock–Paper–Scissors dataset with data augmentation for higher precision.",
    },
    {
      icon: <ChartBarIcon />,
      title: "Extendable Architecture",
      description:
        "Lightweight and modular — can be integrated into gameplay logic or visual dashboards easily.",
    },
  ];

  const techStack = ["YOLOv8", "Python", "OpenCV", "PyTorch", "NumPy"];

  const roadmap = [
    "Integrate real-time gameplay logic",
    "Add a visualization dashboard with Next.js",
    "Enhance model performance for angled or low-light gestures",
  ];

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 min-h-screen text-slate-800">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="py-24 sm:py-32 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Rock Paper Scissors
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400">
              Detection with YOLOv8
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A lightweight computer vision project trained on the{" "}
            <span className="font-semibold text-fuchsia-600">
              Kaggle Rock–Paper–Scissors dataset
            </span>
            . Detects gestures in real-time with YOLOv8 — optimized for
            accuracy, speed, and simplicity.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href={contributor.github}
              target="_blank"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-700 transition-all"
            >
              <CodeBracketIcon className="w-5 h-5" />
              View on GitHub
            </a>
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Project Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-400 text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack + Roadmap */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16">
          {/* Tech Stack */}
          <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200">
            <div className="inline-flex items-center gap-2 text-fuchsia-700 text-sm font-medium mb-3">
              <CodeBracketIcon className="w-4 h-4" /> Technology Stack
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Built with Modern Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-100 hover:bg-fuchsia-100 text-slate-700 hover:text-fuchsia-700 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200">
            <div className="inline-flex items-center gap-2 text-amber-600 text-sm font-medium mb-3">
              <ChartBarIcon className="w-4 h-4" /> Project Roadmap
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              What’s Next
            </h3>
            <ul className="space-y-3">
              {roadmap.map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-fuchsia-100 text-fuchsia-700 rounded-md flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-10 text-center text-slate-500 text-sm">
        <p>
          &copy; 2025 Anshu Pati — Built with ❤️ to learn XD
        </p>
      </footer>
    </div>
  );
}
