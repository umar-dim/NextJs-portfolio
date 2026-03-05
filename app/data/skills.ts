export interface SkillItem {
  skill: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface SkillCategory {
  skillType: string;
  skills: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    skillType: "Languages",
    skills: [
      { skill: "Dart", proficiency: "Advanced" },
      { skill: "C/C++", proficiency: "Intermediate" },
      { skill: "Java", proficiency: "Advanced" },
      { skill: "Python", proficiency: "Advanced" },
      { skill: "HTML", proficiency: "Advanced" },
      { skill: "CSS", proficiency: "Advanced" },
      { skill: "JavaScript", proficiency: "Advanced" },
      { skill: "TypeScript", proficiency: "Advanced" },
      { skill: "Rust", proficiency: "Beginner" },
      { skill: "F#", proficiency: "Beginner" },
      { skill: "Go", proficiency: "Beginner" },
      { skill: "Scala", proficiency: "Beginner" },
    ],
  },
  {
    skillType: "Frameworks",
    skills: [
      { skill: "React", proficiency: "Advanced" },
      { skill: "Node.js", proficiency: "Advanced" },
      { skill: "Next.js", proficiency: "Advanced" },
      { skill: "Flutter", proficiency: "Advanced" },
      { skill: "PostgreSQL", proficiency: "Intermediate" },
      { skill: "Express", proficiency: "Advanced" },
      { skill: "Django", proficiency: "Intermediate" },
      { skill: "Jira", proficiency: "Intermediate" },
      { skill: "Redux", proficiency: "Intermediate" },
      { skill: "TensorFlow", proficiency: "Intermediate" },
      { skill: "Apache Spark", proficiency: "Intermediate" },
      { skill: "Hadoop MapReduce", proficiency: "Intermediate" },
      { skill: "DeepLearning4J", proficiency: "Intermediate" },
    ],
  },
  {
    skillType: "Developer Tools",
    skills: [
      { skill: "Android Studio", proficiency: "Intermediate" },
      { skill: "Docker", proficiency: "Intermediate" },
      { skill: "Git", proficiency: "Advanced" },
      { skill: "GitHub", proficiency: "Advanced" },
      { skill: "VS Code", proficiency: "Expert" },
      { skill: "Visual Studio", proficiency: "Intermediate" },
      { skill: "JUnit Testing", proficiency: "Intermediate" },
    ],
  },
];

export const skillProficiencyMap: Record<string, string> = skills.reduce(
  (acc, category) => {
    category.skills.forEach((skill) => {
      acc[skill.skill] = skill.proficiency;
    });
    return acc;
  },
  {} as Record<string, string>
);
