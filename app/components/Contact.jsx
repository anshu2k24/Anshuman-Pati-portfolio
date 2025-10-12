"use client";

import { useState } from "react";

export default function Contact() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", msg: "" });
  const [suggestionForm, setSuggestionForm] = useState({ name: "", suggested: "" });
  const [contactStatus, setContactStatus] = useState("");
  const [suggestionStatus, setSuggestionStatus] = useState("");

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus("Sending...");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(contactForm) });
      if (response.ok) {
        setContactStatus("Message sent successfully!");
        setContactForm({ name: "", email: "", msg: "" });
      } else setContactStatus("Failed to send message.");
    } catch (error) { setContactStatus("Error sending message."); }
    setTimeout(() => setContactStatus(""), 3000);
  };

  const handleSuggestionSubmit = async (e) => {
    e.preventDefault();
    setSuggestionStatus("Sending...");
    try {
      const response = await fetch("/api/suggestion", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(suggestionForm) });
      if (response.ok) {
        setSuggestionStatus("Suggestion sent successfully!");
        setSuggestionForm({ name: "", suggested: "" });
      } else setSuggestionStatus("Failed to send suggestion.");
    } catch (error) { setSuggestionStatus("Error sending suggestion."); }
    setTimeout(() => setSuggestionStatus(""), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Get In Touch</span>
          </h2>
          <p className="text-gray-600 text-lg">I'd love to hear from you!</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl"></div>
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Send me a message</h3>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div><label className="block text-sm font-semibold mb-2 text-gray-700">Name</label><input type="text" required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all duration-300" placeholder="Your name" /></div>
              <div><label className="block text-sm font-semibold mb-2 text-gray-700">Email</label><input type="email" required value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all duration-300" placeholder="your.email@example.com" /></div>
              <div><label className="block text-sm font-semibold mb-2 text-gray-700">Message</label><textarea required rows="4" value={contactForm.msg} onChange={(e) => setContactForm({ ...contactForm, msg: e.target.value })} className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-400 transition-all duration-300" placeholder="Your message..." /></div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">Send Message</button>
              {contactStatus && <div className={`text-center text-sm font-semibold p-3 rounded-lg ${contactStatus.includes("successfully") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{contactStatus}</div>}
            </form>
          </div>
          {/* Suggestion Form */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-t-2xl"></div>
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Share a suggestion</h3>
            <form onSubmit={handleSuggestionSubmit} className="space-y-6">
              <div><label className="block text-sm font-semibold mb-2 text-gray-700">Name</label><input type="text" required value={suggestionForm.name} onChange={(e) => setSuggestionForm({ ...suggestionForm, name: e.target.value })} className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all duration-300" placeholder="Your name" /></div>
              <div><label className="block text-sm font-semibold mb-2 text-gray-700">Suggestion</label><textarea required rows="6" value={suggestionForm.suggested} onChange={(e) => setSuggestionForm({ ...suggestionForm, suggested: e.target.value })} className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-400 transition-all duration-300" placeholder="Share your ideas, feedback, or suggestions..." /></div>
              <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">Share Suggestion</button>
              {suggestionStatus && <div className={`text-center text-sm font-semibold p-3 rounded-lg ${suggestionStatus.includes("successfully") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{suggestionStatus}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
