import { skillsData } from "@/app/_data/skills";
import Badge from "./badge";

export default function BadgeContainer() {
  return (
    <section
      id="skills"
      className="w-full h-full flex text-white px-6 py-10 lg:items-center justify-center"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skillsData.map((skill) => (
          <Badge
            key={skill.name}
            name={skill.name}
            level={skill.level}
            project={skill.project}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
}
