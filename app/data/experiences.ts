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
    id: "ingenio-care",
    date: "January 2025 - Current",
    category: "Work",
    title: "Software Development Intern",
    description:
      "Full-stack development on a healthcare network platform using React, Node.js, Sequelize, and PostgreSQL.",
    company: "Ingenio Care Inc.",
    companyImg: "/ingenio.png",
    responsibilities: [
      "Contributed to full-stack development using React, Node.js, Sequelize, and PostgreSQL on a healthcare network platform",
      "Reduced bug rates by 30% through extensive testing and debugging cycles",
      "Engineered scalable features and optimized backend services",
      "Resolved over 15 technical issues under tight deadlines",
      "Participated in agile practices and cross-functional collaboration",
    ],
    achievements: [
      "Reduced bug rates by 30% through extensive testing and debugging",
      "Improved system responsiveness and reliability",
      "Resolved 15+ technical issues in a fast-paced startup environment",
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
