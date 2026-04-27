"use client";
import { projectsData } from "@/app/_data/projects";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
export default function ProjectsMenu() {
  const [activeType, setActiveType] = useState<string>(
    projectsData[0]?.company || "LOCUSKOREA",
  );
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const router = useRouter();
  useEffect(() => {
    if (type) setActiveType(type);
    else if (!type) router.replace("/projects?type=LOCUSKOREA");
  }, [type, router]);
  return (
    <div className="flex lg:flex-col gap-x-8 flex-row w-full items-center justify-center lg:items-start lg:justify-start lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2 lg:border-b-0 border-b-4 lg:border-l-4 lg:border-gray-200 lg:pl-4">
      {projectsData.map((project) => {
        const isActive = activeType === project.id;
        return (
          <button
            className="h-12 flex items-center relative no-style"
            key={project.id}
          >
            {activeType === project.id && (
              <motion.div
                layoutId="indicator"
                className="hidden lg:block absolute -left-5 w-1 h-12 bg-black dark:bg-amber-100"
              />
            )}
            <Link href={`/projects?type=${[project.company]}`}>
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
            </Link>
          </button>
        );
      })}
    </div>
  );
}
