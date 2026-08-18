# Portfolio — 신동원

> 문제를 새롭게 바라보고, 끝까지 해결하는 개발자

프론트엔드 개발자 신동원의 포트폴리오 사이트입니다.
**브라우저 안의 코드 에디터**를 컨셉으로, 이력서를 파일 트리 · 탭 · 줄번호가 있는 문서로 읽도록 만들었습니다.

## 기술 스택

| 영역       | 사용 기술                                                        |
| ---------- | ---------------------------------------------------------------- |
| 프레임워크 | Next.js 15 (App Router), React 19, TypeScript 5                   |
| 스타일     | Tailwind CSS v4, CSS 변수 기반 디자인 토큰                        |
| 애니메이션 | Framer Motion, Lottie (`lottie-react`)                            |
| 아이콘     | react-icons (VS Code 아이콘 세트 `react-icons/vsc`)               |
| 폰트       | `next/font` — JetBrains Mono, Inter, Noto Sans KR                 |

## 시작하기

```bash
npm install
npm run dev      # http://localhost:3000
```

| 스크립트        | 설명           |
| --------------- | -------------- |
| `npm run dev`   | 개발 서버      |
| `npm run build` | 프로덕션 빌드  |
| `npm start`     | 빌드 결과 실행 |
| `npm run lint`  | ESLint 검사    |

> `next build` 는 `.next` 디렉터리를 공유하므로, 개발 서버를 켜둔 채로 빌드하지 마세요.

## 화면 = 파일

라우트가 곧 에디터에 열리는 파일입니다. 탐색기 · 탭 · 상태바가 모두 이 매핑을 따릅니다.

| 파일                    | 라우트               | 내용                                       |
| ----------------------- | -------------------- | ------------------------------------------ |
| `README.md`             | `/`                  | 이름 · 타이틀 · About 소개                 |
| `career/timeline.ts`    | `/about`             | 경력 (회사 · 역할 · 기간 · 주요 성과)      |
| `career/education.ts`   | `/education`         | 학력                                       |
| `skills/stack.json`     | `/skills`            | 카테고리별 기술 스택                       |
| `projects/<slug>.md`    | `/projects/<slug>`   | 프로젝트 상세 (front matter + 마크다운)    |
| `contact.json`          | `/contact`           | 연락처 (복사 버튼 포함)                    |

`⌘K` / `Ctrl+K` 로 커맨드 팔레트를 열어 파일 이름으로 이동할 수 있습니다.

## 폴더 구조

```
src/app
├── layout.tsx              # 폰트 · 테마 · IDE 셸
├── page.tsx                # README.md
├── about/                  # career/timeline.ts
├── education/              # career/education.ts
├── skills/                 # skills/stack.json
├── projects/[slug]/        # projects/*.md
├── contact/                # contact.json
│
├── _widgets/
│   ├── ide/                #   타이틀바 · 액티비티바 · 탐색기 · 탭바 · 상태바 · 커맨드 팔레트
│   ├── projects/           #   프로젝트 문서 · 스크린샷 갤러리
│   ├── contact/            #   연락처 JSON
│   └── layout/             #   테마 토글 · 타이핑 텍스트
│
├── _components/            # editorSurface(줄번호 거터 · 신택스 토큰) · 미디어 · 모달
├── _data/                  # 이력 데이터
├── _hooks/                 # useIsMobile
├── _types/                 # 도메인 타입
└── globals.css             # 디자인 토큰 · 신택스 팔레트 · 유틸리티
```

## 이력 내용 수정하기

콘텐츠는 전부 [`src/app/_data/`](src/app/_data/) 에 있습니다. 컴포넌트는 건드릴 필요가 없습니다.

| 파일                | 내용                                            |
| ------------------- | ----------------------------------------------- |
| `profile.ts`        | 이름 · 태그라인 · About 문단 · 연락처            |
| `career.ts`         | 경력(`careerData`) · 학력(`educationData`)       |
| `skills.ts`         | Core / Proficient / Familiar / Infra / Domain    |
| `projects.ts`       | 프로젝트 상세                                    |
| `projectImages.ts`  | 프로젝트 slug 별 스크린샷                        |
| `workspace.ts`      | 파일 트리 · 탭 구성                              |

