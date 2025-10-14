"use client";

import {
  SparklesIcon,
  CpuChipIcon,
  BoltIcon,
  ScaleIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  ArrowRightIcon,
} from "../../components/Icons";

export default function EcoAiPage() {
  const features = [
    {
      icon: <SparklesIcon />,
      title: "Prompt Optimization",
      description: "AI-powered algorithms compress and refine your prompts, removing redundancy while preserving core intent.",
    },
    {
      icon: <ScaleIcon />,
      title: "Reduced Token Consumption",
      description: "Significantly lower your API costs by sending shorter, more efficient prompts to the LLM.",
    },
    {
      icon: <BoltIcon />,
      title: "Faster Response Times",
      description: "Less data to process means quicker inference, leading to a snappier, more responsive user experience.",
    },
    {
      icon: <CpuChipIcon />,
      title: "Energy-Efficient Inference",
      description: "Minimize the computational load for each query, directly contributing to a lower energy footprint.",
    },
  ];

  const futureEnhancements = [
    "Real-time analytics dashboard for token savings",
    "Available to almost all commonly used AI chat bots",
    "npm package for seamless integration in development environments",
  ];
  
  const techStack = ["Next.js", "Tailwind CSS", "Node.js", "Gemini API"];

  const stats = [
    { value: "82%", label: "Token Reduction" },
    { value: "3x", label: "Faster Inference" },
    { value: "60%", label: "Cost Savings" },
    { value: "40%", label: "Energy Reduction" },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50">
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50/20 to-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 sm:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                  <span className="block text-slate-900">Eco</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                    Ai
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Transform bloated prompts into lean, efficient queries. 
                  <span className="font-semibold text-emerald-700"> Cut costs, boost speed, save the planet.</span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="https://github.com/anshu2k24/enhanced-prompt"
                  target="_blank"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                >
                  <CodeBracketIcon className="w-5 h-5" />
                  View Source Code
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-xl font-semibold text-slate-700 ring-2 ring-slate-200 hover:ring-emerald-300 hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Try Demo
                  <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">Soon</span>
                </a>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-4 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Comparison Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-2xl ring-1 ring-slate-200/50 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    Live Comparison
                  </div>
                  <div className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
                    Real Example
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Before */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-red-50 to-orange-50/50 ring-1 ring-red-200/50 backdrop-blur">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-red-600 uppercase tracking-wide">Before</span>
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-mono">49 tokens</span>
                      </div>
                      <p className="font-mono text-sm text-slate-700 leading-relaxed">
                        "Could you please do me a favor and try to explain the concept of photosynthesis in a way that is really simple and easy for a beginner to understand? I'm not a science person. Thank you!"
                      </p>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-2 rounded-full shadow-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  {/* After */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50/50 ring-1 ring-green-200/50 backdrop-blur">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-green-600 uppercase tracking-wide">After</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-mono">9 tokens</span>
                      </div>
                      <p className="font-mono text-sm text-slate-700 leading-relaxed">
                        "Explain photosynthesis in simple terms for a beginner."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Results Badge */}
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    <SparklesIcon className="w-4 h-4" />
                    82% Token Reduction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Problem & Solution Section ===== */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
              <ChartBarIcon className="w-4 h-4" />
              The Problem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              The Hidden Cost of <span className="text-red-600">Inefficiency</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Widespread generative AI adoption comes with a massive, invisible energy footprint. Every redundant word in a prompt translates to wasted computation, energy, and time—<span className="font-semibold text-slate-900">multiplied by millions of users</span>.
            </p>
          </div>
           
          {/* Enhanced Process Diagram */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl ring-1 ring-slate-200/50">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-emerald-500/5 to-green-500/5 rounded-2xl"></div>
              <div className="relative">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Step 1 */}
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform">
                      <span className="text-3xl font-black text-white">1</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg text-slate-900">Raw Prompt</p>
                      <p className="text-sm text-slate-600 mt-1">Verbose & Inefficient</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex justify-center">
                    <div className="relative">
                      <svg className="w-full h-12" viewBox="0 0 100 50">
                        <defs>
                          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="50%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#059669" />
                          </linearGradient>
                        </defs>
                        <path d="M0,25 Q50,10 100,25" fill="none" stroke="url(#arrowGradient)" strokeWidth="3" strokeDasharray="5,5">
                          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
                        </path>
                        <polygon points="95,20 100,25 95,30" fill="#059669"/>
                      </svg>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                        <SparklesIcon className="w-3 h-3 inline mr-1" />
                        EcoAi Magic
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform">
                      <span className="text-3xl font-black text-white">2</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg text-slate-900">Optimized Prompt</p>
                      <p className="text-sm text-slate-600 mt-1">Lean & Powerful</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Key Features Section ===== */}
      <section className="py-24 sm:py-32 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
              <BoltIcon className="w-4 h-4" />
              Core Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Optimize. Accelerate. <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">Save.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              EcoAi acts as a smart filter, ensuring that only the most efficient version of your prompt reaches the AI model.
            </p>
          </div>
          
          <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="group relative bg-white rounded-2xl p-8 shadow-lg ring-1 ring-slate-200/50 hover:shadow-2xl hover:ring-emerald-300/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ===== SDG & Tech Stack Section ===== */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* SDG Alignment */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl ring-1 ring-slate-200/50">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-6">
                <GlobeAltIcon className="w-4 h-4" />
                UN SDG Aligned
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Sustainability at the Core
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                By promoting resource efficiency in the digital world, EcoAi directly contributes to United Nations Sustainable Development Goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl ring-1 ring-blue-200/50">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow">
                    12
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Responsible Consumption & Production</p>
                    <p className="text-sm text-slate-600">Reducing waste in AI resource usage</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl ring-1 ring-green-200/50">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow">
                    13
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Climate Action</p>
                    <p className="text-sm text-slate-600">Lowering AI's carbon footprint</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tech & Future */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl ring-1 ring-slate-200/50">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium mb-6">
                  <CodeBracketIcon className="w-4 h-4" />
                  Technology
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Built With Modern Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gradient-to-r from-slate-100 to-slate-200 hover:from-emerald-100 hover:to-emerald-200 text-slate-700 hover:text-emerald-800 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Future Roadmap */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl ring-1 ring-slate-200/50">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium mb-6">
                  <ChartBarIcon className="w-4 h-4" />
                  Coming Soon
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Future Enhancements</h3>
                <ul className="space-y-3">
                  {futureEnhancements.map((item, index) => (
                    <li key={item} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 group-hover:bg-emerald-200 text-emerald-700 rounded-md flex items-center justify-center text-xs font-bold transition-colors">
                        {index + 1}
                      </div>
                      <span className="text-slate-700 group-hover:text-slate-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Final CTA Section ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-24 text-center">
          <div className="space-y-8">
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
              Click. Enhance. Smile
              <br />
              <span className="text-emerald-200">Happy World :)</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-emerald-50 max-w-2xl mx-auto leading-relaxed">
              Dive into the source code to see how it works or check back soon for a live interactive demo. <span className="font-semibold">Contributions are welcome!</span>
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="https://github.com/anshu2k24/enhanced-prompt"
                target="_blank"
                className="group inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-white/25 hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105"
              >
                <CodeBracketIcon className="w-5 h-5" />
                Explore on GitHub
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold ring-2 ring-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Proof / Stats */}
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 mb-4">
              EcoAi
            </div>
            <p className="text-xs mt-4">
              © 2025 EcoAi. Open source and free forever.
              Anshu 💖
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}