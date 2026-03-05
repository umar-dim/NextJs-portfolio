"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";
import { experiences } from "../../data/experiences";
import { skills } from "../../data/skills";
import { projects } from "../../data/projects";

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const ResumeContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-6 md:p-10"
    >
      <motion.header variants={item} className="text-center mb-10 border-b pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
          Umar Khan
        </h1>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600 dark:text-neutral-400">
          <span>224-666-7151</span>
          <span>|</span>
          <Link
            href="mailto:khanumar394@gmail.com"
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
            khanumar394@gmail.com
          </Link>
          <span>|</span>
          <Link
            href="https://www.linkedin.com/in/umarkhan394/"
            target="_blank"
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Link>
          <span>|</span>
          <Link
            href="https://github.com/umar-dim"
            target="_blank"
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Link>
          <span>|</span>
          <Link
            href="https://umarahmedkhan.vercel.app/"
            target="_blank"
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Portfolio
          </Link>
        </div>
      </motion.header>

      <motion.section variants={item} className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b">
          Education
        </h2>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              University of Illinois
            </h3>
            <p className="text-gray-600 dark:text-neutral-400">
              Bachelor of Science in Computer Science
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-600 dark:text-neutral-400">Chicago, IL</p>
            <p className="text-gray-600 dark:text-neutral-400">May 2025</p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={item} className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b">
          Technical Skills
        </h2>
        <div className="space-y-4">
          {skills.map((category) => (
            <div key={category.skillType}>
              <h3 className="font-semibold text-gray-700 dark:text-neutral-300 mb-2">
                {category.skillType}:
              </h3>
              <p className="text-gray-600 dark:text-neutral-400 text-sm leading-relaxed">
                {category.skills.map((s) => s.skill).join(", ")}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={item} className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-neutral-400">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-neutral-500">
                  {exp.date}
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-neutral-400 text-sm space-y-1">
                {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={item}>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b">
          Projects
        </h2>
        <div className="space-y-4">
          {projects.slice(0, 6).map((project) => (
            <div key={project.id}>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {project.name}
                </Link>
                <span className="text-sm text-gray-500 dark:text-neutral-500">
                  {project.dateCompleted}
                </span>
              </div>
              <p className="text-gray-600 dark:text-neutral-400 text-sm mb-1">
                {project.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-neutral-500">
                {project.technologies.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ResumeContent;
