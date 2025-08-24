// components/SkillBadge.tsx
interface SkillBadgeProps {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Basic";
  project?: string;
  icon?: React.ReactElement;
}

export default function SkillBadge({
  name,
  level,
  project,
  icon,
}: SkillBadgeProps) {
  const levelColor = {
    Beginner: "bg-gray-500",
    Intermediate: "bg-yellow-500",
    Advanced: "bg-green-500",
    Basic: "bg-red-500",
  };

  return (
    <div className="relative group p-3 border border-beige rounded-xl bg-zinc-900 hover:shadow-md transition duration-300 ">
      <div className="text-beige font-semibold flex flex-row items-center gap-1 z-10">
        {icon}
        <p>{name}</p>
      </div>
      <div
        className={`mt-2 text-xs px-2 py-1 inline-block rounded z-10 ${levelColor[level]}`}
      >
        {level}
      </div>

      {project && (
        <div className="absolute top-full left-0 mt-2 hidden group-hover:block z-50 text-sm bg-black text-white border border-beige rounded p-2 w-60">
          관련 프로젝트: <br />
          <span className="font-light">{project}</span>
        </div>
      )}
    </div>
  );
}
