import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://anshumanpati.vercel.app"),
  title: {
    default: "Anshuman Pati | AI Research Engineer",
    template: "%s | Anshuman Pati",
  },
  description:
    "Portfolio of Anshuman Pati — AI Research Engineer specializing in real-time computer vision, edge ML systems, YOLOv8, and LLM security. Author of published IEEE research and winner of Altaria v1.0.",
  keywords: [
    "Anshuman Pati",
    "AI Research Engineer",
    "Machine Learning Engineer",
    "Computer Vision",
    "YOLOv8",
    "Edge AI",
    "Shatru Backdoor Detection",
    "Drishti Scene Collector",
    "IEEE TEMSCON-ASPAC",
    "Altaria Hackathon Winner",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Anshuman Pati", url: "https://github.com/anshu2k24" }],
  creator: "Anshuman Pati",
  publisher: "Anshuman Pati",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://anshumanpati.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anshumanpati.vercel.app",
    title: "Anshuman Pati | AI Research Engineer",
    description:
      "Building robust, deployable ML systems from RTSP vision pipelines to runtime LLM backdoor detection.",
    siteName: "Anshuman Pati Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshuman Pati | AI Research Engineer",
    description:
      "Building robust, deployable ML systems from RTSP vision pipelines to runtime LLM backdoor detection.",
    creator: "@anshu2k24",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anshuman Pati",
  url: "https://anshumanpati.vercel.app",
  jobTitle: "AI Research Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Dayananda Sagar College of Engineering",
  },
  sameAs: [
    "https://github.com/anshu2k24",
    "https://www.linkedin.com/in/anshu2k24",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "YOLOv8",
    "Edge Computing",
    "Large Language Models",
    "Robotics",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
