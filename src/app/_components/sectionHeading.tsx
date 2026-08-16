export default function SectionHeading({
  eyebrow,
  title,
  description,
  index,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  /** small monospace counter shown on the right, e.g. "01" */
  index?: string;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 border-b border-line pb-6">
      <div className="flex flex-col gap-3">
        <span className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.35em] text-faint uppercase">
          <span className="h-px w-8 bg-gradient-to-r from-accent-soft to-transparent" />
          {eyebrow}
        </span>
        <h1 className="font-display text-[clamp(2rem,5.5vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.03em] text-fg">
          {title}
        </h1>
        {description && (
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>

      {index && (
        <span
          aria-hidden
          className="hidden font-display text-6xl font-bold text-transparent [-webkit-text-stroke:1px_var(--line-strong)] sm:block"
        >
          {index}
        </span>
      )}
    </div>
  );
}
