export default function sitemap() {
  const baseUrl = "https://anshumanpati.vercel.app";

  const projectRoutes = [
    "/projects/shatru",
    "/projects/gani",
    "/projects/ecoai",
    "/projects/glider",
    "/projects/nerobot",
    "/projects/password-manager",
    "/projects/pcfr",
    "/projects/rock-paper-and-scissor",
    "/projects/studyai",
    "/projects/unitech",
  ];

  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
