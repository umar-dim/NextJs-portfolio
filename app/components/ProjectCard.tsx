"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { SkillBadge } from "./SkillBadge";

const ProjectCard: React.FC<Project> = ({
  id,
  name,
  description,
  technologies,
  icon: Icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <Link
        href={`/projects/${id}`}
        className="group relative block h-full w-full bg-white rounded-xl shadow-md dark:bg-neutral-800 overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative p-6 flex flex-col h-full  bg-white dark:bg-neutral-800">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
              <Icon className="w-6 h-6 text-neutral-600 dark:text-neutral-300" />
            </div>
            <div className="flex-1">
              <p className="text-xl font-bold text-gray-800 dark:text-white">
                {name}
              </p>
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
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
