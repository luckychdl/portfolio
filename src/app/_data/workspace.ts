import { projectsData } from "./projects";

export type FileKind = "md" | "ts" | "json";

export type FileNode = {
  /** stable id, also used as the command-palette key */
  id: string;
  /** file name shown in the explorer and tabs */
  name: string;
  href: string;
  /** language shown in the status bar */
  lang: string;
  kind: FileKind;
  /** folder the file lives in, if any */
  dir?: string;
};

export const projectFiles: FileNode[] = projectsData.map((project) => ({
  id: project.slug,
  name: `${project.slug}.md`,
  href: `/projects/${project.slug}`,
  lang: "Markdown",
  kind: "md",
  dir: "projects",
}));

export const readmeFile: FileNode = {
  id: "readme",
  name: "README.md",
  href: "/",
  lang: "Markdown",
  kind: "md",
};

export const careerFile: FileNode = {
  id: "career",
  name: "timeline.ts",
  href: "/about",
  lang: "TypeScript",
  kind: "ts",
  dir: "career",
};

export const educationFile: FileNode = {
  id: "education",
  name: "education.ts",
  href: "/education",
  lang: "TypeScript",
  kind: "ts",
  dir: "career",
};

export const skillsFile: FileNode = {
  id: "skills",
  name: "stack.json",
  href: "/skills",
  lang: "JSON",
  kind: "json",
  dir: "skills",
};

export const contactFile: FileNode = {
  id: "contact",
  name: "contact.json",
  href: "/contact",
  lang: "JSON",
  kind: "json",
};

export const folders: { name: string; files: FileNode[] }[] = [
  { name: "career", files: [careerFile, educationFile] },
  { name: "skills", files: [skillsFile] },
  { name: "projects", files: projectFiles },
];

export const rootFiles: FileNode[] = [readmeFile, contactFile];

export const allFiles: FileNode[] = [
  readmeFile,
  careerFile,
  educationFile,
  skillsFile,
  ...projectFiles,
  contactFile,
];

/** Resolve the file a pathname is showing. */
export function fileForPath(pathname: string): FileNode {
  if (pathname.startsWith("/projects/")) {
    const slug = pathname.split("/")[2] ?? "";
    return (
      projectFiles.find((file) => file.href === `/projects/${slug}`) ??
      projectFiles[0]
    );
  }
  return allFiles.find((file) => file.href === pathname) ?? readmeFile;
}

/** Tabs that are "open" in the editor for a given route. */
export function openTabsForPath(pathname: string): FileNode[] {
  const tabs: FileNode[] = [readmeFile, careerFile, skillsFile];

  if (pathname === educationFile.href) {
    tabs.push(educationFile);
  }

  if (pathname.startsWith("/projects")) {
    tabs.push(fileForPath(pathname));
  }

  tabs.push(contactFile);
  return tabs;
}