프로젝트 본문의 `**강조**` 표기는 `RichText` 가 볼드로 렌더링합니다.
프로젝트를 추가하려면 `projects.ts` 에 `slug` 를 가진 항목을 넣으면 됩니다 — 라우트 · 탐색기 · 탭 · 커맨드 팔레트가 자동으로 따라옵니다.

## 디자인 시스템

에디터 크롬 색과 신택스 팔레트를 [`globals.css`](src/app/globals.css) 의 CSS 변수로 정의하고, Tailwind `@theme inline` 으로 연결했습니다.

```css
:root { --editor: …; --sidebar: …; --syn-key: …; --syn-str: …; }
.dark { /* 같은 이름을 다시 정의 */ }
```

컴포넌트에서는 `bg-editor`, `text-muted`, `tok-str` 처럼 한 번만 쓰면 라이트/다크가 함께 처리됩니다. 별도의 `dark:` 클래스가 필요 없습니다.

주요 유틸리티

| 클래스                            | 용도                                     |
| --------------------------------- | ---------------------------------------- |
| `.code-surface` / `.code-line`    | CSS 카운터 기반 자동 줄번호 거터         |
| `.ind-1` ~ `.ind-3`               | 거터 정렬을 유지하는 들여쓰기 단계        |
| `.tok-key` `.tok-str` `.tok-com` … | 신택스 토큰 색                           |
| `.caret`                          | 깜빡이는 커서                            |

테마는 `layout.tsx` 의 인라인 스크립트가 첫 페인트 전에 적용하므로 깜빡임이 없고, 선택값은 `localStorage.theme` 에 저장됩니다. 저장값이 없으면 OS 설정을 따릅니다. 모든 애니메이션은 `prefers-reduced-motion` 을 존중합니다.

## 구현 노트

- **프로젝트 라우팅은 `/projects/[slug]`** — 쿼리스트링(`?type=`)으로 읽던 것을 경로로 옮겼습니다. 클라이언트에서 `useSearchParams()` 를 쓰면 Suspense 경계가 클라이언트 렌더링으로 bailout 되고, 링크 이동으로 진입할 때 그 경계가 fallback(스피너)에 갇히는 문제가 있었습니다. 지금은 모든 라우트가 정적으로 프리렌더됩니다.
- **페이지 전환은 pathname 을 key 로 한 페이드인** — `AnimatePresence mode="wait"` 는 새 페이지 마운트를 지연시켜 라우터의 스크롤 리셋이 빈 페이지에 적용되는 문제가 있었습니다.
- **Lottie 는 런타임 fetch** — `public/main_video.json` 등이 11MB씩이라 번들에 넣으면 `/projects` 가 16MB를 넘었습니다. 갤러리가 화면에 가까워질 때만 받아옵니다.
- **스크린샷 갤러리는 IntersectionObserver 로 게이팅** — `loading="lazy"` 만으로는 브라우저 기본 임계값(~1250px)이 넓어 첫 진입에 전부 요청됩니다.
- **이미지 확대 모달은 `document.body` 로 포털** — 조상 요소의 `transform`/`filter` 가 스태킹 컨텍스트를 만들어 `position: fixed` 오버레이가 헤더 아래로 깔립니다.

## 방문자 통계 (`/admin`)

방문 기록은 Supabase 에 쌓이고, 비밀번호로 잠긴 `/admin` 에서 확인합니다.
이 라우트는 탐색기 · 탭 · 커맨드 팔레트 어디에도 노출되지 않고 `noindex` 이며, IDE 셸도 씌우지 않습니다.

### 설정

