import type { Metadata } from "next";
import ResumeContent from "./components/ResumeContent";

export const metadata: Metadata = {
  title: "Umar's Resume - Software Developer",
  description:
    "View the resume of Umar Khan, a software developer with experience in web development, machine learning, and more.",
  keywords:
    "Umar Khan, resume, software developer, full-stack developer, web development, machine learning, React, Node.js, Python",
  authors: [{ name: "Umar Khan" }],
  openGraph: {
    title: "Umar's Resume - Software Developer",
    description:
      "View the resume of Umar Khan, a software developer with experience in web development, machine learning, and more.",
    type: "website",
    images: ["/card.jpg"],
  },
  twitter: {
    title: "Umar's Resume - Software Developer",
    description:
      "View the resume of Umar Khan, a software developer with experience in web development, machine learning, and more.",
    images: ["/card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumePage() {
  return (
    <main className="flex justify-center pt-10 pb-4 flex-col gap-5 min-h-0 container md:px-6 py-4 mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white px-6">
        My Resume
      </h1>
      <ResumeContent />
    </main>
  );
}
