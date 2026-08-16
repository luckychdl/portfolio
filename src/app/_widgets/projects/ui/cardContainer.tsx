"use client";

import CardBox from "@/app/_components/cardBox";
import CardTitleBox from "@/app/_components/cardTitleBox";
import { Project } from "@/app/_types/project";
import { textSmall, textSmallMargin } from "@/app/_utils/classPresets";
import { motion } from "framer-motion";

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function CardContainer({ project }: Project) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* 프로젝트 하이라이트 */}
      {project.highlights.length > 0 && (
        <motion.div {...reveal(0.05)} className="lg:col-span-2">
          <CardBox>
            <CardTitleBox text="주요 특징" />
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition-colors duration-300 hover:bg-accent/20"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </CardBox>
        </motion.div>
      )}

      {/* 프로젝트 배경 */}
      {project.background && (
        <motion.div {...reveal(0.1)} className="lg:col-span-2">
          <CardBox>
            <CardTitleBox text="프로젝트 배경" />
            <p className={textSmall}>{project.background}</p>
          </CardBox>
        </motion.div>
      )}

      {/* 맡은 역할 */}
      <motion.div {...reveal(0.12)}>
        <CardBox className="h-full">
          <CardTitleBox text="맡은 역할" />
          <ul className="flex flex-col gap-2.5">
            {project.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex gap-2.5">
                <span
                  aria-hidden
                  className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                />
                <span className={textSmall}>{responsibility}</span>
              </li>
            ))}
          </ul>
        </CardBox>
      </motion.div>

      {/* 배운 점 */}
      <motion.div {...reveal(0.16)}>
        <CardBox className="h-full">
          <CardTitleBox text="배운 점" />
          <ul className="flex flex-col gap-2.5">
            {project.learnings.map((learning, index) => (
              <li key={index} className="flex gap-2.5">
                <span
                  aria-hidden
                  className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent-2"
                />
                <span className={textSmall}>{learning}</span>
              </li>
            ))}
          </ul>
        </CardBox>
      </motion.div>

      {/* 세부 프로젝트 */}
      {project.projects?.map((el, i) => (
        <motion.div key={el.id} {...reveal(0.08 + i * 0.04)}>
          <CardBox className="h-full">
            <CardTitleBox text={el.title} />
            <ul className="flex flex-col gap-2.5">
              {el.contents.map((contents, index) => (
                <li key={index} className="flex gap-2.5">
                  <span
                    aria-hidden
                    className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-faint"
                  />
                  <span className={textSmall}>{contents}</span>
                </li>
              ))}
            </ul>
          </CardBox>
        </motion.div>
      ))}

      {/* 기술적 선택과 전환 이유 */}
      {project.technicalChoices && project.technicalChoices.length > 0 && (
        <motion.div {...reveal(0.12)} className="lg:col-span-2">
          <CardBox>
            <CardTitleBox text="기술적 선택과 전환 이유" />
            <div className="flex flex-col gap-4">
              {project.technicalChoices.map((choice, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-line bg-surface-2 p-4 sm:p-5"
                >
                  <div className="mb-2 flex items-baseline gap-3">
                    <span className="font-mono text-[11px] text-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="font-display text-sm font-semibold tracking-tight text-fg">
                      {choice.title}
                    </h4>
                  </div>
                  <p className={textSmallMargin}>{choice.description}</p>
                  <ul className="flex flex-col gap-2 border-l border-line pl-4">
                    {choice.reasons.map((reason, reasonIndex) => (
                      <li
                        key={reasonIndex}
                        className="text-sm leading-relaxed text-muted"
                      >
                        <span aria-hidden className="mr-2 text-accent">
                          →
                        </span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardBox>
        </motion.div>
      )}

      {/* 주요 성과 */}
      <motion.div {...reveal(0.14)} className="lg:col-span-2">
        <CardBox className="relative overflow-hidden">
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_center,var(--accent-2-glow),transparent_65%)] blur-2xl"
          />
          <div className="relative">
            <CardTitleBox text="주요 성과 및 기여" />
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {project.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="group flex items-start gap-3 rounded-xl border border-line bg-surface-2 p-3.5 transition-colors duration-300 hover:border-line-strong"
                >
                  <span className="mt-0.5 font-mono text-[11px] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed font-medium text-fg">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </CardBox>
      </motion.div>
    </div>
  );
}
