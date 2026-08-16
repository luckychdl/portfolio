import { notFound } from "next/navigation";
import { projectBySlug, projectsData } from "@/app/_data/projects";
import ProjectDoc from "@/app/_widgets/projects/ui/projectDoc";

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project) notFound();

  return <ProjectDoc project={project} />;
}
