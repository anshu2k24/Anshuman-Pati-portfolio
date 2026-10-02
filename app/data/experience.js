export const experience = [
  {
    company: "Technogrep Solutions LLP × DSCE (Dept. MoU)",
    role: "AI Research Lead Intern",
    duration: "Oct 2025 – Mar 2026",
    type: "Research Internship",
    tech: ["YOLOv8", "Pose Estimation", "Segmentation", "Supabase", "RTSP", "Computer Vision"],
    bullets: [
      "Led a team of 4 to design and deploy Drishti Scene Collector, a real-time AI surveillance system running live on campus RTSP CCTV feeds, detecting medical collapses, falls, fights, crowd formation, and unauthorised vehicle entry.",
      "Architected a multi-model YOLOv8 pipeline (pose, detection, segmentation variants) with mathematically-defined heuristics per anomaly class; sustained 22-25 FPS on an NVIDIA RTX 3050 (6 GB).",
      "Built a Supabase cloud logging backend storing event type, anomaly score, camera ID, timestamp, and snapshot per incident, enabling post-event forensic review.",
      "Authored research paper on the architecture and heuristics as primary author, presented at IEEE TEMSCON-ASPAC 2026 (forthcoming)."
    ]
  },
  {
    company: "Archscale Guild",
    role: "Freelance AI Engineer",
    duration: "Jul 2026 – Aug 2026",
    type: "Client Systems",
    tech: ["n8n", "Custom RAG", "Supabase", "PostgreSQL", "Google Cloud", "WhatsApp API", "Intelligent Agents"],
    bullets: [
      "Built n8n autonomous agent automations with WhatsApp API integration for streamlined client operations.",
      "Engineered custom Supabase and PostgreSQL RAG pipelines for contextual domain information retrieval.",
      "Implemented voice-command AI navigation capabilities with latency-optimized transcription.",
      "Architected and deployed scalable backend infrastructure on Google Cloud Platform."
    ]
  }
];
