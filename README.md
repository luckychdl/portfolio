# Portfolio — Shin Dong Won

프론트엔드 개발자 신동원의 포트폴리오 사이트입니다.
경력 타임라인, 기술 스택, 프로젝트 아카이브(배경 · 기술적 선택 · 성과)를 한곳에 정리했습니다.

## 기술 스택

| 영역       | 사용 기술                                        |
| ---------- | ------------------------------------------------ |
| 프레임워크 | Next.js 15 (App Router), React 19, TypeScript 5  |
| 스타일     | Tailwind CSS v4, CSS 변수 기반 디자인 토큰        |
| 애니메이션 | Framer Motion, Lottie (`lottie-react`)            |
| 아이콘     | react-icons (Lucide · Font Awesome)               |
| 폰트       | `next/font` — Space Grotesk, Inter, Noto Sans KR, JetBrains Mono |

## 시작하기

```bash
npm install
npm run dev      # http://localhost:3000
```

| 스크립트        | 설명                       |
| --------------- | -------------------------- |
| `npm run dev`   | 개발 서버                  |
| `npm run build` | 프로덕션 빌드              |
| `npm start`     | 빌드 결과 실행             |
| `npm run lint`  | ESLint 검사                |

> `next build` 는 `.next` 디렉터리를 공유하므로, 개발 서버를 켜둔 채로 빌드하지 마세요.

## 폴더 구조

App Router 위에 기능 단위(widget) 레이어를 얹은 구조입니다.

```
src/app
├── layout.tsx              # 폰트 · 테마 · 헤더/내비 · 배경 레이어
├── page.tsx                # 히어로 (타이핑 인트로)
├── about/                  # 경력 타임라인
├── skills/                 # 기술 스택 그리드
├── projects/               # 프로젝트 아카이브 (?type=<id>)
├── contact/                # 연락처
│
├── _widgets/               # 페이지를 구성하는 기능 단위 UI
│   ├── layout/             #   헤더 · 내비 · 테마 토글 · 타이핑 텍스트
│   ├── about/              #   타임라인
│   ├── skills/             #   스킬 카드 · 범례
│   ├── projects/           #   탭 메뉴 · 상세 카드 · 갤러리
│   └── contact/            #   연락 채널 목록
│
├── _components/            # 공용 프리미티브 (패널 · 섹션 헤딩 · 모달 · 스피너 …)
├── _data/                  # 콘텐츠 데이터 (projects · skills · 이미지 · 내비)
├── _hooks/                 # useIsMobile 등
├── _types/                 # 도메인 타입
├── _utils/                 # 클래스 프리셋
└── globals.css             # 디자인 토큰 · 유틸리티 · 키프레임
```

콘텐츠는 전부 [`src/app/_data/`](src/app/_data/) 에 있습니다. 이력을 수정할 땐 컴포넌트가 아니라 이곳만 고치면 됩니다.

- `projects.ts` — 프로젝트 상세 (배경 · 역할 · 기술적 선택 · 성과 · 배운 점)
- `skills.ts` — 기술 이름 · 숙련도 · 관련 프로젝트
- `projectImages.ts` — 프로젝트별 스크린샷 / Lottie
- `navigation.ts` — 상단·하단 내비 항목

## 디자인 시스템

색상 · 표면 · 경계선 · 그림자를 [`globals.css`](src/app/globals.css) 의 CSS 변수로 정의하고, Tailwind `@theme inline` 으로 연결했습니다.

```css
:root { --canvas: …; --surface: …; --fg: …; --accent: …; }
.dark { /* 같은 이름을 다시 정의 */ }
```

덕분에 컴포넌트에서는 `bg-canvas`, `text-muted`, `border-line` 처럼 한 번만 쓰면 라이트/다크가 함께 처리됩니다. 별도의 `dark:` 클래스는 필요하지 않습니다.

주요 유틸리티

| 클래스                       | 용도                                    |
| ---------------------------- | --------------------------------------- |
| `.panel` / `.panel-hover`    | 글래스 카드, 호버 리프트                |
| `.gradient-text`             | 헤드라인 그라데이션 텍스트              |
| `.grid-bg` / `.noise`        | 배경 그리드 · 필름 그레인               |
| `.link-underline`            | 링크 언더라인 트랜지션                  |

테마는 `layout.tsx` 의 인라인 스크립트가 첫 페인트 전에 적용하므로 새로고침 시 깜빡임이 없고, 선택값은 `localStorage.theme` 에 저장됩니다. 저장값이 없으면 OS 설정을 따릅니다.

모든 애니메이션은 `prefers-reduced-motion` 을 존중합니다.

## 렌더링 참고사항

- `/projects` 는 **동적 렌더링**(`ƒ`)입니다. `type` 쿼리를 서버 컴포넌트의 `searchParams` 로 읽기 때문입니다.
  클라이언트에서 `useSearchParams()` 를 쓰면 Suspense 경계가 클라이언트 렌더링으로 bailout 되고, 링크 이동으로 진입할 때 그 경계가 fallback(스피너)에 갇히는 문제가 있어 서버에서 해석하도록 바꿨습니다.
- 페이지 전환은 `AnimatePresence mode="wait"` 대신 pathname 을 key 로 한 페이드인을 사용합니다.
  `mode="wait"` 는 새 페이지 마운트를 지연시켜 라우터의 스크롤 리셋이 빈 페이지에 적용되는 문제가 있었습니다.
- 이미지 확대 모달은 `document.body` 로 포털됩니다. 페이지 전환 래퍼의 `transform`/`filter` 가 스태킹 컨텍스트를 만들어 `position: fixed` 오버레이가 헤더 아래로 깔리기 때문입니다.

## 연락처

- Email — vivid4112@gmail.com
- GitHub — [@luckychdl](https://github.com/luckychdl)
