import { ProjectData } from "../_types/project";

export const projectsData: ProjectData[] = [
  {
    id: "LOCUSKOREA",
    title: "AI 기반 물류 통합 SaaS 솔루션",
    company: "LOCUSKOREA",
    period: "2024-11 ~ 2025-06",
    role: ["Lead Front-end Developer"],
    description: "AI와 실시간 시스템으로 물류 업무를 재정의한 경험",
    techStack: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "React-Query",
      "Zustand",
    ],
    background:
      "기존 물류 산업에서는 재고 누락·초과·미정리 등의 문제가 당연시되어 왔으며, WMS 시스템조차 단순 기록 수준에 머물러 예측이나 실시간 대응은 불가능했습니다. 이에, 물류 데이터를 기반으로 한 AI 예측 모델과 자동 재고 파악 기능을 포함한 통합 SaaS 솔루션을 기획하게 되었습니다.",
    responsibilities: [
      "WebSocket/LLM 기반 실시간 시스템 구현",
      "물류센터 현장 인터뷰를 통한 사용자 중심 설계",
    ],
    technicalChoices: [
      {
        title: "Redux / Redux-Saga → React Query + Zustand",
        description:
          "기존에는 Redux + Redux-Saga 조합을 통해 전역 상태와 API 비동기 흐름을 통합적으로 관리했으나, 다음과 같은 이유로 분리된 설계를 도입했습니다",
        reasons: [
          "Redux의 러닝 커브와 Boilerplate 이슈: 간단한 상태 관리에도 액션/리듀서/사가 파일이 필요해 개발 피로도가 높았고, 초기 설정 시간이 과도하게 소요되었습니다.",
          "React Query 도입 이유: API 요청/응답 로직이 많고, 요청 간 캐싱, 리페치, 로딩 상태 관리가 중요했기 때문에 React Query의 기능이 요구에 적합하다고 판단했습니다.",
          "useQuery를 통한 데이터 캐싱",
          "staleTime, refetchOnWindowFocus로 네트워크 최적화",
          "error, isFetching, isLoading 등 내장 상태 사용으로 UI 로직 단순화",
        ],
      },
      {
        title: "Next.js 12 → Next.js 15",
        description: "모던 Next.js 패턴 도입으로 개발 생산성 향상",
        reasons: [
          "App Router 기반 구조로 전환하여 Layout, Slot, Suspense, Streaming 등 모던 패턴 대응",
          "layout.tsx, loading.tsx, error.tsx 구조를 통해 화면 단위의 관리가 훨씬 유연해졌고, 클라이언트 컴포넌트와 서버 컴포넌트를 분리해 SSR 최적화 가능",
        ],
      },
      {
        title: "기존 Serverless Framework → AWS Amplify",
        description: "운영 편의성과 최신 프레임워크 지원을 위한 전환",
        reasons: [
          "Next.js 15를 사용하면서 serverless framework가 더 이상 버전 호환이 되지 않아, 운영 편의성과 최신 프레임워크 지원을 위해 Amplify로 전환",
          "특히 GitHub 연동을 통한 CI/CD 자동화, 정적 자산 호스팅, 도메인 연결까지 통합 관리할 수 있어, 개발-운영 효율이 크게 향상됨",
        ],
      },
    ],
    achievements: [
      "Redux/Redux-Saga → React Query + Zustand로 기술 스택 전환을 통한 개발 효율성 40% 향상",
      "Next.js 12 → Next.js 15 업그레이드로 SSR 최적화 및 App Router 도입",
      "AWS Amplify로 CI/CD 자동화 구축",
      "컴포넌트 QA 페이지 자체 제작으로 QA 시간 40% 단축",
      "OpenAI API 활용 실시간 예측 및 응답 시스템 구현",
      "채팅, 메모(크기 조절·이동·스티커) 구현으로 현장 작업자 실시간 소통 병목 해소",
    ],
    learnings: [
      "현장 사용자 인터뷰를 통한 실제 업무 흐름 파악의 중요성",
      "AI 기반 실시간 시스템 구현 경험",
      "모던 React 생태계 전환 경험",
    ],
    images: [],
    highlights: [
      "AI 기반 실시간 예측 시스템",
      "현장 맞춤형 UI/UX 설계",
      "WebSocket 실시간 통신",
    ],
  },
  {
    id: "TRENSHOW",
    title: "동대문 물류 통합 플랫폼",
    company: "TRENSHOW",
    period: "2024-06 ~ 2024-10",
    role: ["Front-end Developer"],
    description: "동대문 물류의 복잡한 흐름을 통합된 플랫폼으로 단순화하다",
    techStack: [
      "React",
      "Next.js",
      "React-Native",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Redux-Saga",
    ],
    background:
      "동대문 기반의 의류 유통 현장은 사입자, 화주사, 물류센터, 라이더 등 다양한 주체가 엮인 복잡한 구조를 가지고 있음에도 불구하고, 이를 통합적으로 관리할 수 있는 SaaS 시스템은 부재했습니다. 이를 해결하기 위해, 다주체 통합 플랫폼 구축을 목표로 프로젝트가 시작되었습니다.",
    responsibilities: [
      "Front-End 전담 개발자",
      "6개 플랫폼의 웹/앱 UI/UX 전면 설계 및 개발",
      "React Native 기반의 모바일 & 웹 통합 개발 구조 설계",
      "입고-출고-사입-재고 프로세스 전체 흐름 설계",
    ],
    achievements: [
      "React-native webview를 활용 2개월만에 6개 플랫폼 동시 출시",
      "재고처리 속도 30~50% 향상, 실시간 상태 파악 정확도 상승",
      "앱 바코드 인식 기능으로 작업 인력 30% 감소",
      "관리자/작업자/고객사/라이더 간 소통 병목 해소",
    ],
    projects: [
      {
        id: "dcf-wms",
        title: "DCF-WMS",
        description: "통합 WMS 시스템",
        contents: [
          "엑셀 업로드/다운로드, 바코드 인쇄 기능을 통해 수작업 감소",
          "기술적으로는 깔끔했지만 현장성과 괴리된 UI로 초기에는 피드백 다수 발생 → 사용자 중심 UX 개선 경험",
        ],
      },
      {
        id: "dcf-customer",
        title: "DCF-CUSTOMER",
        description: "화주사 관리 시스템",
        contents: [
          "화주사(고객사)를 위한 입고/출고 관리 웹 서비스",
          "채널톡 연동 통한 CS 대응 시스템 구축",
        ],
      },
      {
        id: "dcf-crew",
        title: "DCF-CREW",
        description: "작업자 관리 시스템",
        contents: [
          "물류센터 작업자용 앱",
          "출근 등록, 입/출고 작업, 픽업, 재고 확인 기능 구현",
          "USB 바코드 리더기와 직접 연동해, 단말기에서 바로 작업 처리 가능",
        ],
      },
      {
        id: "dcf-rider",
        title: "DDPICK / RIDER / CUSTOMER",
        description: "라이더 관리 시스템",
        contents: [
          "사입 → 배송 → 고객 전달까지의 전 과정을 분리된 앱으로 구현",
          "React Native 기반으로 3개의 앱을 동시에 효율적으로 개발",
          "실시간 상태 확인, 알림 기능, 픽업 요청까지 모두 앱 내에서 수행",
        ],
      },
    ],
    learnings: [
      "다주체 플랫폼 통합 설계 경험",
      "React Native를 활용한 효율적 멀티플랫폼 개발",
      "하드웨어 연동 앱 설계 경험",
    ],
    images: [],

    highlights: [
      "6개 플랫폼 통합 개발",
      "바코드 하드웨어 연동",
      "실시간 상태 관리",
    ],
  },
  {
    id: "261HOUSE",
    title: "의류 순환 플랫폼 faav",
    company: "261HOUSE",
    period: "2021-12 ~ 2024-05",
    role: ["Front-end Developer"],
    description:
      "시즌성 의류의 재고 문제를 해결하기 위해 대여, 협찬, 구독, 리세일을 결합한 의류 순환 플랫폼",
    techStack: [
      "React",
      "Next.js",
      "React-Native",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Redux-Saga",
    ],
    background:
      "시즌성 재고 순환을 위한 실물 구독 시스템이 필요했고, 인플루언서 협찬부터 세컨핸즈 판매까지의 전환 흐름을 설계해야 했습니다.",
    responsibilities: [
      "faav, faav app, faav connect, faav studio 전체 개발",
      "AWS Lambda + S3 + CloudFront 기반 이미지 최적화 시스템 구현",
      "QR/NFC 결제 시스템 구축",
    ],
    achievements: [
      "재고 출고율 93% 달성",
      "협찬 → 리세일 전환 구조로 구독 → 구매 전환율 35% 이상 확보",
      "평균 이미지 로딩 속도 45% 단축",
      "공급사 200% 증가에 기여",
      "장바구니 이탈율 약 15% 감소",
    ],
    learnings: [
      "빠르게 변화하는 비즈니스 요구사항에 대응할 수 있는 모듈형 아키텍처 구성",
      "운영팀, 디자인팀과의 협업을 통한 서비스 전체 흐름 고려한 UI/UX 설계",
      "AWS 기반 이미지 최적화와 비동기 로직 처리 등 퍼포먼스 중심 커머스 설계",
    ],
    images: [],

    highlights: [
      "의류 순환 생태계 구축",
      "AWS 이미지 최적화",
      "QR/NFC 결제 연동",
    ],
  },
  {
    id: "SOJUTRIP (외주)",
    title: "한국 소주 문화를 알리는 호스트와 외국인 여행객 매칭 플랫폼 개발",
    company: "SOJUTRIP (외주)",
    period: "2025-10 ~ 2026-01",
    role: ["Front-end Developer 100% ", "Back-end Developer 20%"],
    description: "",
    techStack: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "React",
      "React-Query",
      "Zustand",
      "i18n",
    ],
    background: "",
    responsibilities: [
      "SOJUTRIP , SOJUTRIP ADMIN Front-end 전담 개발",
      "백엔드 API 구현 및 DB 스키마 설계/수정, 서비스 안정화 대응",
    ],
    achievements: [
      "Next.js 15 App Router 기반 프로젝트 구조 설계 및 개발",
      "예약, 결제, 호스트 등록 등 핵심 사용자 플로우 개발",
      "i18n 기반 다국어 라우팅 및 자동 번역 시스템 구현",
      "게스트-호스트 1:1 채팅 및 예약 관리 기능 개발",
    ],
    learnings: [
      "단순 데모가 아닌 실제 서비스 운영을 목표로 한 구조 설계",
      "기획 → 개발 → 배포 → 운영까지 제품 전 과정 경험",
      "프론트엔드 개발자로서 서비스 관점의 설계 역량과 백엔드/인프라 이해도를 동시에 강화",
    ],
    images: [],

    highlights: [
      "소주 문화 기반 호스트-여행자 매칭 플랫폼",
      "실시간 채팅 및 예약 및 결제 서비스 구현",
      "i18n 기반 다국어 번역 시스템 구현",
    ],
  },
  {
    id: "아누에듀 AnuEdu (외주)",
    title: "한국어 발음 학습을 위한 모바일 애플리케이션 개발",
    company: "아누에듀 AnuEdu (외주)",
    period: "2026-02 - 2026-03",
    role: ["Front-end Developer 100% ", "Back-end Developer 20%"],
    description: "",
    techStack: [
      "React",
      "React-Native",
      "expo",
      "JavaScript",
      "TypeScript",
      "React",
      "React-Query",
      "Zustand",
    ],
    background:
      "영상 기반 발음 학습과 Daily Quiz 시스템을 통해 외국인 학습자의 한국어 학습 경험을 개선",
    responsibilities: [
      "AnuEdu , AnuEdu ADMIN Front-end 전담 개발",
      "백엔드 API 구현 및 DB 스키마 설계/수정, 서비스 안정화 대응",
    ],
    achievements: [
      "React Native + Expo 기반 모바일 앱 아키텍처 설계 및 구축",
      "Google / Apple 소셜 로그인 기반 3단계 온보딩 인증 플로우 개발",
      "Expo Router 기반 인증 라우팅 및 Route Guard 시스템 구현",
      "발음 영상 기반 단어 학습 시스템 구현",
      "Expo AV 기반 Video / Audio 미디어 재생 제어 로직 구현",
      "단어 북마크 및 학습 콘텐츠 관리 기능 구현",
      "EAS Update 기반 무심사 OTA 배포로 빠른 기능 개선 대응",
    ],
    learnings: [
      "모바일 환경에서 영상·음성 미디어 리소스와 앱 상태 관리가 복잡하게 얽힌 구조를 경험",
      "Video / Audio 동시 재생 충돌 문제를 해결하기 위한 미디어 재생 제어 구조 설계",
      "pending → guest → authed 상태 흐름을 설계하며 인증 상태 관리 구조 이해도 강화",
      "미디어 처리, 상태 관리, 사용자 흐름 설계가 서비스 안정성과 UX에 큰 영향을 준다는 점을 경험",
    ],
    images: [],

    highlights: [
      "교육 플랫폼 프론트엔드 및 관리자 시스템 개발",
      "관리자 미디어 업로드 기반 학습 콘텐츠 연동",
      "발음 청취 및 퀴즈 영상 재생 기능 구현",
      "EAS Update 기반 무심사 OTA 배포 환경 구축",
    ],
  },
];
