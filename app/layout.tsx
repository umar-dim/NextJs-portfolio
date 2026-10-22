import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const funnel = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Umar Khan · Full-Stack Developer Building with AI",
  description:
    "Umar Khan builds full-stack web apps end to end with AI inside: Next.js, FastAPI, PostgreSQL, and LLM-powered search and chat.",
  keywords:
    "Umar Khan, portfolio, full-stack developer, AI, new grad software engineer, web development, React, Node.js, programming, software engineering",
  authors: [{ name: "Umar Khan" }],
  openGraph: {
    title: "Umar Khan · Full-Stack Developer Building with AI",
    description:
      "Umar Khan builds full-stack web apps end to end with AI inside: Next.js, FastAPI, PostgreSQL, and LLM-powered search and chat.",
    type: "website",
    images: ["/card.jpg"],
  },
  twitter: {
    title: "Umar Khan · Full-Stack Developer Building with AI",
    description:
      "Umar Khan builds full-stack web apps end to end with AI inside: Next.js, FastAPI, PostgreSQL, and LLM-powered search and chat.",
    images: ["/card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${funnel.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
