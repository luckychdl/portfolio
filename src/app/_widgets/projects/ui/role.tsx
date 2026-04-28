"use client";

import { Project } from "@/app/_types/project";
import { motion } from "framer-motion";

export default function ProjectRole({ project }: Project) {
  return (
    <motion.div
      className="border-1 p-4 rounded-2xl bg-black text-white flex w-full flex-col gap-y-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-bold text-lg">{project.company}</p>
      <p className="text-sm">{project.period}</p>
      {project.role.map((role, idx) => (
        <span
          key={`${role}_${idx}`}
          className="w-full flex justify-center items-center bg-white text-black rounded-2xl px-2 py-1 font-bold text-sm"
        >
          {role}
        </span>
      ))}
    </motion.div>
  );
}
