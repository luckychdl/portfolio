"use client";

import { ProjectLink } from "../_types/project";
import {
  HiOutlineExternalLink,
  HiOutlineCode,
  HiOutlineDocumentText,
  HiOutlinePlay,
} from "react-icons/hi";
import { SiFigma } from "react-icons/si";

interface ProjectLinksProps {
  links: ProjectLink[];
}

const getLinkIcon = (type: ProjectLink["type"]) => {
  switch (type) {
    case "demo":
      return <HiOutlineExternalLink className="w-4 h-4" />;
    case "github":
      return <HiOutlineCode className="w-4 h-4" />;
    case "figma":
      return <SiFigma className="w-4 h-4" />;
    case "notion":
      return <HiOutlineDocumentText className="w-4 h-4" />;
    case "youtube":
      return <HiOutlinePlay className="w-4 h-4" />;
    default:
      return <HiOutlineExternalLink className="w-4 h-4" />;
  }
};

const getLinkColor = (type: ProjectLink["type"]) => {
  switch (type) {
    case "demo":
      return "bg-blue-500 hover:bg-blue-600 text-white";
    case "github":
      return "bg-gray-800 hover:bg-gray-900 text-white";
    case "figma":
      return "bg-purple-500 hover:bg-purple-600 text-white";
    case "notion":
      return "bg-gray-600 hover:bg-gray-700 text-white";
    case "youtube":
      return "bg-red-500 hover:bg-red-600 text-white";
    default:
      return "bg-gray-500 hover:bg-gray-600 text-white";
  }
};

export default function ProjectLinks({ links }: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
            transition-all duration-200 transform hover:scale-105 hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            ${getLinkColor(link.type)}
          `}
          aria-label={`${link.label} (새 탭에서 열림)`}
        >
          {getLinkIcon(link.type)}
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}
