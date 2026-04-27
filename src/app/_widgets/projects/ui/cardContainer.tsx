"use client";

import CardBox from "@/app/_components/cardBox";
import CardTitleBox from "@/app/_components/cardTitleBox";
import { Project } from "@/app/_types/project";
import {
  textBaseBold,
  textSmall,
  textSmallMargin,
} from "@/app/_utils/classPresets";
import { motion } from "framer-motion";
export default function CardContainer({ project }: Project) {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <motion.div
        className="flex flex-col gap-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* 프로젝트 제목 및 설명 */}
        <CardBox>
          <span className="text-xl font-bold">{project.title}</span>
          <span className="text-xl font-bold">{project.description}</span>
        </CardBox>

        {/* 프로젝트 하이라이트 */}
        {project.highlights.length > 0 && (
          <CardBox>
            <CardTitleBox text="주요 특징" />
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
          </CardBox>
        )}

        {/* 프로젝트 배경 */}
        <CardBox>
          <CardTitleBox text="프로젝트 배경" />
          <p className={textSmall}>{project.background}</p>
        </CardBox>

        {/* 맡은 역할 */}
        <CardBox>
          <CardTitleBox text="맡은 역할" />
          {project.responsibilities.map((responsibility, index) => (
            <p key={index} className={textSmallMargin}>
              • {responsibility}
            </p>
          ))}
        </CardBox>
        {project.projects &&
          project.projects.length > 0 &&
          project.projects.map((el) => (
            <CardBox key={el.id}>
              <CardTitleBox text={el.title} />
              {el.contents.map((contents, index) => (
                <p key={index} className={textSmallMargin}>
                  • {contents}
                </p>
              ))}
            </CardBox>
          ))}

        {/* 기술적 선택과 전환 이유 */}
        {project.technicalChoices && project.technicalChoices.length > 0 && (
          <CardBox>
            <CardTitleBox text="기술적 선택과 전환 이유" />
            {project.technicalChoices.map((choice, index) => (
              <div key={index} className="flex flex-col gap-y-2 mb-4">
                <CardTitleBox text={choice.title} />
                <p className={textSmallMargin}>{choice.description}</p>
                {choice.reasons.map((reason, reasonIndex) => (
                  <p key={reasonIndex} className={textSmallMargin}>
                    → {reason}
                  </p>
                ))}
              </div>
            ))}
          </CardBox>
        )}

        {/* 주요 성과 */}
        <CardBox>
          <CardTitleBox text="주요 성과 및 기여" />
          {project.achievements.map((achievement, index) => (
            <p key={index} className={textBaseBold}>
              → {achievement}
            </p>
          ))}
        </CardBox>

        {/* 배운 점 */}
        <CardBox>
          <CardTitleBox text="배운 점" />
          {project.learnings.map((learning, index) => (
            <p key={index} className={textSmallMargin}>
              • {learning}
            </p>
          ))}
        </CardBox>
      </motion.div>
    </div>
  );
}
