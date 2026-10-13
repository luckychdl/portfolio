import { ProjectData } from "../_types/project";

export const projectsData: ProjectData[] = [
  {
    slug: "anuedu",
    name: "아누에듀 AnuEdu",
    company: "외주",
    tags: ["운영 중", "프론트엔드 전담"],
    subtitle: "한국어 발음 학습 모바일 애플리케이션",
    period: "2026.02 ~ 2026.03",
    note: "App Store · Google Play 출시 및 운영 중",
    stack: [
      { label: "Front-end", items: ["React Native", "Expo", "TypeScript"] },
      { label: "State", items: ["React Query", "Zustand"] },
      { label: "UI", items: ["Styled-Components", "Tailwind CSS"] },
      { label: "Media", items: ["Expo AV"] },
      { label: "Infra", items: ["AWS S3"] },
    ],
    achievements: [
      {
        text: "**Feature-Sliced Design 기반 아키텍처 설계** — shared / features / widgets / screens 레이어 분리, 도메인별 API·Query 레이어를 분리해 데이터 흐름 규칙을 일원화",
      },
      {
        text: "**Google · Apple 소셜 로그인 3단계 온보딩 구현** — pending → guest → authed 상태를 분리해 소셜 인증 성공과 서비스 가입 확정을 독립적으로 처리",
      },
      {
        text: "**Expo AV 사운드 인스턴스 생명주기 관리** — 동일 소스 재사용 · 소스 변경 시 unload · 언마운트 정리로 중복 재생 충돌과 메모리 누수 방지",
      },
      {
        text: "서버 응답에 페이지 커서가 없는 상황에서 누적 로드 개수 기반으로 다음 페이지를 계산해 무한 스크롤 구현",
      },
      {
        text: "Presigned URL 기반 S3 이미지 업로드, Daily Quiz 카운트다운, 학습 레벨 산정 로직 구현",
      },
      {
        text: "약관 · 개인정보 처리방침 · 계정 관리 등 스토어 심사 요건 대응 및 배포 완료",
      },
      {
        text: "관리자 페이지 CRUD 및 React Query 데이터 레이어 구현 (UI는 디자인 도구 기반 퍼블리싱 활용)",
      },
    ],
    learning:
      "짧은 일정 안에 앱과 관리자 페이지를 동시에 출시해야 했던 상황. 관리자 UI는 도구로 빠르게 확보하고, 확보한 시간을 앱 아키텍처와 미디어 재생 안정화에 투입. 무엇을 직접 만들고 무엇을 도구에 맡길지 판단하는 것도 설계의 일부라는 점을 체감.",
  },

  {
    slug: "sojutrip",
    name: "Sojutrip",
    company: "외주",
    tags: ["서비스 종료", "프론트엔드 1인 개발"],
    subtitle: "한국 소주 문화 호스트와 외국인 여행객 매칭 플랫폼",
    period: "2025.10 ~ 2026.01",
    stack: [
      {
        label: "Front-end",
        items: ["Next.js 15 (App Router)", "TypeScript"],
      },
      { label: "State", items: ["React Query", "Zustand"] },
      { label: "UI", items: ["SCSS"] },
      {
        label: "Etc",
        items: ["i18n", "Google Translate API", "PortOne", "Socket.IO"],
      },
      {
        label: "Infra",
        items: ["AWS Amplify", "S3", "Route53", "CloudFront"],
      },
    ],
    achievements: [
      {
        text: "**3단 폴백 하이브리드 번역 시스템 설계** — 정적 사전 → Google Translate API → 원문 순으로 폴백해 번역 품질과 커버리지를 동시 확보 (5개 언어)",
        children: [
          "TTL 기반 번역 캐시와 언어별 선택적 무효화로 재요청 최소화",
          "동일 문구 동시 요청을 하나로 합치는 중복 제거(deduplication)로 API 호출량 절감",
        ],
      },
      {
        text: "**사용자군별 라우팅 구조 분리** — 외국인 게스트는 [locale] 다국어 세그먼트, 한국인 호스트는 단일 언어 경로로 나눠 도메인 요구사항을 라우팅 설계로 해결",
      },
      {
        text: "PortOne 기반 PayPal USD 해외 결제 연동 및 결제 실패 · 취소 플로우 구현",
      },
      {
        text: "Socket.IO 기반 게스트-호스트 1:1 실시간 채팅 (재연결 정책 · 연결 상태 관리 · 언마운트 정리)",
      },
      {
        text: "호스트 등록 다단계 폼, 예약 · 리뷰 · 위시리스트 등 핵심 사용자 플로우 개발",
      },
      {
        text: "백엔드 리소스가 부족한 환경에서 누락된 API를 직접 구현하고 응답 스펙 불일치 · 오류를 수정하며 서버 로직 보완",
      },
    ],
  },

  {
    slug: "indition",
    name: "indition",
    company: "로커스코리아",
    tags: [],
    subtitle: "물류 데이터 기반 AI SaaS 플랫폼",
    period: "2024.11 ~ 2025.06",
    stack: [
      {
        label: "Front-end",
        items: ["Next.js 15 (App Router)", "React 19", "TypeScript"],
      },
      { label: "State", items: ["React Query", "Zustand"] },
      { label: "Auth", items: ["NextAuth"] },
      { label: "UI", items: ["SCSS Modules"] },
      { label: "Etc", items: ["Socket.IO"] },
      { label: "Infra", items: ["AWS Amplify"] },
    ],
    background:
      "기존 물류 현장에서는 재고 누락 · 초과 · 미정리 문제가 빈번했고, WMS는 단순 기록 수준에 머물러 실시간 대응이 어려웠습니다. 물류 데이터를 기반으로 예측과 협업을 함께 지원하는 SaaS 플랫폼을 구축했습니다.",
    achievements: [
      {
        text: "**React Query + Zustand 기반 상태 관리 구조 설계** — 사내 기존 프로젝트의 Redux-Saga 대신 새 조합을 채택하고, 서버 상태와 클라이언트 상태를 분리해 개발 효율 40% 향상",
      },
      {
        text: "**Next.js 15 App Router 기반 프로젝트 구조 설계** — 라우트 그룹으로 인증 경계를 분리하고 Suspense 로딩 UI 적용, 서버/클라이언트 컴포넌트 분리로 SSR 최적화",
      },
      {
        text: "**공통 컴포넌트 QA 페이지 구축** — 디자인 시스템 컴포넌트를 상태 · 변형별로 한 화면에서 검증, 컨테이너 너비 전환으로 반응형까지 확인 가능하게 구성 → **QA 시간 40% 단축**",
      },
      {
        text: "AI 어시스턴트 채팅 UI 구현 — 로딩 상태 표시, 글자 단위 출력, 응답 중단 및 재시도 처리로 체감 대기시간 개선",
      },
      {
        text: "Socket.IO 기반 실시간 채팅 · 메모(크기 조절 · 이동) 협업 기능 구현 — 키 기반 소켓 인스턴스 재사용과 명시적 해제로 중복 연결 방지",
      },
      {
        text: "TypeScript any 사용 대폭 축소 등 코드 품질 개선",
      },
    ],
    technicalChoices: [
      {
        title: "Redux · Redux-Saga 대신 React Query + Zustand",
        body: "이전 두 회사에서 사가 모듈 69개 · 액션 타입 1,600여 개 규모의 Redux-Saga 코드베이스를 운영하며, 단순 조회 하나에도 액션 · 리듀서 · 사가 3개 파일이 필요한 구조적 비용을 경험했습니다. 신규 프로젝트를 시작하면서 같은 방식을 반복하지 않기로 하고, API 요청 · 응답 로직 비중이 높고 캐싱과 리페치가 중요한 서비스 특성을 고려해 서버 상태는 React Query에 위임하고 클라이언트 전역 상태만 Zustand로 관리하는 분리 설계를 택했습니다.",
        points: [
          "useQuery 데이터 캐싱, staleTime · refetchOnWindowFocus로 네트워크 요청 최적화",
          "isLoading · isFetching · error 내장 상태 활용으로 UI 로직 단순화",
        ],
      },
      {
        title: "Pages Router 대신 App Router 채택",
        body: "layout · loading · error 파일 규칙으로 화면 단위 관리가 유연해졌고, 라우트 그룹으로 로그인 전후 경계를 구조적으로 나눌 수 있었습니다. 서버 컴포넌트와 클라이언트 컴포넌트를 분리해 초기 로딩을 개선했습니다.",
      },
      {
        title: "Serverless Framework 대신 AWS Amplify 채택",
        body: "이전 프로젝트에서 쓰던 serverless framework가 Next.js 15와 버전 호환이 되지 않아, GitHub 연동 CI/CD · 정적 자산 호스팅 · 도메인 연결을 통합 관리할 수 있는 Amplify를 도입했습니다.",
      },
    ],
    learning:
      "컴포넌트를 수정할 때마다 이를 사용하는 화면을 일일이 찾아 확인하느라 배포가 지연되던 문제를 발견. 공통 컴포넌트를 상태별로 모아 보여주는 테스트 페이지를 구축하고, 로그인 없이 접근 가능하도록 배치해 QA 담당자와 디자이너가 직접 확인할 수 있게 구성. 작은 효율화가 팀 전체 개발 속도와 제품 품질에 큰 영향을 준다는 점을 체감.",
  },

  {
    slug: "trenshow",
    name: "TRENSHOW · DDPICK",
    company: "Trenshow",
    tags: [],
    subtitle: "동대문 의류 물류 SaaS(WMS) 및 배송 플랫폼",
    period: "2024.06 ~ 2024.10",
    stack: [
      {
        label: "Front-end",
        items: ["Next.js 12", "React", "TypeScript", "React Native"],
      },
      { label: "State", items: ["Redux", "Redux-Saga"] },
      { label: "UI", items: ["SCSS Modules"] },
      {
        label: "Etc",
        items: ["Socket.IO", "react-barcode", "jsPDF", "XLSX"],
      },
      { label: "Infra", items: ["Serverless", "AWS S3"] },
    ],
    background:
      "동대문 의류 유통 현장은 사입자 · 화주사 · 물류센터 · 라이더 등 다양한 주체가 얽힌 복잡한 구조임에도 이를 통합 관리할 SaaS가 부재했습니다. 다주체 통합 플랫폼 구축을 목표로 프로젝트가 시작되었습니다.",
    achievements: [
      {
        text: "**웹뷰 ↔ 네이티브 양방향 바코드 통신 프로토콜 설계** — 입고 · 적치 · 피킹 · 출고 등 작업 맥락에 따라 스캐너 모드를 전환하고, 스캔 실패 시 에러 코드를 네이티브 스캐너 UI로 되돌려 즉시 피드백",
        children: [
          "iOS와 Android의 message 이벤트 수신 대상 차이를 양쪽 리스너 등록으로 해결",
          "스캔 결과에 따른 상태 분기 처리로 현장 작업 인력 30% 절감",
        ],
      },
      {
        text: "**공통 UI 컴포넌트 세트 · 폼 훅 설계로 6개 플랫폼 2개월 내 동시 출시** — 버튼 · 입력 · 셀렉트 · 데이트피커 등 공통 세트를 정의해 플랫폼 간 재사용",
      },
      {
        text: "**반복 입력 자동화 폼 훅 구현** — 필드명 규칙 기반으로 연락처 · 사업자번호 · 카드번호 등 포맷을 자동 적용해 현장 반복 입력 오류 감소, 재고 처리 속도 30~50% 향상",
      },
      {
        text: "바코드 라벨 발행 파이프라인 구축 — 로케이션 · 상품 · 반품 · 거래처 4종 바코드 생성 및 대량 PDF 출력",
      },
      {
        text: "Socket.IO 기반 관리자-작업자 실시간 알림 · 채팅 연동으로 소통 병목 해소",
      },
      {
        text: "입고 → 적치 → 피킹 → 출고 → 반품 전 라이프사이클 화면과 일별 · 월별 정산 시스템 개발",
      },
    ],
    learning:
      "물류 작업자들이 반복 입력으로 인한 오류를 꾸준히 제기. 이를 개선하기 위해 자동화 입력과 프로세스 단축 UI를 직접 설계 · 구현. 단순한 UI 개선도 현장 효율을 크게 높일 수 있다는 점, 사용자의 목소리가 제품 완성도의 핵심 동력이라는 점을 체감.",
  },

  {
    slug: "faav",
    name: "faav",
    company: "261house",
    tags: ["4개 프로덕트"],
    subtitle: "구독 기반 패션 커머스 플랫폼",
    period: "2021.12 ~ 2024.05",
    stack: [
      {
        label: "Front-end",
        items: ["Next.js 12", "React", "TypeScript", "React Native"],
      },
      { label: "State", items: ["Redux", "Redux-Saga"] },
      { label: "UI", items: ["SCSS Modules"] },
      {
        label: "Etc",
        items: ["부트페이", "XLSX", "jsPDF", "Froala Editor"],
      },
      { label: "Infra", items: ["Serverless", "AWS S3"] },
    ],
    background:
      "시즌성 재고 순환을 위한 실물 구독 시스템이 필요했고, 인플루언서 협찬부터 세컨핸즈 판매까지 이어지는 전환 흐름을 설계해야 했습니다.",
    problem:
      "공급사 담당자들이 기존 어드민의 복잡한 등록 절차를 지속적으로 불편함으로 제기했고, 운영팀도 등록 오류를 일일이 검수하느라 병목이 발생했습니다. 공급사 확보가 서비스 성장의 핵심 지표였던 만큼, 등록 경험 개선을 최우선 과제로 정의하고 어드민 전면 개편을 진행했습니다.",
    achievements: [
      {
        text: "**공급사 어드민 전면 개편 → 공급사 약 200% 증가에 기여** — 등록 프로세스를 단순화한 신규 어드민 UI를 구축해 신규 공급사 온보딩 장벽을 낮추고, 운영팀 검수 업무를 대폭 단축",
        children: [
          "약관 → 정책 → 정보 입력 3단계 스텝 구조로 재설계해 이탈 지점을 분산",
          "기존 상품 정보를 불러와 복제하는 기능을 추가해 유사 상품 반복 등록 시간 단축",
          "옵션 · 재고 일괄 적용 UI로 대량 등록 시 입력 횟수 감소",
          "입력 단계에서 즉시 검증해 등록 후 반려되는 케이스를 줄이고 운영팀 검수 부담 완화",
        ],
      },
      {
        text: "**자체 간편결제 FaavPay 프론트엔드 개발** — PG 빌링키 기반 카드 등록 · 대표카드 · 할부, 6자리 결제 비밀번호 등록 · 검증, 매 입력마다 배열을 섞는 보안 키패드 구현 → 결제 단계 3단계에서 1단계로 단축, **장바구니 이탈률 약 15% 감소**",
      },
      {
        text: "**이미지 업로드 · 서빙 구조 개선 제안 및 주도** — 서버 경유 업로드를 Presigned URL 기반 S3 직접 병렬 업로드로 전환. 백엔드 개발자와 함께 학습한 뒤 역할을 나눠 구현했고, 서빙 구조 개선까지 협업해 **평균 이미지 로딩 속도 45% 단축**",
      },
      {
        text: "**React Native WebView 하이브리드 앱 개발** — intent 스킴 폴백 처리로 안드로이드 카드사 앱 호출 실패 문제 해결, History API 후킹으로 웹뷰 내 SPA 라우팅을 네이티브에 동기화해 하드웨어 백버튼 동작 정상화",
      },
      {
        text: "커머스 SEO 대응을 위해 페이지 SSR 적용, 카카오 · 네이버 소셜 로그인 연동",
      },
      {
        text: "주문 데이터 26개 컬럼 엑셀 양방향 연동 및 운송장 · 인보이스 자동 출력으로 운영팀 수작업 제거",
      },
    ],
    learning:
      "공급사 담당자들이 반복해서 제기하던 불편이 실제로는 서비스 성장 지표와 직결된 문제임을 확인. 화면을 새로 그리기보다 실제 등록 흐름을 따라가며 불필요한 단계를 걷어내는 데 집중. 불편의 표면이 아니라 그 뒤의 작업 흐름을 봐야 개선이 지표로 이어진다는 점, 어드민 같은 내부 도구의 UX도 곧 사업 지표가 될 수 있다는 점을 체감.",
  },

  {
    slug: "epl-radar",
    name: "EPL Radar",
    company: "개인 프로젝트",
    tags: ["진행 중", "사이드 프로젝트", "1인 개발"],
    subtitle:
      "무료 API(분당 10회) 한도 안에서 여러 사용자가 동시에 쓰는 FotMob 스타일 축구 정보 서비스",
    period: "2026 ~ 진행 중",
    repo: "github.com/luckychdl/epl-radar",
    stack: [
      {
        label: "Front-end",
        items: ["Next.js 16 (App Router)", "React 19", "TypeScript"],
      },
      { label: "State", items: ["React Query", "Zustand"] },
      { label: "UI", items: ["SCSS Modules"] },
      { label: "AI", items: ["Claude API"] },
      { label: "Test", items: ["Vitest", "Playwright"] },
    ],
    metrics: [
      { value: "9 → 2", label: "홈 캐시 갱신 1회당 외부 API 요청 수" },
      { value: "71%", label: "리그 페이지 3회 조회 시 캐시 적중률 (실측)" },
      { value: "0회", label: "AI 기능 · 즐겨찾기로 늘어나는 외부 요청" },
      { value: "119", label: "단위 테스트 103 + E2E 16" },
    ],
    background:
      '무료 플랜은 분당 10회 요청 제한이 있고, 스코어가 지연되며, 라인업 · 선수 개별 스탯을 주지 않습니다. 이 제약을 숨기는 대신 설계의 전제로 두었습니다. 그래서 이 프로젝트의 주제는 기능 개수가 아니라 **분당 10회 한도 안에서 여러 사용자가 동시에 써도 서비스가 도는 캐시 · 요청 설계**입니다. UI 어디에도 "실시간"이라고 쓰지 않고 "자동 갱신 · HH:mm 기준"으로 표기했습니다.',
    architecture: {
      flow: [
        { name: "브라우저 1…N", detail: "React Query" },
        { name: "/api/football/*", detail: "프록시 · 키 은닉 · 입력 검증" },
        { name: "footballServerFetch", detail: "ISR 60초 / 10분 / 24시간" },
        { name: "football-data.org", detail: "분당 10회 한도" },
      ],
      note: "클라이언트는 외부 API를 직접 부르지 않고 API 키는 서버 전용 계층에서만 읽습니다. 탭이 5개든 50개든 외부 호출은 캐시 주기당 1회입니다.",
    },
    achievements: [
      {
        text: "**요청 예산 설계 → 홈 갱신당 외부 요청 9회 → 2회** — 처음에는 8개 리그를 리그마다 따로 불러와 홈 한 번 갱신에 9회를 썼고, 리그 · 팀 페이지를 여는 순간 429가 났습니다. /matches 단일 호출에 날짜 · 대회 필터를 걸어 한 번에 받고, 리그별 그룹핑은 순수 함수로 옮겼습니다. 기능마다 분당 몇 회를 쓰는지 먼저 계산하고 여유분 3회 이상을 남기는 기준으로 설계했습니다.",
      },
      {
        text: "**설계가 실제로 도는지 보여주는 계측 화면 (/budget)** — 서버 fetch 계층에 계측을 넣고 경로별 호출 · 외부 호출 · 캐시 적중률, 최근 1분 외부 호출 수, API가 헤더로 알려주는 잔여 한도를 화면으로 노출. 캐시 적중은 응답 Date 헤더로 판정(Next fetch 캐시는 헤더까지 그대로 재생)",
        children: [
          "리그 페이지 3회 연속 조회 실측 — /competitions/PL/matches?status=FINISHED: 호출 6 · 외부 1 · 캐시 적중 83%",
          "/competitions/PL/standings · /competitions/PL · /scorers: 각 호출 3 · 외부 1 · 캐시 적중 67%",
          "전체 캐시 적중률 71% (최근 1분 외부 호출 6 / 10)",
        ],
      },
      {
        text: "**Claude API 매치 프리뷰 · 승부 예측 — 비용 · 지연 · 실패 통제**",
        children: [
          "입력은 matchId 하나만 신뢰하고, 프롬프트 데이터는 이미 캐시된 URL을 재사용 → AI 때문에 축구 API 요청이 늘지 않음",
          "프리뷰: matchId + 경기 상태를 캐시 키로 써서 상태가 바뀌면 자동 무효화, 스트리밍 응답으로 첫 글자 대기 단축",
          "예측: JSON 스키마로 출력 고정, 킥오프 전 결과 고정, 같은 경기 동시 요청은 진행 중 요청을 공유해 생성 1회",
          "사용자 예측과 AI 예측을 경기 종료 후 채점(정확 스코어 3점 · 승부 1점), 채점은 화면에 있는 데이터로 처리해 추가 요청 없음",
          "키가 없거나 생성이 실패하면 해당 섹션만 사라지고 나머지 화면은 정상. 데이터에 없는 사실(부상 · 이적 · 라인업)을 만들지 않도록 프롬프트에 명시",
        ],
      },
      {
        text: "**조건부 자동 갱신 폴링** — 진행 중 경기가 있을 때만 폴링하고 전 경기가 끝나면 멈춤. 간격은 서버 캐시 주기(60초)와 맞추고, Page Visibility API로 백그라운드 탭에서는 정지 · 복귀 시 데이터가 오래됐을 때만 1회 갱신. 첫 렌더는 서버 데이터를 initialData로 주입",
      },
      {
        text: "**서버 컴포넌트 + localStorage 개인화의 하이드레이션 경계** — 서버는 전체 데이터 한 벌만 가져오고 클라이언트가 즐겨찾기 기준으로 정렬 · 필터만 하도록 분리. 사용자마다 서버 요청이 갈라지면 캐시 적중률이 무너지고 곧바로 429로 이어지기 때문. 하이드레이션 판별은 useSyncExternalStore 기반 훅으로 추가 렌더 없이 처리",
      },
      {
        text: "**429를 예외가 아닌 정상 시나리오로 처리** — 전용 에러로 구분하고 재시도 루프를 두지 않음(한도 초과 상황의 재시도는 한도를 더 태울 뿐). 부가 데이터 실패는 빈 배열로 폴백해 핵심 화면은 유지",
      },
      {
        text: "**선수 스탯이 없는 대신 경기 결과로 지표를 직접 계산** — 라운드별 순위 변동, 팀 폼 스트릭, 잔여 일정 난이도를 이미 받은 경기 결과만으로 계산해 추가 요청 없이 제공",
      },
    ],
    testing: [
      {
        text: "**Vitest 103개** — 승/무/패 판정, 순위 계산, 예측 채점 등 순수 함수의 경계 케이스 고정",
      },
      {
        text: "**Playwright 16개** — 목 서버로 API 응답을 대체해 실제 한도를 쓰지 않고 홈 → 순위 → 팀 상세 · 즐겨찾기 흐름 검증",
      },
      {
        text: '**Claude Code 활용** — 아키텍처 규칙(데이터 계층, ISR 상수, 폴백 정책)을 CLAUDE.md에 명시하고, 로드맵을 Phase로 나눠 한 번에 한 단계씩 구현. 단계마다 완료 조건(예: "AI를 켜고 꺼도 축구 API 요청 수가 같다")을 직접 확인 · 리뷰한 뒤 커밋',
      },
    ],
    learning:
      '처음 구조로는 리그 페이지 하나만 열어도 429가 났습니다. 한도를 늘릴 수 없으니 기능을 먼저 만들고 요청을 맞추는 대신, 요청 수를 먼저 계산하고 그 안에서 기능을 설계하는 순서로 바꿨습니다. AI 기능도 같은 기준으로 붙였습니다. "요청이 줄었다"는 말을 숫자로 확인할 수 있게 /budget 화면을 만든 것도, 설명보다 보여주는 쪽이 설득력이 있다고 느꼈기 때문입니다.',
  },
];

export const projectBySlug = (slug: string) =>
  projectsData.find((project) => project.slug === slug);
