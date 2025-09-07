export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectLink {
  type: "demo" | "github" | "figma" | "notion" | "youtube";
  url: string;
  label: string;
}

export interface TechnicalChoice {
  title: string;
  description: string;
  reasons: string[];
}
export interface ProjectProject {
  id: string;
  title: string;
  description: string;
  contents: string[];
}
export interface ProjectData {
  id: string;
  title: string;
  company: string;
  period: string;
  role: string;
  description: string;
  techStack: string[];
  background: string;
  responsibilities: string[];
  technicalChoices?: TechnicalChoice[];
  achievements: string[];
  learnings: string[];
  images: ProjectImage[];
  highlights: string[];
  projects?: ProjectProject[];
}
