"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  icon: React.ReactNode;
  position?: string;
  description: string;
  date: string;
  title: string;
  index: number;
}

export default function Timeline({
  icon,
  position,
  description,
  date,
  title,
  index,
}: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="panel panel-hover group p-5 sm:p-6"
    >
      <span className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-accent md:hidden">
        {date}
      </span>

      <h3 className="font-display text-xl font-semibold tracking-tight text-fg">
        {title}
      </h3>

      {position && (
        <span className="mt-2.5 inline-block rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-[11px] tracking-[0.08em] text-muted">
          {position}
        </span>
      )}

      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </motion.div>
  );

  const dateBlock = (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className={`hidden items-center md:flex ${
        isLeft ? "justify-start pl-2" : "justify-end pr-2"
      }`}
    >
      <span className="font-mono text-sm tracking-[0.14em] text-faint">
        {date}
      </span>
    </motion.div>
  );

  return (
    <li className="relative pl-16 md:pl-0">
      {/* node */}
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: "backOut" }}
        className="absolute top-5 left-[28px] z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-line bg-canvas text-accent shadow-[0_0_0_5px_var(--canvas),0_0_24px_var(--accent-glow)] md:left-1/2"
      >
        <span className="text-[15px]">{icon}</span>
      </motion.span>

      <div className="md:grid md:grid-cols-2 md:items-center md:gap-16">
        {isLeft ? (
          <>
            <div className="md:text-right md:[&_h3]:text-right">{card}</div>
            {dateBlock}
          </>
        ) : (
          <>
            {dateBlock}
            <div>{card}</div>
          </>
        )}
      </div>
    </li>
  );
}
