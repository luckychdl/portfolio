export interface CareerEntry {
  company: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
}

export const careerData: CareerEntry[] = [
  {
    company: "로커스코리아",
    role: "Lead Front-end Engineer",
    period: "2024.11 ~ 2025.06",
    summary: "물류 AI SaaS indition",
    points: [
      "신규 프로젝트 착수 시 Next.js 15 App Router 기반 프론트엔드 아키텍처 설계",
      "기존 Redux-Saga 대신 React Query + Zustand를 채택해 상태 관리 구조 재정립",
      "공통 컴포넌트 QA 페이지 구축 → QA 시간 40% 단축",
    ],
  },
  {
    company: "Trenshow",
    role: "Front-end Engineer",
    period: "2024.06 ~ 2024.10",
    summary: "동대문 의류 물류 SaaS(WMS) · 배송 플랫폼 프론트엔드",
    points: [
      "관리자 · 작업자 · 고객사 · 라이더 · 상점 5개 사용자군 대상 웹/앱 개발",
      "공통 UI 컴포넌트 세트 설계로 6개 플랫폼 2개월 내 동시 출시",
      "웹뷰 ↔ 네이티브 바코드 통신 프로토콜 설계 → 작업 인력 30% 절감",
    ],
  },
  {
    company: "261house",
    role: "Front-end Engineer",
    period: "2021.12 ~ 2024.05",
    summary:
      "구독 기반 커머스 faav — 사용자 웹 · 모바일 앱 · 공급사 어드민 · 내부 운영 어드민",
    points: [
      "공급사 어드민 전면 개편으로 등록 프로세스 단순화 → 공급사 약 200% 증가에 기여",
      "자체 간편결제 FaavPay 프론트엔드 개발 → 장바구니 이탈률 15% 감소",
      "React Native WebView 하이브리드 앱 개발 및 운영",
    ],
  },
  {
    company: "프리랜서 · 외주 개발",
    role: "Front-end Engineer",
    period: "2025.10 ~ 2026.03",
    summary:
      "Sojutrip · 아누에듀 AnuEdu — 기획부터 배포 · 운영까지 프론트엔드 전 과정 담당",
    points: [
      "Next.js 웹 서비스 1인 개발 및 React Native 앱 스토어 출시",
      "백엔드 리소스가 부족한 환경에서 누락 API 직접 구현 및 오류 수정",
    ],
  },
];

export interface EducationEntry {
  school: string;
  degree: string;
  date: string;
  points?: string[];
}

export const educationData: EducationEntry[] = [
  {
    school: "한림대학교",
    degree: "경제학과 졸업",
    date: "2020.02",
  },
  {
    school: "코드캠프",
    degree: "개발자 양성 부트캠프 수료",
    date: "2021.11",
    points: [
      "JavaScript, React, Next.js 기반 웹 개발 집중 교육",
      "팀 프로젝트를 통한 실전 서비스 설계 및 배포 경험",
    ],
  },
];
