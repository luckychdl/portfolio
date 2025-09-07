"use client";
import TransitionWrapper from "../_components/transitionWrapper";
import { HiOutlineClipboardList } from "react-icons/hi";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "../_components/ProjectCard";
import { projectsData } from "../_data/projects";

export default function Projects() {
  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [activeType, setActiveType] = useState<string>(
    projectsData[0]?.id || "locuskorea"
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveType(id);
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(projectRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (projectId: string) => {
    setActiveType(projectId);
    projectRefs.current[projectId]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <TransitionWrapper>
      <div className="flex lg:flex-row flex-col items-start justify-start w-full h-full py-2 ">
        <div className="flex flex-col py-8 gap-y-4 relative lg:w-[300px] lg:h-full w-full">
          {/* Title */}
          <div className="flex-row items-center justify-start gap-x-2 hidden lg:flex">
            <HiOutlineClipboardList className="w-12 h-12 text-black dark:text-amber-100" />
            <p className="text-black dark:text-amber-100 text-4xl ">PROJECTS</p>
          </div>

          <div className="flex lg:flex-col gap-x-8 flex-row w-full items-center justify-center lg:items-start lg:justify-start lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2 lg:border-b-0 border-b-4 lg:border-l-4 lg:border-gray-200 lg:pl-4">
            {projectsData.map((project) => {
              const isActive = activeType === project.id;
              return (
                <button
                  className="h-12 flex items-center relative no-style"
                  key={project.id}
                  onClick={() => scrollToSection(project.id)}
                >
                  {activeType === project.id && (
                    <motion.div
                      layoutId="indicator"
                      className="hidden lg:block absolute -left-5 w-1 h-12 bg-black dark:bg-amber-100"
                    />
                  )}
                  <motion.p
                    animate={{
                      color: isActive
                        ? "text-gray-200"
                        : "text-gray-500 dark:text-amber-100",
                      ["--tw-text-opacity"]: 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`text-xl ${
                      activeType === project.id ? "text-black" : "text-gray-200"
                    } ${
                      activeType === project.id
                        ? "dark:text-amber-100"
                        : "dark:text-gray-500"
                    } uppercase hover:scale-110 transition-transform`}
                  >
                    {project.company}
                  </motion.p>
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-y-10 flex-1 overflow-y-auto text-black dark:text-amber-100">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              ref={(el) => {
                projectRefs.current[project.id] = el;
              }}
            />
          ))}
        </div>
      </div>
    </TransitionWrapper>
  );
}
