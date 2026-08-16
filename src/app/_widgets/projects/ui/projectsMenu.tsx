"use client";

import { projectsData } from "@/app/_data/projects";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsMenu({ activeType }: { activeType: string }) {
  // Highlight the clicked tab immediately, before the server responds.
  const [selected, setSelected] = useState(activeType);

  useEffect(() => setSelected(activeType), [activeType]);

  return (
    <nav className="scrollbar-hide -mx-5 flex flex-row gap-2 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
      {projectsData.map((project, idx) => {
        const isActive = selected === project.id;

        return (
          <Link
            href={`/projects?type=${encodeURIComponent(project.id)}`}
            key={`${project.id}_${idx}`}
            scroll={false}
            onClick={() => setSelected(project.id)}
            className={`group relative flex min-w-fit shrink-0 items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-300 lg:w-full ${
              isActive ? "text-fg" : "text-faint hover:text-muted"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="project-indicator"
                className="absolute inset-0 -z-10 rounded-xl border border-line bg-surface-2"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            )}

            <span
              className={`font-mono text-[10px] transition-colors duration-300 ${
                isActive ? "text-accent" : "text-faint/70"
              }`}
            >
              {String(idx + 1).padStart(2, "0")}
            </span>

            <span className="font-display text-sm font-semibold tracking-[0.1em] whitespace-nowrap uppercase">
              {project.company}
            </span>

            {isActive && (
              <motion.span
                layoutId="project-indicator-bar"
                aria-hidden
                className="absolute top-1/2 -left-px hidden h-6 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-accent-soft to-accent-2 lg:block"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
