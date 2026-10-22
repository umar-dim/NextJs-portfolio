"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../data/projects";
import { SkillBadge } from "./SkillBadge";

const ProjectCard: React.FC<Project> = ({
  id,
  name,
  description,
  technologies,
  githubLink,
  liveLink,
  icon: Icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="group relative h-full bg-white rounded-xl shadow-md dark:bg-neutral-800 overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative p-6 flex flex-col h-full">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
            <Icon className="w-6 h-6 text-neutral-600 dark:text-neutral-300" />
          </div>
          <div className="flex-1">
            {/* Stretched link: the whole card opens the project page */}
            <Link
              href={`/projects/${id}`}
              className="text-xl font-bold text-gray-800 dark:text-white after:absolute after:inset-0"
            >
              {name}
            </Link>
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.slice(0, 4).map((tech) => (
                <SkillBadge key={tech} skill={tech} className="px-2 py-1 text-xs" />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-3 text-gray-600 dark:text-neutral-400 line-clamp-3">
          {description}
        </p>
        <div className="relative z-10 flex gap-4 mt-auto pt-4 text-sm font-medium">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
