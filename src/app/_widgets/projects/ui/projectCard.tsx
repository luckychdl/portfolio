"use client";
import React, { useEffect, useRef } from "react";

import { ProjectData } from "../../../_types/project";

import { projectsData } from "../../../_data/projects";
import ProjectRole from "./role";
import ProjectStack from "./stack";
import { useSearchParams } from "next/navigation";
import CardContainer from "./cardContainer";

export default function ProjectCard() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const project = projectsData.find(
    (project: ProjectData) => project.id === type,
  );
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: 0,

      behavior: "auto",
    });
  }, [type]);
  return (
    <>
      {project && (
        <div
          className="w-full lg:h-full h-[100dvh] flex flex-col gap-y-10 flex-1 overflow-y-auto text-black dark:text-amber-100"
          ref={scrollRef}
        >
          <div
            key={project.id}
            className="flex lg:flex-row flex-col items-start justify-start gap-x-4 lg:px-8 px-2 w-full "
            id={project.id}
          >
            {/* 프로젝트 기본 정보 사이드바 */}
            <div className="flex flex-col lg:min-w-[20%] lg:max-w-[20%] gap-y-4 w-full mb-4">
              {/* 회사 정보 카드 */}
              <ProjectRole project={project} />
              {/* 기술 스택 */}
              <ProjectStack project={project} />
            </div>

            {/* 메인 콘텐츠 */}
            <CardContainer project={project} />
          </div>
        </div>
      )}
    </>
  );
}
