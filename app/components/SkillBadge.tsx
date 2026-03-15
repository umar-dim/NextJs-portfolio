import { skillProficiencyMap } from "../data/skills";

const proficiencyColors: Record<string, string> = {
  Beginner: "from-red-200 to-red-400 text-red-800 dark:from-red-900/50 dark:to-red-800/50 dark:text-red-200",
  Intermediate: "from-yellow-200 to-yellow-400 text-yellow-800 dark:from-yellow-900/50 dark:to-yellow-800/50 dark:text-yellow-200",
  Advanced: "from-blue-200 to-blue-400 text-blue-800 dark:from-blue-900/50 dark:to-blue-800/50 dark:text-blue-200",
  Expert: "from-green-200 to-green-400 text-green-800 dark:from-green-900/50 dark:to-green-800/50 dark:text-green-200",
};

const defaultColor = "from-neutral-200 to-neutral-400 text-neutral-800 dark:from-neutral-700 dark:to-neutral-600 dark:text-neutral-200";

interface SkillBadgeProps {
  skill: string;
  className?: string;
}

export function SkillBadge({ skill, className = "" }: SkillBadgeProps) {
  const proficiency = skillProficiencyMap[skill];
  const colorClass = proficiency ? proficiencyColors[proficiency] : defaultColor;

  return (
    <span className={`px-3 py-1 text-sm font-medium rounded-full bg-linear-to-r ${colorClass} ${className}`}>
      {skill}
    </span>
  );
}
