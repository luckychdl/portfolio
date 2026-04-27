import ProjectsHeader from "../_widgets/projects/ui/header";
import ProjectsMenu from "../_widgets/projects/ui/projectsMenu";
import ProjectCard from "../_widgets/projects/ui/projectCard";
export default function Projects() {
  return (
    <div className="flex lg:flex-row flex-col items-start justify-start w-full h-full lg:w-[calc(100dvw - 300px)] lg:h-[calc(100dvh-60px-76px)] py-2 ">
      <div className="flex flex-col py-8 gap-y-4 relative lg:w-[300px]  w-full lg:h-full">
        <ProjectsHeader />
        <ProjectsMenu />
      </div>

      <ProjectCard />
    </div>
  );
}
