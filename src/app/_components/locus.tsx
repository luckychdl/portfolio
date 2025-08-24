import React from "react";
import {
  textBaseBold,
  textSmall,
  textSmallMargin,
} from "../_utils/classPresets";
import Card from "./Card";
import CardTitle from "./CardTitle";

const Locus = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      className="flex lg:flex-row flex-col items-start justify-start gap-x-4 lg:px-8 px-2 "
      ref={ref}
      id="locuskorea"
    >
      <div className="flex flex-col lg:min-w-[20%] lg:max-w-[20%] gap-y-4 w-full mb-4">
        <div className="border-1 p-4 rounded-2xl bg-black text-white flex w-full flex-col gap-y-2">
          <p>LOCUSKOREA</p>
          <p>2024-11 ~ 2025-06</p>
          <span className="w-full flex justify-center items-center bg-white text-black rounded-2xl px-2 font-bold">
            Lead Front-end Developer
          </span>
        </div>
        <div className="flex flex-row gap-2 flex-wrap">
          {[
            "React",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "React-Query",
            "Zustand",
          ].map((v, i) => (
            <span
              key={`${v}_${i}`}
              className="dark:bg-amber-100 text-sm dark:text-black bg-gray-400 text-white px-2 rounded-2xl flex items-center justify-center"
            >
              {v}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-4 w-full">
        <div className="flex flex-col gap-y-2">
          <Card>
            <span className="text-xl font-bold ">
              AI와 실시간 시스템으로 물류 업무를 재정의한 경험
            </span>
            <span className="text-xl font-bold">
              전체 UI/UX 구조 설계 및 프론트엔드 리드 개발
            </span>
          </Card>
          <Card>
            <CardTitle text="프로젝트 배경" />
            <p className={textSmallMargin}>
              기존 물류 산업에서는 재고 누락·초과·미정리 등의 문제가 당연시되어
              왔으며,
            </p>
            <p className={textSmallMargin}>
              WMS 시스템조차 단순 기록 수준에 머물러 예측이나 실시간 대응은
              불가능했습니다.
            </p>
            <p className={textSmall}>
              이에, 물류 데이터를 기반으로 한 AI 예측 모델과 자동 재고 파악
              기능을 포함한 통합 SaaS 솔루션을 기획하게 되었습니다.
            </p>
          </Card>
          <Card>
            <CardTitle text="기술적 선택과 전환 이유" />
            <div className="flex flex-col gap-y-2 mb-4">
              <CardTitle text="Redux / Redux-Saga → React Query + Zustand" />
              <p className={textSmallMargin}>
                기존에는 Redux + Redux-Saga 조합을 통해 전역 상태와 API 비동기
                흐름을 통합적으로 관리했으나, 다음과 같은 이유로 분리된 설계를
                도입했습니다
              </p>
              <p className={textSmallMargin}>
                → <b>Redux의 러닝 커브와 Boilerplate 이슈:</b> 간단한 상태
                관리에도 액션/리듀서/사가 파일이 필요해 개발 피로도가 높았고,
                초기 설정 시간이 과도하게 소요되었습니다.
              </p>
              <p className={textSmallMargin}>
                → <b>React Query 도입 이유:</b> API 요청/응답 로직이 많고, 요청
                간 캐싱, 리페치, 로딩 상태 관리가 중요했기 때문에 React Query의
                기능이 요구에 적합하다고 판단했습니다.
              </p>
              <p className={textSmallMargin}>→ useQuery를 통한 데이터 캐싱</p>
              <p className={textSmallMargin}>
                → staleTime, refetchOnWindowFocus로 네트워크 최적화
              </p>
              <p className={textSmallMargin}>
                → error, isFetching, isLoading 등 내장 상태 사용으로 UI 로직
                단순화
              </p>
            </div>
            <div className="flex flex-col gap-y-2 mb-4">
              <CardTitle text="Next.js 12 → Next.js 15" />
              <p className={textSmallMargin}>
                → App Router 기반 구조로 전환하여 Layout, Slot, Suspense,
                Streaming 등 모던 패턴 대응
              </p>
              <p className={textSmallMargin}>
                → layout.tsx, loading.tsx, error.tsx 구조를 통해 화면 단위의
                관리가 훨씬 유연해졌고, 클라이언트 컴포넌트와 서버 컴포넌트를
                분리해 SSR 최적화 가능
              </p>
            </div>
            <ul className="flex flex-col gap-y-2">
              <CardTitle text="기존 Serverless Framework → AWS Amplify" />
              <p className={textSmallMargin}>
                → Next.js 15를 사용하면서 serverless framework가 더 이상 버전
                호환이 되지 않아, 운영 편의성과 최신 프레임워크 지원을 위해
                Amplify로 전환.
              </p>
              <p className={textSmallMargin}>
                → 특히 GitHub 연동을 통한 CI/CD 자동화, 정적 자산 호스팅, 도메인
                연결까지 통합 관리할 수 있어, 개발-운영 효율이 크게 향상됨.
              </p>
            </ul>
          </Card>
          <Card>
            <CardTitle text="맡은 역할" />
            <p className={textSmallMargin}>
              플랫폼 전체 아키텍처 설계 및 UI/UX 기획 주도
            </p>
            <p className={textSmallMargin}>
              WebSocket/LLM 기반 실시간 시스템 구현
            </p>
            <p className={textSmall}>
              물류센터 현장 인터뷰를 통한 사용자 중심 설계
            </p>
          </Card>
          <Card>
            <CardTitle text="해결한 문제 / 주요 구현 포인트" />
            <p className={textBaseBold}>컴포넌트 QA 페이지 도입 및 제작</p>
            <p className={textSmallMargin}>
              → 컴포넌트 QA 페이지 도입으로 QA 시간 단축으로 프로젝트 배포 기간
              단축
            </p>
            <p className={textBaseBold}>
              WMS 시스템의 핵심 기능 분석 후 맞춤형 UI로 재구현
            </p>

            <p className={textBaseBold}>
              AI 기반 실시간 예측 및 응답 시스템 구현
            </p>
            <p className={textSmallMargin}>
              → 재고 예측, 수요 예측, 추천 발주 기능 등은 LLM + 실제 입출고
              데이터 기반
            </p>
            <p className={textSmallMargin}>
              → OpenAI API를 활용한 문서/이미지 기반 질문 응답 시스템 도입
            </p>
            <p className={textBaseBold}>
              현장 작업자의 업무를 돕는 실시간 기능
            </p>
            <p className={textSmallMargin}>
              → 채팅, 메모(크기 조절·이동·스티커), 송장 발급, 엑셀·바코드 인쇄
              등
            </p>
            <p className={textBaseBold}>실제 물류 업무 흐름을 UI에 맞춰 구현</p>
            <p className={textSmall}>
              → 상품 등록 → 입고 처리 → 재고 자동 반영 → 출고 등록 → 송장
              출력까지 단일 페이지 내 흐름 구현
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
});
Locus.displayName = "Locus";
export default Locus;
