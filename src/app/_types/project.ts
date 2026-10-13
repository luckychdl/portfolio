/** 카테고리별 기술 묶음 (Front-end / State / UI / Infra …) */
export interface StackGroup {
  label: string;
  items: string[];
}

/**
 * 성과·역할 항목.
 * `text` 안의 `**강조**` 는 RichText 에서 볼드로 렌더링된다.
 */
export interface Bullet {
  text: string;
  /** 하위 `·` 항목 */
  children?: string[];
}

export interface TechnicalChoice {
  title: string;
  body: string;
  points?: string[];
}

/** 한눈에 보는 수치 (예: 9 → 2 · 홈 캐시 갱신 1회당 외부 API 요청 수) */
export interface Metric {
  value: string;
  label: string;
}

export interface Architecture {
  /** 요청이 흐르는 순서대로 나열한 계층 */
  flow: { name: string; detail: string }[];
  note?: string;
}

export interface ProjectData {
  /** url slug 이자 파일명 (예: anuedu → projects/anuedu.md) */
  slug: string;
  /** 프로젝트 이름 (예: 아누에듀 AnuEdu) */
  name: string;
  /** 소속 (예: 외주 / 로커스코리아) */
  company: string;
  /** 상태 배지 (예: 운영 중, 프론트엔드 전담) */
  tags: string[];
  /** 한 줄 소개 */
  subtitle: string;
  period: string;
  /** 기간 뒤에 붙는 부가 정보 (예: App Store · Google Play 출시 및 운영 중) */
  note?: string;
  /** 공개 저장소 (프로토콜 제외, 예: github.com/luckychdl/epl-radar) */
  repo?: string;
  stack: StackGroup[];
  metrics?: Metric[];
  background?: string;
  /** 문제 정의 및 해결 */
  problem?: string;
  architecture?: Architecture;
  achievements: Bullet[];
  /** 테스트 · 개발 방식 */
  testing?: Bullet[];
  technicalChoices?: TechnicalChoice[];
  /** 배운 점 (문단) */
  learning?: string;
}
