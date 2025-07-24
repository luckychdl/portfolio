import SkillBadge from "../_components/skillBadge";

export default function Skills() {
  return (
    <div className="flex-1 flex w-full h-full items-center justify-center">
      <section id="skills" className=" text-white px-6 py-10">
        <h2 className="text-black dark:text-amber-100 text-3xl font-bold text-beige mb-6">
          기술 스택
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <SkillBadge
            name="React"
            level="Advanced"
            project="faav / trenshow / indition"
          />
          <SkillBadge
            name="Next.js"
            level="Advanced"
            project="faav / trenshow / indition"
          />
          <SkillBadge
            name="React-native"
            level="Intermediate"
            project="faav app / ddpick app"
          />
          <SkillBadge
            name="React-Query"
            level="Intermediate"
            project="Indition / Indition-Warehouse"
          />
          <SkillBadge
            name="Redux-Saga"
            level="Advanced"
            project="faav app / faav"
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
          />
          <SkillBadge
            name="AWS (S3, Lambda)"
            level="Advanced"
            project="faav studio 이미지 최적화 맟 배포"
          />
          <SkillBadge
            name="OpenAI API"
            level="Beginner"
            project="LLM 기반 응답 스트리밍"
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
          />
          <SkillBadge
            name="Node.js"
            level="Beginner"
            project="indition / indition-warehouse 백엔드 구현"
          />
        </div>
      </section>
    </div>
  );
}
