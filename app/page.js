"use client";
import Image from "next/image";
import { useState } from "react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">
                Home
              </a>
              <a href="#tech" className="hover:text-blue-400 transition-colors">
                Tech Stack
              </a>
              <a
                href="#projects"
                className="hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#hackathons"
                className="hover:text-blue-400 transition-colors"
              >
                Hackathons
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - My Details */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    John Doe
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
                  Full Stack Developer
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  Passionate about creating innovative web solutions and
                  bringing ideas to life through code. I specialize in modern
                  web technologies and love building user-centric applications.
                </p>
              </div>

              {/* Personal Details */}
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p>
                    <span className="text-blue-400">📧</span> john.doe@email.com
                  </p>
                  <p>
                    <span className="text-blue-400">📱</span> +1 (555) 123-4567
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="text-blue-400">📍</span> San Francisco, CA
                  </p>
                  <p>
                    <span className="text-blue-400">🎓</span> CS Graduate
                  </p>
                </div>
              </div>

              {/* Resume Button */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
                  📄 Download Resume
                </button>
                <a
                  href="#contact"
                  className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all"
                >
                  Let's Connect
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-8xl">
                    👨‍💻
                  </div>
                </div>
                <div className="absolute -z-10 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 blur-xl opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
              {
                name: "Next.js",
                icon: "▲",
                color: "from-gray-400 to-gray-600",
              },
              {
                name: "TypeScript",
                icon: "📘",
                color: "from-blue-400 to-blue-600",
              },
              {
                name: "Node.js",
                icon: "🟢",
                color: "from-green-400 to-green-600",
              },
              {
                name: "Python",
                icon: "🐍",
                color: "from-yellow-400 to-green-500",
              },
              {
                name: "MongoDB",
                icon: "🍃",
                color: "from-green-400 to-green-600",
              },
              {
                name: "PostgreSQL",
                icon: "🐘",
                color: "from-blue-400 to-blue-600",
              },
              {
                name: "AWS",
                icon: "☁️",
                color: "from-orange-400 to-yellow-500",
              },
              {
                name: "Docker",
                icon: "🐳",
                color: "from-blue-400 to-cyan-500",
              },
              { name: "Git", icon: "📚", color: "from-red-400 to-red-600" },
              {
                name: "Figma",
                icon: "🎨",
                color: "from-purple-400 to-pink-500",
              },
              {
                name: "Tailwind",
                icon: "💨",
                color: "from-teal-400 to-blue-500",
              },
            ].map((tech, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 transform group-hover:scale-105 border border-white/10">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <p className="font-semibold text-sm">{tech.name}</p>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "E-Commerce Platform",
                tech: ["React", "Node.js", "MongoDB"],
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                name: "Task Management App",
                tech: ["Next.js", "PostgreSQL", "Prisma"],
                gradient: "from-purple-500 to-pink-500",
              },
              {
                name: "Social Media Dashboard",
                tech: ["Vue.js", "Express", "Redis"],
                gradient: "from-green-500 to-teal-500",
              },
              {
                name: "Cryptocurrency Tracker",
                tech: ["React", "Chart.js", "API"],
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                name: "AI Chat Application",
                tech: ["Next.js", "OpenAI", "Supabase"],
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                name: "Weather Forecast App",
                tech: ["React Native", "Weather API", "Redux"],
                gradient: "from-cyan-500 to-blue-500",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/10"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="text-6xl opacity-20">🚀</div>
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    A comprehensive solution built with modern technologies to
                    solve real-world problems and enhance user experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      Live Demo →
                    </a>
                    <a
                      href="#"
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium"
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
      <section id="hackathons" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hackathons & Competitions
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Projects and achievements from various hackathons and coding
            competitions
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                event: "TechCrunch Disrupt 2024",
                project: "EcoTrack - Carbon Footprint Tracker",
                achievement: "🥇 1st Place Winner",
                tech: ["React Native", "AI/ML", "Blockchain"],
                certificate: true,
              },
              {
                event: "NASA Space Apps Challenge",
                project: "Mars Rover Navigation System",
                achievement: "🥈 2nd Place Global",
                tech: ["Python", "Computer Vision", "IoT"],
                certificate: true,
              },
              {
                event: "Google Developer Challenge",
                project: "Smart City Traffic Optimizer",
                achievement: "🏆 Best Innovation Award",
                tech: ["Flutter", "Google Cloud", "TensorFlow"],
                certificate: true,
              },
              {
                event: "Meta Hackathon 2024",
                project: "VR Learning Platform",
                achievement: "🎯 Top 10 Finalist",
                tech: ["React VR", "Node.js", "WebRTC"],
                certificate: false,
              },
            ].map((hackathon, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      {hackathon.project}
                    </h3>
                    <p className="text-blue-400 font-medium">
                      {hackathon.event}
                    </p>
                  </div>
                  {hackathon.certificate && (
                    <div className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium">
                      📜 Certified
                    </div>
                  )}
                </div>

                <div className="text-2xl mb-3">{hackathon.achievement}</div>

                <p className="text-gray-400 text-sm mb-4">
                  Innovative solution addressing real-world challenges with
                  cutting-edge technology and creative problem-solving.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hackathon.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    View Project →
                  </a>
                  {hackathon.certificate && (
                    <a
                      href="#"
                      className="text-yellow-400 hover:text-yellow-300 font-medium"
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
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="flex justify-center space-x-6">
            {[
              {
                name: "GitHub",
                icon: "🔗",
                url: "#",
                color: "hover:text-gray-400",
              },
              {
                name: "LinkedIn",
                icon: "💼",
                url: "#",
                color: "hover:text-blue-400",
              },
              {
                name: "Twitter",
                icon: "🐦",
                url: "#",
                color: "hover:text-cyan-400",
              },
              {
                name: "Instagram",
                icon: "📸",
                url: "#",
                color: "hover:text-pink-400",
              },
              {
                name: "YouTube",
                icon: "📺",
                url: "#",
                color: "hover:text-red-400",
              },
              {
                name: "Discord",
                icon: "💬",
                url: "#",
                color: "hover:text-indigo-400",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all transform hover:scale-110 ${social.color} group`}
                title={social.name}
              >
                <span className="text-2xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={contactForm.msg}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, msg: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
                {contactStatus && (
                  <p
                    className={`text-center text-sm ${
                      contactStatus.includes("successfully")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {contactStatus}
                  </p>
                )}
              </form>
            </div>

            {/* Suggestion Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Share a suggestion</h3>
              <form onSubmit={handleSuggestionSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
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
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
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
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    placeholder="Share your ideas, feedback, or suggestions..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Share Suggestion
                </button>
                {suggestionStatus && (
                  <p
                    className={`text-center text-sm ${
                      suggestionStatus.includes("successfully")
                        ? "text-green-400"
                        : "text-red-400"
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
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Made with ❤️ and lots of ☕ by John Doe
            </p>
            <p className="text-gray-500 text-sm">© 2024 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
