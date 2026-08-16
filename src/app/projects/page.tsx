import { redirect } from "next/navigation";
import { projectsData } from "../_data/projects";

/** `projects/` 폴더에는 문서가 없으므로 첫 파일을 연다. */
export default function ProjectsIndex() {
  redirect(`/projects/${projectsData[0].slug}`);
}
