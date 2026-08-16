import { skillsData } from "@/app/_data/skills";

const legend = [
  { label: "Advanced", dot: "bg-emerald-400" },
  { label: "Intermediate", dot: "bg-accent-soft" },
  { label: "Beginner", dot: "bg-sky-400" },
  { label: "Basic", dot: "bg-rose-400" },
] as const;

/** Level legend + counts shown above the skill grid. */
export default function SkillsLegend() {
  const counts = skillsData.reduce<Record<string, number>>((acc, skill) => {
    acc[skill.level] = (acc[skill.level] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2">
      {legend
        .filter((item) => counts[item.label])
        .map((item) => (
          <span
            key={item.label}
            className="flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-faint uppercase"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${item.dot}`} />
            {item.label}
            <span className="text-faint/60">{counts[item.label]}</span>
          </span>
        ))}
    </div>
  );
}
