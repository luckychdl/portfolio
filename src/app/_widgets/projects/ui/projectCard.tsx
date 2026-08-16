"use client";

import { motion } from "framer-motion";
import { ProjectData } from "../../../_types/project";
import ProjectRole from "./role";
import CardContainer from "./cardContainer";
import ProjectImages from "./projectImages";

export default function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <motion.article
      key={project.id}
      id={project.id}
      className="flex w-full min-w-0 flex-col gap-4"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <ProjectRole project={project} />
      <CardContainer project={project} />
      <ProjectImages type={project.id} />
    </motion.article>
  );
}
