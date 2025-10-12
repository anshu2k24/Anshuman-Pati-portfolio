"use client";

export default function TechStack() {
  const techs = [
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: "▲", color: "from-gray-800 to-black" },
    { name: "Javascript", icon: "🟨", color: "from-yellow-300 to-yellow-500" },
    { name: "TypeScript", icon: "🔷", color: "from-blue-400 to-blue-600" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
    { name: "Python", icon: "🐍", color: "from-blue-500 to-yellow-400" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-emerald-600" },
    { name: "Github", icon: "🐙", color: "from-purple-500 to-indigo-600" },
    { name: "Firebase", icon: "🔥", color: "from-orange-400 to-yellow-500" },
    { name: "Supabase", icon: "⚡", color: "from-emerald-400 to-green-500" },
    { name: "Git", icon: "🔀", color: "from-red-500 to-orange-500" },
    { name: "Figma", icon: "🎨", color: "from-purple-400 to-pink-500" },
    { name: "Tailwindcss", icon: "💨", color: "from-cyan-400 to-teal-500" },
    { name: "C/C++", icon: "⚙️", color: "from-blue-600 to-indigo-700" },
    { name: "OpenCV", icon: "👁️", color: "from-red-500 to-pink-500" },
    { name: "YoloV8", icon: "🎯", color: "from-violet-500 to-purple-600" },
    { name: "Tensorflow", icon: "🧠", color: "from-orange-500 to-amber-600" },
    { name: "SQL", icon: "🗄️", color: "from-sky-500 to-blue-600" },
    { name: "Arduino", icon: "🤖", color: "from-teal-500 to-cyan-600" },
    { name: "ESP32", icon: "📡", color: "from-indigo-500 to-purple-600" },
  ];

  return (
    <section id="techstack" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Tech Stack</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {techs.map((tech, index) => (
            <div key={index} className="group relative" style={{ animationDelay: `${index * 30}ms` }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 border border-gray-200/50 shadow-lg hover:shadow-2xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative text-5xl mb-3 transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-500 filter group-hover:drop-shadow-2xl">{tech.icon}</div>
                <p className="relative font-bold text-sm text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">{tech.name}</p>
                <div className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
