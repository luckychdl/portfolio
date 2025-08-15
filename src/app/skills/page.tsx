import SkillBadge from "../_components/skillBadge";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import TransitionWrapper from "../_components/transitionWrapper";
import { GiSkills } from "react-icons/gi";
import { IoLogoCss3 } from "react-icons/io";

export default function Skills() {
  return (
    <TransitionWrapper>
      <div className="flex-1 flex flex-col items-center w-full h-full justify-center pt-8">
        <div className="flex flex-row items-center justify-start gap-x-2">
          <GiSkills className="w-12 h-10 text-black dark:text-amber-100" />
          <h2 className="text-black dark:text-amber-100 text-4xl">SKILLS</h2>
        </div>
        <div className="w-full flex items-center justify-center">
          <section
            id="skills"
            className=" text-white px-6 py-10 items-center justify-center"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <SkillBadge
                name="React"
                level="Advanced"
                project="faav / trenshow / indition"
                icon={<FaReact />}
              />
              <SkillBadge
                name="Next.js"
                level="Advanced"
                project="faav / trenshow / indition"
                icon={<SiNextdotjs />}
              />
              <SkillBadge
                name="React-Native"
                level="Intermediate"
                project="faav app / ddpick app"
                icon={<FaReact />}
              />
              <SkillBadge
                name="React-Query"
                level="Intermediate"
                project="Indition / Indition-Warehouse"
                icon={<SiReactquery />}
              />
              <SkillBadge
                name="Redux-Saga"
                level="Advanced"
                project="faav app / faav"
                icon={<SiRedux />}
              />
              <SkillBadge
                name="Zustand"
                level="Intermediate"
                project="Indition / Indition-Warehouse"
              />
              <SkillBadge
                name="WebSocket"
                level="Intermediate"
                project="실시간 채팅서비스"
                icon={<SiSocketdotio />}
              />
              <SkillBadge
                name="AWS (S3, Lambda)"
                level="Advanced"
                project="faav studio 이미지 최적화 맟 배포"
                icon={<FaAws />}
              />
              <SkillBadge
                name="OpenAI API"
                level="Beginner"
                project="LLM 기반 응답 스트리밍"
                icon={<SiOpenai />}
              />
              <SkillBadge
                name="QR / NFC 연동"
                level="Beginner"
                project="faav 오프라인 팝업 결제 서비스"
              />
              <SkillBadge
                name="Express.js"
                level="Beginner"
                project="indition / indition-warehouse 백엔드 구현"
                icon={<SiExpress />}
              />
              <SkillBadge
                name="Node.js"
                level="Beginner"
                project="indition / indition-warehouse 백엔드 구현"
                icon={<FaNodeJs />}
              />
              <SkillBadge
                name="CSS/SCSS
"
                level="Advanced"
                project="indition / indition-warehouse 백엔드 구현"
                icon={<IoLogoCss3 />}
              />
              <SkillBadge
                name="Emotion"
                level="Intermediate"
                project="indition / indition-warehouse 백엔드 구현"
                icon={<IoLogoCss3 />}
              />
              <SkillBadge
                name="Styled Components
"
                level="Intermediate"
                project="indition / indition-warehouse 백엔드 구현"
                icon={<IoLogoCss3 />}
              />
              <SkillBadge
                name="Tailwind CSS"
                level="Beginner"
                project="indition / indition-warehouse 백엔드 구현"
                icon={<IoLogoCss3 />}
              />
            </div>
          </section>
        </div>
      </div>
    </TransitionWrapper>
  );
}
