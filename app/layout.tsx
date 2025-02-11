import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Layout } from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Le Hoang | Portfolio",
  description:
    "Explore Le Hoang's professional journey, skills, projects, and get in touch through his detailed portfolio website.",
  keywords: [
    "Le Hoang",
    "Portfolio",
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
    "Full Stack Developer",
    "Web Development",
    "Software Engineer",
    "C#",
    ".Net",
    "Node.js",
    "Express.js",
    "React",
    "Next.js",
    "SQL",
    "NoSQL",
    "TypeScript",
    "JavaScript",
  ],
  openGraph: {
    title: "Le Hoang | Portfolio",
    description:
      "Explore Le Hoang's professional journey, skills, projects, and get in touch through his detailed portfolio website.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Le Hoang's Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/djujqhqnd/image/upload/v1739246440/portfolio_ii1m3o.png",
        width: 800,
        height: 600,
        alt: "Le Hoang's portfolio",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Hoang | Portfolio",
    description:
      "Explore Le Hoang's professional journey, skills, projects, and get in touch through his detailed portfolio website.",
    images:
      "https://res.cloudinary.com/djujqhqnd/image/upload/v1739246440/portfolio_ii1m3o.png",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
