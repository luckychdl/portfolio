export interface StackCategory {
  /** JSON 키로 쓰이는 이름 */
  key: string;
  /** 이력서 표기 라벨 */
  label: string;
  items: string[];
}

export const stackData: StackCategory[] = [
  {
    key: "core",
    label: "Core",
    items: [
      "TypeScript",
      "React",
      "Next.js (App Router)",
      "React Native / Expo",
      "React Query",
      "Zustand",
    ],
  },
  {
    key: "proficient",
    label: "Proficient",
    items: [
      "JavaScript(ES6+)",
      "Redux · Redux-Saga",
      "SCSS",
      "Tailwind CSS",
      "Styled-Components",
      "Emotion",
      "Socket.IO",
      "Axios / REST API",
      "NextAuth",
    ],
  },
  {
    key: "familiar",
    label: "Familiar",
    items: ["Node.js", "Express", "Sequelize", "MySQL", "GraphQL"],
  },
  {
    key: "infraAndTools",
    label: "Infra & Tools",
    items: [
      "AWS S3 (Presigned 업로드)",
      "Amplify",
      "CloudFront",
      "GitHub",
      "Sourcetree",
      "Figma",
    ],
  },
  {
    key: "domain",
    label: "Domain",
    items: [
      "결제 연동(PG · 간편결제 · 해외 결제)",
      "물류 WMS(바코드 · 재고 · 정산)",
      "다국어 i18n · 자동 번역",
      "어드민 · 백오피스 UX 개선",
      "하이브리드 앱 WebView 브릿지",
      "LLM 채팅 UI 연동",
    ],
  },
];
