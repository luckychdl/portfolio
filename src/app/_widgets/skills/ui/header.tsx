import { GiSkills } from "react-icons/gi";
export default function SkillsHeader() {
  return (
    <div className="flex flex-row items-center justify-start gap-x-2">
      <GiSkills className="w-12 h-10 text-black dark:text-amber-100" />
      <h2 className="text-black dark:text-amber-100 text-4xl">SKILLS</h2>
    </div>
  );
}
