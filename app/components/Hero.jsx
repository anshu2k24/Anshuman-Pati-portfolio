"use client";

import { useState } from "react";
import Image from "next/image";
import profilePic from "./me.webp";
import Navigation from "./navigation";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      id="home"
      className="pt-20 min-h-[90vh] flex flex-col relative bg-white text-[#0F0F0F]"
    >
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
        <svg
          width="40"
          height="16"
          viewBox="0 0 40 16"
          className="opacity-70 sm:opacity-80"
          aria-hidden="true"
          role="presentation"
        >
          <path
            d="M2 8 C 6 2, 10 14, 14 8 C 18 2, 22 14, 26 8 C 30 2, 34 14, 38 8"
            fill="none"
            stroke="#7FAFBF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="origin-center"
          />
          <text
            x="20"
            y="15"
            textAnchor="middle"
            fontSize="6"
            letterSpacing="0.08em"
            fill="#5F5F5F"
            className="select-none"
          >
            anshu2k24
          </text>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-grow flex items-center">
        <div className="w-full">
          <div className="max-w-5xl">
            <div className="mb-10">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                <div className="w-full h-full rounded-full border border-[#EDEDED] p-1 bg-white">
                  <Image
                    src={profilePic}
                    alt="Anshuman Pati"
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[0.98] text-[#0F0F0F]">
              Anshuman Pati
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 text-[#0F0F0F] leading-tight">
              AI Research Engineer: building robust, deployable ML systems
            </h2>

            <p className="text-lg sm:text-xl text-[#5F5F5F] mb-10 max-w-3xl leading-relaxed">
              I translate research into practical systems, from RTSP vision
              pipelines to runtime LLM backdoor detection (Shatru), with a
              focus on reliability and edge constraints.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start mb-12">
              <a
                href="https://drive.google.com/file/d/1pSNvC8wb6eBipCeX4HWb0emujOtJHFFa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-[#0F0F0F] bg-[#0F0F0F] text-white rounded-full text-base font-medium transition-colors hover:bg-white hover:text-[#0F0F0F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7FAFBF] focus-visible:ring-offset-2 focus-visible:ring-offset-white cursor-pointer"
              >
                <span>View Resume</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-[#EDEDED] bg-white text-[#0F0F0F] rounded-full text-base font-medium transition-colors hover:border-[#7FAFBF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7FAFBF] focus-visible:ring-offset-2 focus-visible:ring-offset-white cursor-pointer"
              >
                <span>Get in Touch</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl">
              {[
                {
                  label: "IEEE paper: published at TEMSCON-ASPAC 2026",
                },
                {
                  label: "1st place: Altaria v1.0 (Cyber & AI)",
                },
                {
                  label: "Selected: ACM Summer School (Edge AI & Robotics, IISc)",
                },
                {
                  label: "22–25 FPS on edge (RTX 3050)",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl border border-[#F0F0F0] bg-white transition-colors hover:border-[#EDEDED]"
                >
                  <div className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
