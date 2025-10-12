"use client";

import { useState } from "react";
import Spline from "@splinetool/react-spline";

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [suggestionForm, setSuggestionForm] = useState({
    name: "",
    suggested: "",
  });

  const [contactStatus, setContactStatus] = useState("");
  const [suggestionStatus, setSuggestionStatus] = useState("");

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      if (response.ok) {
        setContactStatus("Message sent successfully!");
        setContactForm({ name: "", email: "", msg: "" });
      } else {
        setContactStatus("Failed to send message.");
      }
    } catch (error) {
      setContactStatus("Error sending message.");
    }
    setTimeout(() => setContactStatus(""), 3000);
  };

  const handleSuggestionSubmit = async (e) => {
    e.preventDefault();
    setSuggestionStatus("Sending...");

    try {
      const response = await fetch("/api/suggestion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(suggestionForm),
      });

      if (response.ok) {
        setSuggestionStatus("Suggestion sent successfully!");
        setSuggestionForm({ name: "", suggested: "" });
      } else {
        setSuggestionStatus("Failed to send suggestion.");
      }
    } catch (error) {
      setSuggestionStatus("Error sending suggestion.");
    }
    setTimeout(() => setSuggestionStatus(""), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-500 transition-colors">
                Home
              </a>
              <a href="#tech" className="hover:text-blue-500 transition-colors">
                Tech Stack
              </a>
              <a
                href="#projects"
                className="hover:text-blue-500 transition-colors"
              >
                Projects
              </a>
              <a
                href="#hackathons"
                className="hover:text-blue-500 transition-colors"
              >
                Hackathons
              </a>
              <a
                href="#contact"
                className="hover:text-blue-500 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - My Details & Spline */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/HvslEaJIVL9auw6l/scene.splinecode" />
          {/* <Spline scene="https://prod.spline.design/w4ngYMyAtycjkvHV/scene.splinecode" /> */}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className=""></div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-gray-700">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Next.js", icon: "▲" },
              { name: "Javascript", icon: "📘" },
              { name: "TypeScript", icon: "📘" },
              { name: "Node.js", icon: "🟢" },
              { name: "Python", icon: "🐍" },
              { name: "MongoDB", icon: "🍃" },
              { name: "Github", icon: "🐘" },
              { name: "Firebase", icon: "☁️" },
              { name: "Supabase", icon: "🐳" },
              { name: "Git", icon: "📚" },
              { name: "Figma", icon: "🎨" },
              { name: "Tailwindcss", icon: "💨" },
              { name: "C/C++", icon: "💨" },
              { name: "OpenCv", icon: "💨" },
              { name: "YoloV8", icon: "💨" },
              { name: "Tensorflow", icon: "💨" },
              { name: "SQL", icon: "💨" },
              { name: "Arduino", icon: "💨" },
              { name: "ESP32", icon: "💨" },
            ].map((tech, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-xl p-6 text-center hover:bg-gray-100 transition-all duration-300 transform group-hover:scale-105 border border-gray-200">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <p className="font-semibold text-sm text-gray-800">
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-gray-700">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "EcoAi",
                tech: ["AI", "Sustainability", "Efficiency"],
              },
              {
                name: "Rock, Paper, and Scissor",
                tech: ["YOLOv8", "TensorFlow", "OpenCV"],
              },
              {
                name: "UniTech",
                tech: ["React", "Firebase", "Node.js"],
              },
              {
                name: "Password Manager",
                tech: ["Python", "Encryption", "Web"],
              },
              {
                name: "StudyAi",
                tech: ["React", "TailwindCSS", "Firebase", "Python AI"],
              },
              {
                name: "PCFR",
                tech: ["Arduino Uno", "Rain Sensor", "SG90 Servo"],
              },
              {
                name: "NeroBot",
                tech: ["Arduino Uno", "SG90 Servo"],
              },
              {
                name: "Glider",
                tech: [
                  "Arduino Uno",
                  "MPU6050",
                  "Li-ion Battery",
                  "SG90 Servo",
                ],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {project.name}
                  </h3>
                  <p className="text-gray-500 mb-4 text-sm">
                    A comprehensive solution built with modern technologies to
                    solve real-world problems and enhance user experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-400 text-sm font-medium"
                    >
                      Live Demo →
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-500 text-sm font-medium"
                    >
                      Source Code →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons */}
      <section id="hackathons" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-gray-700">
              Hackathons & Competitions
            </span>
          </h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">
            Projects and achievements from various hackathons and coding
            competitions
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                event: "MakerBlitz Hackathon",
                project: "EcoAi",
                achievement: "🥇 Appreciation Prize",
                tech: ["AI/ML", "Sustainability"],
                certificate: true,
              },
              {
                event: "CypherQuest",
                project: "Participation",
                achievement: "✅ Certificate of Participation",
                tech: ["Tech Event"],
                certificate: true,
              },
              {
                event: "ByteXync",
                project: "Participation",
                achievement: "✅ Certificate of Participation",
                tech: ["Tech Event"],
                certificate: true,
              },
              {
                event: "Confluence PES",
                project: "Participation",
                achievement: "✅ Certificate of Participation",
                tech: ["Tech Event"],
                certificate: true,
              },
              {
                event: "TechTrek",
                project: "Participation",
                achievement: "✅ Certificate of Participation",
                tech: ["Tech Event"],
                certificate: true,
              },
              {
                event: "Smart India Hackathon 2025",
                project: "Internal Round Selection",
                achievement: "🎯 Qualified for Nationals",
                tech: ["Problem Solving", "Team Project"],
                certificate: false,
              },
              {
                event: "Genesis Club - DSCE",
                project: "Tech Team Member",
                achievement: "👥 Core Contributor",
                tech: ["Leadership", "Teamwork"],
                certificate: false,
              },
            ].map((hackathon, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-gray-900">
                      {hackathon.project}
                    </h3>
                    <p className="text-blue-500 font-medium">
                      {hackathon.event}
                    </p>
                  </div>
                  {hackathon.certificate && (
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                      📜 Certified
                    </div>
                  )}
                </div>

                <div className="text-2xl mb-3 text-gray-700">
                  {hackathon.achievement}
                </div>

                <p className="text-gray-500 text-sm mb-4">
                  Innovative solution addressing real-world challenges with
                  cutting-edge technology and creative problem-solving.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hackathon.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-400 font-medium"
                  >
                    View Project →
                  </a>
                  {hackathon.certificate && (
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-500 font-medium"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Handles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-gray-700">
              Let&apos;s Connect
            </span>
          </h2>
          <div className="flex justify-center space-x-6">
            {[
              {
                name: "GitHub",
                icon: "🔗",
                url: "https://github.com/anshu2k24",
                color: "hover:text-gray-600",
              },
              {
                name: "LinkedIn",
                icon: "💼",
                url: "https://www.linkedin.com/in/anshuman-pati-5575bb34a/",
                color: "hover:text-blue-600",
              }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`bg-white hover:bg-gray-100 p-4 rounded-full transition-all transform hover:scale-110 ${social.color} group border border-gray-200`}
                title={social.name}
              >
                <span className="text-2xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-gray-700">
              Get In Touch
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Send me a message
              </h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Message
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={contactForm.msg}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, msg: e.target.value })
                    }
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-400"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white hover:bg-gray-700 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
                {contactStatus && (
                  <p
                    className={`text-center text-sm ${
                      contactStatus.includes("successfully")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {contactStatus}
                  </p>
                )}
              </form>
            </div>

            {/* Suggestion Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Share a suggestion
              </h3>
              <form onSubmit={handleSuggestionSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={suggestionForm.name}
                    onChange={(e) =>
                      setSuggestionForm({
                        ...suggestionForm,
                        name: e.target.value,
                      })
                    }
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Suggestion
                  </label>
                  <textarea
                    required
                    rows="6"
                    value={suggestionForm.suggested}
                    onChange={(e) =>
                      setSuggestionForm({
                        ...suggestionForm,
                        suggested: e.target.value,
                      })
                    }
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-400"
                    placeholder="Share your ideas, feedback, or suggestions..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white hover:bg-gray-700 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Share Suggestion
                </button>
                {suggestionStatus && (
                  <p
                    className={`text-center text-sm ${
                      suggestionStatus.includes("successfully")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {suggestionStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500 mb-4">
              Just Anshu 😎
            </p>
            <p className="text-gray-400 text-sm">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
