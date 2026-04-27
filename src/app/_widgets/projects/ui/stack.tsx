import { Project } from "@/app/_types/project";
import { motion } from "framer-motion";

export default function ProjectStack({ project }: Project) {
  return (
    <motion.div
      className="flex flex-row gap-2 flex-wrap"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {project.techStack.map((tech, i) => (
        <span
          key={`${tech}_${i}`}
          className="dark:bg-amber-100 text-sm dark:text-black bg-gray-400 text-white px-2 py-1 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform"
        >
          {tech}
        </span>
      ))}
    </motion.div>
  );
}
