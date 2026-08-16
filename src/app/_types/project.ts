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
  stack: StackGroup[];
  background?: string;
  /** 문제 정의 및 해결 */
  problem?: string;
  achievements: Bullet[];
  technicalChoices?: TechnicalChoice[];
  /** 배운 점 (문단) */
  learning?: string;
}
