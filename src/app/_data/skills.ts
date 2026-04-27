interface SkillData {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Basic";
  project?: string;
  icon?: React.ReactElement;
}
export const skillsData: SkillData[] = [
  {
    name: "React",
    level: "Advanced",
    project: "faav / trenshow / indition",
  },
  {
    name: "Next.js",
    level: "Advanced",
    project: "faav / trenshow / indition",
  },
  {
    name: "React-Native",
    level: "Intermediate",
    project: "faav app / ddpick app",
  },
  {
    name: "React-Query",
    level: "Intermediate",
    project: "Indition / Indition-Warehouse",
  },
  {
    name: "Redux-Saga",
    level: "Intermediate",
    project: "faav app / faav",
  },
  {
    name: "Zustand",
    level: "Intermediate",
    project: "Indition / Indition-Warehouse",
  },
  {
    name: "WebSocket",
    level: "Intermediate",
    project: "실시간 채팅서비스",
  },
  {
    name: "AWS",
    level: "Intermediate",
    project: "faav studio 이미지 최적화 맟 배포",
  },
  {
    name: "OpenAI API",
    level: "Beginner",
    project: "LLM 기반 응답 스트리밍",
  },
  {
    name: "QR / NFC 연동",
    level: "Beginner",
    project: "faav 오프라인 팝업 결제 서비스",
  },
  {
    name: "Express.js",
    level: "Beginner",
    project: "indition / indition-warehouse 백엔드 구현",
  },
  {
    name: "Node.js",
    level: "Beginner",
    project: "indition / indition-warehouse 백엔드 구현",
  },
  {
    name: "CSS/SCSS",
    level: "Advanced",
  },
  {
    name: "Emotion",
    level: "Intermediate",
  },
  {
    name: "Styled Components",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    level: "Beginner",
  },
];
