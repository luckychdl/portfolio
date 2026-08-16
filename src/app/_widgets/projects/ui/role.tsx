"use client";

import { Project } from "@/app/_types/project";
import { motion } from "framer-motion";
import ProjectStack from "./stack";

/** Project hero: company, period, title, description, roles and tech stack. */
export default function ProjectRole({ project }: Project) {
  return (
    <motion.header
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="panel relative overflow-hidden p-6 sm:p-8"
    >
      {/* corner glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,var(--accent-glow),transparent_65%)] blur-2xl"
      />

      <div className="relative flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-display text-xs font-semibold tracking-[0.3em] text-accent uppercase">
            {project.company}
          </span>
          <span aria-hidden className="h-3 w-px bg-line-strong" />
          <span className="font-mono text-xs tracking-[0.12em] text-faint">
            {project.period}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-display text-[clamp(1.5rem,3.4vw,2.4rem)] leading-[1.15] font-bold tracking-[-0.02em] text-balance text-fg">
            {project.title}
          </h2>
          <p className="max-w-2xl leading-relaxed text-muted">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.role.map((role, idx) => (
            <span
              key={`${role}_${idx}`}
              className="rounded-full bg-gradient-to-r from-accent-soft to-accent-2 px-3.5 py-1.5 font-display text-xs font-semibold tracking-[0.06em] text-canvas-deep shadow-[0_6px_20px_-8px_var(--accent-glow)]"
            >
              {role}
            </span>
          ))}
        </div>

        <div className="border-t border-line pt-5">
          <ProjectStack project={project} />
        </div>
      </div>
    </motion.header>
  );
}
