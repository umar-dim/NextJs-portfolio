import {
  User,
  Ticket,
  ShoppingCart,
  Palette,
  MessageCircle,
  Home,
  Gamepad2,
  Code,
  Cpu,
  Network,
  Search,
  FileArchive,
  BarChart3,
  Calendar,
  Brain,
} from "lucide-react";

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  dateCompleted: string;
  motivation: string;
  learnings: string[];
  icon: React.ElementType;
}

export const projects: Project[] = [
  {
    id: "sunnah-lens",
    name: "Sunnah Lens",
    description:
      "Describe a topic in plain English and get the matching hadith from 29,653 narrations. Gemini embeddings power meaning-based search, and an AI chat answers citing only the hadith it retrieved.",
    technologies: [
      "Next.js",
      "FastAPI",
      "pgvector",
      "Gemini",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "RAG",
    ],
    githubLink: "https://github.com/umar-dim/Sunnah-Lens",
    liveLink: "https://sunnahlens.com",
    dateCompleted: "August 2026",
    motivation:
      "Built so everyday Muslims can find what the Prophet ﷺ said about a topic by describing it in plain words, without needing book names, hadith numbers, or Arabic search terms.",
    learnings: [
      "Built a RAG chat pipeline: an LLM extracts search keywords, Gemini embeds the question, pgvector retrieves the top 8 hadith, and FastAPI streams a grounded, cited answer over Server-Sent Events",
      "Engineered prompt guardrails that restrict answers to the retrieved hadith, require inline [n] citations mapped to source cards, and say plainly when the sources don't cover a question",
      "Implemented semantic search with a pgvector HNSW index plus collection and sub-book filters",
      "Added an embedding cache and per-IP rate limiting to control LLM and embedding API costs",
      "Rendered Arabic text as first-class content with correct RTL layout and typography",
    ],
    icon: Search,
  },
  {
    id: "llm-pipeline",
    name: "LLM Pipeline",
    description:
      "A distributed training pipeline for language models on AWS EMR, covering tokenization, embeddings, and transformer training at scale.",
    technologies: [
      "Scala",
      "Apache Spark",
      "AWS EMR",
      "Hadoop MapReduce",
      "DeepLearning4J",
      "JTokkit",
    ],
    githubLink: "https://github.com/umar-dim/llm-pipeline",
    dateCompleted: "November 2024",
    motivation:
      "Developed to explore distributed machine learning and large-scale text processing for LLM training.",
    learnings: [
      "Processed a large-scale text corpus beyond single-machine memory limits, covering preprocessing, BPE tokenization, and transformer training",
      "Parallelized tokenization, vocabulary construction, and embedding computation across Hadoop MapReduce and Spark on AWS EMR",
      "Developed parameter-sharing and distributed training strategies",
      "Tracked loss, gradient norms, and cluster resource utilization to evaluate performance",
    ],
    icon: Brain,
  },
  {
    id: "evently",
    name: "Evently",
    description: "A live campus events platform with ML-powered personalized recommendations that grew user engagement 40%, real-time scraped event data, and fraud-resistant QR check-in.",
    technologies: [
      "React",
      "Node.js",
      "Python",
      "Machine Learning",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/umar-dim/EVENTLY",
    liveLink: "https://evently.wiki",
    dateCompleted: "August 2024",
    motivation:
      "This project was developed to streamline event management at UIC and improve event attendance tracking with real-time QR code check-ins.",
    learnings: [
      "Trained a recommendation model on user RSVP history to power personalized event suggestions, growing engagement 40%",
      "Engineered a Node.js/Python scraping pipeline that aggregates and standardizes real-time event data from multiple sources",
      "Designed and deployed a secure, fraud-resistant QR code check-in system using the device camera",
      "Integrated Google OAuth for authentication",
      "Built an admin dashboard for event management and QR code generation",
    ],
    icon: Ticket,
  },
  {
    id: "smart-grocery-app",
    name: "Smart Grocery",
    description:
      "A cross-platform mobile application built with Flutter that helps users manage their grocery shopping, discover recipes, and get personalized recommendations.",
    technologies: ["Flutter", "Dart", "SQLite", "Machine Learning", "Git", "Jira"],
    githubLink: "https://github.com/umar-dim/Smart-Grocery",
    dateCompleted: "March 2024",
    motivation:
      "Created to simplify grocery shopping and enhance user experience with intelligent recipe and product suggestions.",
    learnings: [
      "Built a responsive cross-platform UI using Flutter",
      "Implemented secure authentication with hashed passwords and SQLite database integration",
      "Integrated 1000+ recipes with search and filtering capabilities",
      "Developed a machine learning-powered recommendation system",
      "Used Git for version control and Jira for agile task management",
      "Improved user engagement by 35% and recipe conversions by 25%",
    ],
    icon: ShoppingCart,
  },
  {
    id: "nostalgia-threads",
    name: "Nostalgia Threads",
    description: "A full-stack social platform for sharing cultural memories by region and tag, with tag autocomplete, a trending feed, and live emoji reactions.",
    technologies: ["React", "Django", "Python", "Java", "TypeScript", "Git"],
    githubLink: "https://github.com/umar-dim/Nostalgia-Threads",
    dateCompleted: "January 2024",
    motivation:
      "Created to build a space where people can connect through shared cultural experiences and preserve personal memories in a meaningful, community-driven way.",
    learnings: [
      "Implemented a Trie for tag autocomplete and a priority queue to surface trending memories",
      "Designed RESTful Django APIs for memory creation, retrieval, tag-based filtering, and real-time reaction updates",
      "Built a React frontend with a live feed and emoji reactions",
      "Implemented user authentication and interactive UI components",
    ],
    icon: MessageCircle,
  },
  {
    id: "portfolio-nextjs",
    name: "Portfolio Website (Next.js)",
    description:
      "A modern personal portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring static data and responsive design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion"],
    githubLink: "https://github.com/umar-dim/portfolio-nextjs",
    liveLink: "https://umarahmedkhan.vercel.app/",
    dateCompleted: "March 2025",
    motivation:
      "Created a modern, responsive portfolio website to showcase projects and skills using the latest web technologies.",
    learnings: [
      "Implemented static data-driven content with Next.js",
      "Learned responsive layouts with Tailwind CSS",
      "Improved TypeScript skills with React",
      "Gained experience with Next.js App Router and server-side rendering",
    ],
    icon: User,
  },
  {
    id: "moodcanvas",
    name: "MoodCanvas",
    description:
      "A mindful tech mobile application built with Flutter for Sparkhacks 2024 that promotes mental wellness through journaling, habit tracking, and mood monitoring.",
    technologies: ["Flutter", "Dart", "Material Design"],
    githubLink: "https://github.com/mkatra3/MoodCanvas",
    dateCompleted: "October 2024",
    motivation:
      "Built during UIC Sparkhacks 2024 (Track 1: Mindful Tech) to promote mental wellness and self-awareness through a user-friendly mobile experience.",
    learnings: [
      "Designed and implemented a comprehensive mental health dashboard",
      "Integrated mood tracking, journaling (text + image), and habit monitoring features",
      "Built calendar and timeline views to visualize progress over time",
      "Created visual graphs for mood and habit trends",
      "Curated a wellness content feed with personalized recommendations",
      "Integrated UIC mental health resources for accessibility",
    ],
    icon: Palette,
  },
  {
    id: "real-estate-predictor",
    name: "Real Estate Investment Predictor",
    description:
      "A machine learning-powered analysis of Chicago's real estate market using Zillow Home Value Index (ZHVI) data to identify high-potential investment opportunities across neighborhoods.",
    technologies: [
      "Python",
      "Jupyter Notebooks",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "XGBoost",
    ],
    githubLink: "https://github.com/umar-dim/Scientific-data-analysis",
    dateCompleted: "January 2024",
    motivation:
      "Created to assist real estate investors in making data-driven decisions by forecasting property values and analyzing neighborhood trends in Chicago.",
    learnings: [
      "Performed extensive data cleaning and preprocessing on historical ZHVI and demographic data",
      "Developed ML models including XGBoost, Lasso, and Ridge to forecast home values",
      "Visualized trends in population density, property value, and neighborhood growth",
      "Achieved over 80% accuracy in price prediction",
      "Utilized cross-validation and grid search to tune hyperparameters",
    ],
    icon: Home,
  },
  {
    id: "three-card-poker",
    name: "3-Card Poker Game",
    description:
      "A full-stack multiplayer 3-card poker game built with Java and JavaFX, featuring real-time networking, smooth gameplay, and a scalable MVC architecture.",
    technologies: ["Java", "JavaFX", "Maven", "Git", "MVC Pattern", "TCP/IP"],
    githubLink: "https://github.com/umar-dim/3-Card-Poker",
    dateCompleted: "January 2024",
    motivation:
      "Built to explore scalable game development with real-time multiplayer capabilities and robust UI design in Java.",
    learnings: [
      "Implemented real-time multiplayer networking using TCP/IP protocols",
      "Designed an intuitive JavaFX-based UI for immersive gameplay",
      "Used multi-threading to improve responsiveness by 30%",
      "Built a server-client architecture supporting concurrent game sessions",
      "Followed Agile methodology and CI/CD practices for streamlined development",
    ],
    icon: Gamepad2,
  },
  // {
  //   id: "compact-files",
  //   name: "Compact Files",
  //   description:
  //     "A command-line text file compression and decompression tool using Huffman tree algorithm and custom hash map implementation.",
  //   technologies: ["C++", "Git"],
  //   githubLink: "https://github.com/umar-dim/compact-files",
  //   dateCompleted: "September 2022",
  //   motivation:
  //     "Built to understand file compression algorithms and low-level data structures.",
  //   learnings: [
  //     "Implemented Huffman tree/algorithm for lossless compression",
  //     "Used custom hash map for efficient data storage",
  //     "Designed clean multi-file architecture for the application",
  //     "Built custom library for reading/writing text and compressed files",
  //   ],
  //   icon: FileArchive,
  // },
  // {
  //   id: "search-engine",
  //   name: "Search Engine",
  //   description:
  //     "An efficient console-based search engine implementation using inverted index data structure for fast text retrieval.",
  //   technologies: ["C++", "Git"],
  //   githubLink: "https://github.com/umar-dim/search-engine",
  //   dateCompleted: "September 2022",
  //   motivation:
  //     "Created to understand how search engines work internally and implement efficient indexing algorithms.",
  //   learnings: [
  //     "Implemented inverted index data structure for fast search",
  //     "Parsed and cleaned web page text into search tokens",
  //     "Executed set operations on search results",
  //     "Designed efficient data structures for URL pairing with tokens",
  //   ],
  //   icon: Search,
  // },
  {
    id: "wordle-solver",
    name: "Wordle Solver",
    description:
      "A command-line bot that solves Wordle puzzles by analyzing possible words from a database and finding the optimal guess.",
    technologies: ["C", "Git"],
    githubLink: "https://github.com/umar-dim/wordle-211",
    dateCompleted: "November 2022",
    motivation:
      "Built to explore algorithm optimization and constraint-based solving approaches.",
    learnings: [
      "Implemented word filtering algorithm based on guess feedback",
      "Used frequency analysis to optimize guess selection",
      "Solved Wordle puzzles in maximum 7 guesses",
    ],
    icon: Code,
  },
  {
    id: "level-game",
    name: "Level Game",
    description:
      "A dynamic adventure game built using Python and Turtle graphics where Mario collects coins while avoiding ghosts across multiple levels.",
    technologies: ["Python", "Turtle Graphics"],
    githubLink: "https://github.com/umar-dim/Level-Game",
    dateCompleted: "December 2021",
    motivation:
      "This was my first Python project, created to learn the fundamentals of programming through game development using Turtle graphics.",
    learnings: [
      "Learned basic Python syntax and control flow",
      "Built interactive game mechanics using Turtle graphics",
      "Implemented real-time character movement and enemy AI logic",
      "Used randomization to dynamically place coins and increase replayability",
      "Understood the principles of event-driven programming",
    ],
    icon: Code,
  },
];