1. [supabase.com](https://supabase.com) 에서 프로젝트를 만듭니다.
2. SQL Editor 에 [`supabase/schema.sql`](supabase/schema.sql) 을 붙여넣고 실행합니다.
   `page_views` 테이블 · 인덱스 · RLS · 순 방문자 집계 함수가 한 번에 만들어집니다.
3. `.env.example` 을 `.env.local` 로 복사하고 세 값을 채웁니다.

   | 변수                        | 값                                                        |
   | --------------------------- | --------------------------------------------------------- |
   | `SUPABASE_URL`              | Project Settings → Data API → Project URL                 |
   | `SUPABASE_SERVICE_ROLE_KEY` | Project Settings → API Keys → `service_role` (secret)     |
   | `ADMIN_PASSWORD`            | `/admin` 접속 비밀번호 (직접 정함)                        |

4. 배포 환경(Vercel 등)에도 같은 환경변수 세 개를 등록합니다.

> `service_role` 키는 RLS 를 우회합니다. 서버 라우트에서만 읽히고 번들에 들어가지 않도록
> `NEXT_PUBLIC_` 접두사를 붙이지 마세요.

### 동작

| 조각                          | 역할                                                                   |
| ----------------------------- | ---------------------------------------------------------------------- |
| `_components/visitTracker`    | 라우트가 바뀔 때 `/api/visit` 로 조회를 1건 보냄                       |
| `api/visit`                   | 봇 UA · `/admin` · 비정상 경로를 걸러내고 `page_views` 에 insert       |
| `api/admin/login`             | 비밀번호 확인 후 HMAC 서명 쿠키(7일) 발급 / 삭제                       |
| `_lib/visitStats`             | 최근 30일 기록을 KST 하루 경계로 집계                                   |
| `admin/`                      | 잠금 화면 + `stats.json` 형태의 통계 화면                              |

방문자는 브라우저 `localStorage` 에 한 번 발급되는 `pf_visitor_id` 로 구분합니다.
쿠키를 심지 않고 IP 도 저장하지 않으므로 별도 동의 배너가 필요 없습니다.

화면에는 누적 페이지뷰 · 누적 순 방문자, 오늘 / 최근 7일 / 최근 30일,
최근 14일 막대그래프, 페이지별 · 유입 경로별 순위, 기기 비율, 최근 방문 12건이 나옵니다.
유입 경로는 호스트 단위로 묶고 사이트 내부 이동은 제외합니다.

### 배포 (AWS Amplify)

Supabase 는 관리형이라 따로 배포할 것이 없습니다. 스키마만 올려두면 됩니다.
Amplify 는 방문자 통계가 붙으면서 정적 배포에서 **SSR 배포로 바뀌므로** 세 가지를 확인해야 합니다.

1. **플랫폼이 `WEB_COMPUTE` 인지** — 정적(`WEB`)으로 만들어진 앱이면 CLI 로 한 번 바꿔야 합니다.
   ```bash
   aws amplify get-app --app-id <APP_ID> --query 'app.platform'
   aws amplify update-app --app-id <APP_ID> --platform WEB_COMPUTE --region <REGION>
   ```
   그리고 App settings → General 에서 **서비스 역할(Service role)** 을 지정합니다.

2. **환경변수를 `.env.production` 으로 옮기는지** — Amplify 콘솔에 등록한 환경변수는
   SSR 런타임에 그대로 전달되지 않습니다. 저장소의 [`amplify.yml`](amplify.yml) 이 빌드 중에
   `.env.production` 으로 복사하도록 해두었습니다. 콘솔에는 값만 등록하면 됩니다.

3. **환경변수를 바꾸면 재배포** — 서버가 빌드 산출물의 `.env.production` 을 읽으므로
   콘솔에서 값만 고치고 재배포하지 않으면 반영되지 않습니다.

> AWS 는 배포 산출물을 읽을 수 있는 사람이 환경변수를 볼 수 있다고 안내합니다.
> `SUPABASE_SERVICE_ROLE_KEY` 가 노출되면 통계 테이블을 임의로 읽고 쓸 수 있으니,
> AWS 계정 접근 권한을 본인만 갖고 있는지 확인하세요.
> 더 엄격히 가려면 SSR 컴퓨트 IAM 역할 + Secrets Manager 로 옮기면 됩니다.

## 연락처

- Email — vivid4112@gmail.com
- GitHub — [@luckychdl](https://github.com/luckychdl)
- Web — [shindongwon.dev](https://shindongwon.dev)
