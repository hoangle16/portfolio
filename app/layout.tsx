import type { Metadata } from "next";
import "@/styles/globals.css";
import { Layout } from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Portfolio | Le Hoang",
  description: "Fullstack developer portfolio",
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
