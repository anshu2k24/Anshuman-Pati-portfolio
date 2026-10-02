"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", msg: "" });
  const [honeypot, setHoneypot] = useState("");
  const [contactStatus, setContactStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    // Anti-spam bot trap (honeypot check)
    if (honeypot) {
      setContactStatus("Message sent successfully.");
      setContactForm({ name: "", email: "", msg: "" });
      return;
    }

    const trimmedName = contactForm.name.trim();
    const trimmedEmail = contactForm.email.trim();
    const trimmedMsg = contactForm.msg.trim();

    // Input boundary validation
    if (!trimmedName || trimmedName.length > 100) {
      setContactStatus("Please enter a valid name (max 100 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail) || trimmedEmail.length > 100) {
      setContactStatus("Please enter a valid email address.");
      return;
    }

    if (!trimmedMsg || trimmedMsg.length < 5 || trimmedMsg.length > 2000) {
      setContactStatus("Message must be between 5 and 2000 characters.");
      return;
    }

    setIsSubmitting(true);
    setContactStatus("Sending message...");

    try {
      const templateParams = {
        from_name: trimmedName,
        from_email: trimmedEmail,
        message: trimmedMsg,
      };

      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_5y95k4w";
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_p98h7ub";
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "hs2945Z9nOv5GNxKX";

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setContactStatus("Message delivered successfully.");
      setContactForm({ name: "", email: "", msg: "" });
    } catch {
      setContactStatus("Failed to send message. Please reach out directly via email or LinkedIn.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setContactStatus(""), 6000);
    }
  };

  return (
    <section id="contact" className="border-t border-neutral-200/80 py-20 bg-[#FAFAF9]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-neutral-200 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Get in Touch
            </h2>
            <span className="font-hand text-xl text-blue-600">
              say hello or propose a project
            </span>
          </div>
          <span className="text-xs font-mono text-neutral-400">Contact</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Channels & Info */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              I am open to discussions on machine learning research, software engineering roles,
              and applied systems engineering.
            </p>

            <div className="border border-neutral-200 rounded-2xl bg-white p-6 shadow-xs space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
                Direct Channels
              </span>

              <div>
                <span className="text-xs text-neutral-500 block mb-0.5">Email</span>
                <a
                  href="mailto:anshu799pati@gmail.com"
                  className="text-sm font-semibold text-neutral-900 hover:text-blue-600 transition-colors"
                >
                  anshu799pati@gmail.com
                </a>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex gap-4 text-xs font-medium">
                <a
                  href="https://github.com/anshu2k24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-neutral-900 underline underline-offset-4"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/anshu2k24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-neutral-900 underline underline-offset-4"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="p-4 border border-neutral-200 rounded-xl bg-white text-xs font-mono text-neutral-500">
              <span className="text-neutral-900 font-semibold">Location:</span> Bengaluru, Karnataka, India (IST)
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleContactSubmit}
              className="border border-neutral-200 rounded-2xl bg-white p-6 sm:p-8 shadow-xs space-y-5"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                  Send a Direct Message
                </span>
                <span className="font-hand text-base text-blue-600">
                  reply within 24 hours
                </span>
              </div>

              {/* Anti-bot honeypot */}
              <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                <label htmlFor="hp_field">Leave this empty</label>
                <input
                  id="hp_field"
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, name: e.target.value })
                  }
                  className="w-full bg-[#FAFAF9] border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  maxLength={100}
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, email: e.target.value })
                  }
                  className="w-full bg-[#FAFAF9] border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  maxLength={2000}
                  value={contactForm.msg}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, msg: e.target.value })
                  }
                  className="w-full bg-[#FAFAF9] border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white resize-none transition-all"
                  placeholder="Tell me about your project, idea, or role..."
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center bg-neutral-900 text-white px-7 py-3 text-sm font-medium rounded-lg hover:bg-neutral-800 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {contactStatus && (
                  <span className="text-xs font-medium text-blue-700">
                    {contactStatus}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
