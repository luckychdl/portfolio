"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectData } from "../_types/project";
import ImageGallery from "./ImageGallery";
import Card from "./Card";
import CardTitle from "./CardTitle";
import {
  textSmall,
  textSmallMargin,
  textBaseBold,
} from "../_utils/classPresets";

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project }, ref) => {
    return (
      <div
        className="flex lg:flex-row flex-col items-start justify-start gap-x-4 lg:px-8 px-2"
        ref={ref}
        id={project.id}
      >
        {/* 프로젝트 기본 정보 사이드바 */}
        <div className="flex flex-col lg:min-w-[20%] lg:max-w-[20%] gap-y-4 w-full mb-4">
          {/* 회사 정보 카드 */}
          <motion.div
            className="border-1 p-4 rounded-2xl bg-black text-white flex w-full flex-col gap-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-bold text-lg">{project.company}</p>
            <p className="text-sm">{project.period}</p>
            <span className="w-full flex justify-center items-center bg-white text-black rounded-2xl px-2 py-1 font-bold text-sm">
              {project.role}
            </span>
          </motion.div>

          {/* 기술 스택 */}
          <motion.div
            className="flex flex-row gap-2 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {project.techStack.map((tech, i) => (
              <span
                key={`${tech}_${i}`}
                className="dark:bg-amber-100 text-sm dark:text-black bg-gray-400 text-white px-2 py-1 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="flex flex-col gap-y-4 w-full">
          <motion.div
            className="flex flex-col gap-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* 프로젝트 제목 및 설명 */}
            <Card>
              <span className="text-xl font-bold">{project.title}</span>
              <span className="text-xl font-bold">{project.description}</span>
            </Card>

            {/* 프로젝트 하이라이트 */}
            {project.highlights.length > 0 && (
              <Card>
                <CardTitle text="주요 특징" />
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </Card>
            )}

            {/* 이미지 갤러리 */}
            {project.images.length > 0 && (
              <Card>
                <CardTitle text="프로젝트 갤러리" />
                <ImageGallery
                  images={project.images}
                  projectTitle={project.title}
                />
              </Card>
            )}

            {/* 프로젝트 배경 */}
            <Card>
              <CardTitle text="프로젝트 배경" />
              <p className={textSmall}>{project.background}</p>
            </Card>

            {/* 맡은 역할 */}
            <Card>
              <CardTitle text="맡은 역할" />
              {project.responsibilities.map((responsibility, index) => (
                <p key={index} className={textSmallMargin}>
                  • {responsibility}
                </p>
              ))}
            </Card>
            {project.projects &&
              project.projects.length > 0 &&
              project.projects.map((el) => (
                <Card key={el.id}>
                  <CardTitle text={el.title} />
                  {el.contents.map((contents, index) => (
                    <p key={index} className={textSmallMargin}>
                      • {contents}
                    </p>
                  ))}
                </Card>
              ))}

            {/* 기술적 선택과 전환 이유 */}
            {project.technicalChoices &&
              project.technicalChoices.length > 0 && (
                <Card>
                  <CardTitle text="기술적 선택과 전환 이유" />
                  {project.technicalChoices.map((choice, index) => (
                    <div key={index} className="flex flex-col gap-y-2 mb-4">
                      <CardTitle text={choice.title} />
                      <p className={textSmallMargin}>{choice.description}</p>
                      {choice.reasons.map((reason, reasonIndex) => (
                        <p key={reasonIndex} className={textSmallMargin}>
                          → {reason}
                        </p>
                      ))}
                    </div>
                  ))}
                </Card>
              )}

            {/* 주요 성과 */}
            <Card>
              <CardTitle text="주요 성과 및 기여" />
              {project.achievements.map((achievement, index) => (
                <p key={index} className={textBaseBold}>
                  → {achievement}
                </p>
              ))}
            </Card>

            {/* 배운 점 */}
            <Card>
              <CardTitle text="배운 점" />
              {project.learnings.map((learning, index) => (
                <p key={index} className={textSmallMargin}>
                  • {learning}
                </p>
              ))}
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;
