import SectionHeading from "../_components/sectionHeading";
import ProjectsMenu from "../_widgets/projects/ui/projectsMenu";
import ProjectCard from "../_widgets/projects/ui/projectCard";
import { projectsData } from "../_data/projects";

/**
 * `type` is resolved here on the server and handed down as props.
 *
 * Reading it client-side with `useSearchParams()` forces a Suspense boundary
 * that bails out to client rendering, and on client-side navigation that
 * boundary can get stuck on its fallback — the page then shows nothing but a
 * spinner. Resolving the query on the server removes the boundary entirely.
 */
export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const project =
    projectsData.find((item) => item.id === type) ?? projectsData[0];

  return (
    <div className="mx-auto w-full max-w-[1400px]">
      <SectionHeading
        eyebrow="Projects"
        title="프로젝트 아카이브"
        description="회사와 외주에서 진행한 프로젝트의 배경, 기술적 선택, 성과를 정리했습니다."
        index="03"
      />

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
        <aside className="lg:w-[230px] lg:shrink-0">
          <div className="lg:sticky lg:top-24">
            <ProjectsMenu activeType={project.id} />
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <ProjectCard project={project} />
        </div>
      </div>
    </div>
  );
}
