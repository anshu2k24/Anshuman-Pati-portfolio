"use client";

export default function Socials() {
  const socials = [
    { name: "GitHub", icon: "🔗", url: "https://github.com/anshu2k24", color: "hover:bg-gray-800 hover:text-white", gradient: "from-gray-700 to-gray-900" },
    { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/anshuman-pati-5575bb34a/", color: "hover:bg-blue-600 hover:text-white", gradient: "from-blue-500 to-blue-700" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Let&apos;s Connect</span>
        </h2>
        <p className="text-gray-600 mb-12 text-lg">Follow me on social media</p>
        <div className="flex justify-center gap-6">
          {socials.map((social, index) => (
            <a key={index} href={social.url} title={social.name} className={`group relative bg-white hover:shadow-2xl p-6 rounded-2xl transition-all duration-500 transform hover:scale-110 border-2 border-gray-200 hover:border-transparent ${social.color} overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <span className="relative text-4xl group-hover:scale-125 transition-transform duration-500 inline-block">{social.icon}</span>
              <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
