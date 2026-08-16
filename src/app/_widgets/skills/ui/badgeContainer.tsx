import { skillsData } from "@/app/_data/skills";
import Badge from "./badge";

export default function BadgeContainer() {
  return (
    <section id="skills" className="w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skillsData.map((skill, index) => (
          <Badge
            key={skill.name}
            name={skill.name}
            level={skill.level}
            project={skill.project}
            icon={skill.icon}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
