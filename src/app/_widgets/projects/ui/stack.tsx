"use client";

import { Project } from "@/app/_types/project";
import { motion } from "framer-motion";

export default function ProjectStack({ project }: Project) {
  return (
    <motion.div
      className="flex flex-row flex-wrap items-center gap-2"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <span className="mr-1 font-mono text-[10px] tracking-[0.22em] text-faint uppercase">
        Stack
      </span>
      {project.techStack.map((tech, i) => (
        <span
          key={`${tech}_${i}`}
          className="rounded-lg border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted transition-colors duration-300 hover:border-line-strong hover:text-fg"
        >
          {tech}
        </span>
      ))}
    </motion.div>
  );
}
