"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", msg: "" });
  const [honeypot, setHoneypot] = useState("");
  const [contactStatus, setContactStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    // Anti-spam bot trap (honeypot check)
    if (honeypot) {
      setContactStatus("Message sent successfully!");
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
    setContactStatus("Sending...");

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

      setContactStatus("Message sent successfully!");
      setContactForm({ name: "", email: "", msg: "" });
    } catch (error) {
      setContactStatus("Failed to send message. Please try again or reach out on LinkedIn.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setContactStatus(""), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-[#0F0F0F]">Get In Touch</span>
          </h2>
          <p className="text-[#5F5F5F] text-lg">I&apos;d love to hear from you!</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="group relative bg-white p-8 border border-[#F0F0F0] rounded-3xl shadow-xs transition-colors hover:border-[#EDEDED]">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#7FAFBF]"></div>
            <h3 className="text-2xl font-bold mb-6 text-[#0F0F0F]">
              Send me a message
            </h3>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              {/* Honeypot trap to catch automated bots */}
              <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                <label htmlFor="hp_field">Do not fill this</label>
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
                <label className="block text-sm font-semibold mb-2 text-gray-700">
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
                  className="w-full bg-white border border-[#F0F0F0] rounded-xl px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7FAFBF] focus-visible:ring-offset-2 focus-visible:ring-offset-white text-[#0F0F0F] placeholder-gray-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
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
                  className="w-full bg-white border border-[#F0F0F0] rounded-xl px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7FAFBF] focus-visible:ring-offset-2 focus-visible:ring-offset-white text-[#0F0F0F] placeholder-gray-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  required
                  rows="4"
                  maxLength={2000}
                  value={contactForm.msg}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, msg: e.target.value })
                  }
                  className="w-full bg-white border border-[#F0F0F0] rounded-xl px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7FAFBF] focus-visible:ring-offset-2 focus-visible:ring-offset-white resize-none text-[#0F0F0F] placeholder-gray-400 transition-colors"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0F0F0F] text-white hover:bg-white hover:text-[#0F0F0F] border border-[#0F0F0F] py-3 rounded-xl font-bold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7FAFBF] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {contactStatus && (
                <div
                  className={`text-center text-sm font-semibold p-3 rounded-lg ${
                    contactStatus.includes("successfully")
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {contactStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
