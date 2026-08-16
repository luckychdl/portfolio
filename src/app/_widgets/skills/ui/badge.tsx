"use client";

import { motion } from "framer-motion";

type Level = "Beginner" | "Intermediate" | "Advanced" | "Basic";

interface SkillBadgeProps {
  name: string;
  level: Level;
  project?: string;
  icon?: React.ReactElement;
  index?: number;
}

const levelMeta: Record<
  Level,
  { steps: number; dot: string; text: string; bar: string }
> = {
  Advanced: {
    steps: 3,
    dot: "bg-emerald-400",
    text: "text-emerald-500 dark:text-emerald-300",
    bar: "from-emerald-400 to-emerald-500",
  },
  Intermediate: {
    steps: 2,
    dot: "bg-accent-soft",
    text: "text-accent",
    bar: "from-accent-soft to-accent",
  },
  Beginner: {
    steps: 1,
    dot: "bg-sky-400",
    text: "text-sky-500 dark:text-sky-300",
    bar: "from-sky-400 to-sky-500",
  },
  Basic: {
    steps: 1,
    dot: "bg-rose-400",
    text: "text-rose-500 dark:text-rose-300",
    bar: "from-rose-400 to-rose-500",
  },
};

export default function Badge({
  name,
  level,
  project,
  icon,
  index = 0,
}: SkillBadgeProps) {
  const meta = levelMeta[level];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.04, 0.4),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="panel panel-hover group relative flex flex-col justify-between gap-4 p-4 sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          {icon}
          <p className="font-display text-[15px] font-semibold tracking-tight text-fg">
            {name}
          </p>
        </div>
        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${meta.dot}`} />
      </div>

      <div className="flex flex-col gap-2">
        {/* level meter */}
        <div className="flex gap-1">
          {[0, 1, 2].map((step) => (
            <span
              key={step}
              className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                step < meta.steps
                  ? `bg-gradient-to-r ${meta.bar}`
                  : "bg-surface-2"
              }`}
            />
          ))}
        </div>
        <span
          className={`font-mono text-[10px] tracking-[0.18em] uppercase ${meta.text}`}
        >
          {level}
        </span>
      </div>

      {project && (
        <div className="border-t border-line pt-3">
          <p className="mb-1 font-mono text-[9px] tracking-[0.22em] text-faint uppercase">
            Related
          </p>
          <p className="text-[11px] leading-relaxed text-muted transition-colors duration-300 group-hover:text-fg">
            {project}
          </p>
        </div>
      )}
    </motion.div>
  );
}
