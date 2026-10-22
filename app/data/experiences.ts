export interface Experience {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  company: string;
  companyImg: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  learnings: string[];
}

export const experiences: Experience[] = [
  {
    id: "ingenio-care-engineer",
    date: "September 2025 - Present",
    category: "Work",
    title: "Full-Stack Software Engineer",
    description:
      "Own 5 provider-facing feature areas end to end on a multi-tenant healthcare platform handling PHI, from patient management and scheduling to billing, claims, and AI-assisted clinical workflows.",
    company: "Ingenio Care Inc.",
    companyImg: "/ingenio.png",
    responsibilities: [
      "Own 5 provider-facing feature areas end to end, including patient management, clinical workflows, scheduling, billing, and claims, in a multi-tenant healthcare platform handling PHI",
      "Designed role-based access control and multi-tenant authorization with JWT, enforcing per-tenant data isolation and API-level permissions across provider organizations",
      "Integrated telehealth video, payments, messaging, and AI-assisted clinical workflows via third-party APIs (EHR, Amazon Chime, Stripe, OpenAI)",
      "Strengthened CI/CD reliability by adding automated health checks and environment validation to GitHub Actions, catching issues before they reached production",
    ],
    achievements: [
      "Owns 5 provider-facing feature areas end to end",
      "Shipped per-tenant data isolation and API-level permissions across provider organizations",
      "Added automated health checks and environment validation to the CI/CD pipeline",
    ],
    technologies: ["JWT", "OpenAI API", "Stripe", "Amazon Chime", "GitHub Actions"],
    learnings: [],
  },
  {
    id: "ingenio-care",
    date: "January 2025 - September 2025",
    category: "Work",
    title: "Software Development Intern",
    description:
      "Built and shipped full-stack features on a healthcare network platform, from database schema through UI, using React, Node.js, Sequelize, and PostgreSQL.",
    company: "Ingenio Care Inc.",
    companyImg: "/ingenio.png",
    responsibilities: [
      "Built and shipped full-stack features on a healthcare network platform, from database schema through UI",
      "Cut bug rates 30% by expanding test coverage and tightening debugging cycles, catching regressions before they reached production",
      "Optimized backend services and query performance, improving system responsiveness as the platform's data and user load grew",
    ],
    achievements: [
      "Cut bug rates by 30% through expanded test coverage",
      "Improved system responsiveness as data and user load grew",
    ],
    technologies: ["React", "Node.js", "Sequelize", "PostgreSQL", "TypeScript"],
    learnings: [
      "Gained experience in full-stack healthcare application development",
      "Improved testing and debugging skills",
      "Learned agile methodologies in a startup environment",
    ],
  },
  {
    id: "uic-tutor",
    date: "January 2023 - December 2024",
    category: "Academic",
    title: "Computer Science Tutor",
    description:
      "Tutored students in programming concepts, data structures, algorithms, and multiple languages.",
    company: "University of Illinois Chicago",
    companyImg: "/uic.png",
    responsibilities: [
      "Delivered personalized feedback and assessments to students",
      "Conducted one-on-one coding sessions with real-world examples",
      "Mentored students in building web applications and solving algorithmic problems",
      "Tutored students in Java, Python, and C++",
    ],
    achievements: [
      "Led to 20% improvement in students' comprehension within three months",
      "Achieved 40% improvement in assignment grades and confidence",
    ],
    technologies: ["Java", "Python", "C++", "Data Structures", "Algorithms"],
    learnings: [
      "Strengthened foundational programming concepts",
      "Developed patience and communication skills",
      "Learned to break down complex concepts into simpler explanations",
    ],
  },
  {
    id: "uic-ta-flutter",
    date: "August 2023 - December 2024",
    category: "Academic",
    title: "Teaching Assistant - Flutter Framework",
    description:
      "Guided students in Flutter and Dart development, focusing on state management and widget lifecycle.",
    company: "University of Illinois Chicago",
    companyImg: "/uic.png",
    responsibilities: [
      "Guided students in understanding state management, asynchronous programming, and widget lifecycle in Flutter and Dart",
      "Delivered concise solutions to debugging tasks and architecture issues",
      "Simplified complex concepts using visual aids and practical examples",
      "Provided hands-on debugging support using Flutter DevTools",
    ],
    achievements: [
      "Aided students in resolving over 50 unique coding issues",
      "Emphasized modular design and code reusability",
    ],
    technologies: ["Flutter", "Dart", "Flutter DevTools"],
    learnings: [
      "Deepened understanding of Flutter framework",
      "Improved debugging and problem-solving skills",
      "Learned to teach complex concepts effectively",
    ],
  },
];
