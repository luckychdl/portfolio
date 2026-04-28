"use client";

import { projectsData } from "@/app/_data/projects";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProjectsMenu() {
  const [activeType, setActiveType] = useState<string>(
    projectsData[0]?.id ?? "LOCUSKOREA",
  );

  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const router = useRouter();

  useEffect(() => {
    if (type) {
      setActiveType(type);
    } else {
      router.replace("/projects?type=LOCUSKOREA");
    }
  }, [type, router]);

  return (
    <div className="flex lg:flex-col gap-x-8 flex-row min-w-auto scrollbar-hide items-center lg:px-0 px-4  lg:items-start lg:justify-start lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2 lg:border-b-0 border-b-4 lg:border-l-4 lg:border-gray-200 lg:pl-4 overflow-x-auto scrollbar-hide">
      {projectsData.map((project, idx) => {
        const isActive = activeType === project.id;

        return (
          <Link
            href={`/projects?type=${project.id}`}
            key={`${project.id}_${idx}`}
            className="h-12 flex items-center relative no-style  min-w-fit"
          >
            {isActive && (
              <motion.div
                layoutId="indicator"
                className="hidden lg:block absolute -left-4 w-1 h-12 bg-black dark:bg-amber-100"
              />
            )}

            <motion.p
              transition={{ duration: 0.3 }}
              className={`text-xl uppercase hover:scale-110 min-w-fit transition-transform ${
                isActive
                  ? "text-black dark:text-amber-100"
                  : "text-gray-300 dark:text-gray-500"
              }`}
            >
              {project.company}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
