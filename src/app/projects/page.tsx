"use client";
import TransitionWrapper from "../_components/transitionWrapper";
import { HiOutlineClipboardList } from "react-icons/hi";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export default function Projects() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const getPositionClass = () => {
    switch (type) {
      case "locuskorea":
        return "top-0";
      case "trenshow":
        return "top-1/2 -translate-y-1/2";
      case "261house":
        return "bottom-0";
      default:
        return "top-0";
    }
  };
  useEffect(() => {
    if (type) {
      const el = document.getElementById(type);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [type]);
  return (
    <TransitionWrapper>
      <div className="flex-1 flex  items-start justify-start w-full h-full">
        <div className="flex flex-col py-8 gap-y-4 relative w-[300px] h-full">
          {/* Title */}
          <div className="flex flex-row items-center justify-start gap-x-2">
            <HiOutlineClipboardList className="w-12 h-12 text-black dark:text-amber-100" />
            <p className="text-black dark:text-amber-100 text-4xl">PROJECTS</p>
          </div>

          <div className="flex flex-col items-start justify-start absolute top-1/2 left-0 -translate-y-1/2 border-l-4 border-gray-200 pl-4">
            {["locuskorea", "trenshow", "261house"].map((key) => {
              const isActive = type == key;
              return (
                <Link href={`/projects?type=${key}`} key={key} replace>
                  <button className="h-12 flex items-center relative">
                    {type === key && (
                      <motion.div
                        layoutId="indicator"
                        className="absolute -left-5 w-1 h-12 bg-black dark:bg-amber-100"
                      />
                    )}
                    <motion.p
                      animate={{
                        color: isActive
                          ? "text-gray-200 " // light mode active
                          : "text-gray-500 dark:text-amber-100 ", // light mode inactive (gray-400)
                        // dark mode 고려
                        ["--tw-text-opacity"]: 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`text-xl ${
                        type == key ? "text-black" : "text-gray-200"
                      } ${
                        type == key
                          ? "dark:text-amber-100"
                          : "dark:text-gray-500"
                      } uppercase`}
                    >
                      {key}
                    </motion.p>
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-y-10 flex-1 overflow-y-auto text-black dark:text-amber-100">
          <div className="flex flex-row items-start justify-start gap-x-10 px-8">
            <span className="min-w-fit">2024-11 ~ 2025-06</span>

            <div className="flex flex-col gap-y-4" id="locuskorea">
              <div className="flex flex-col gap-y-2">
                <p className=" text-2xl font-bold">
                  Lead Front-end Developer · indition / indition-warehouse
                </p>

                <span className="text-xl font-bold">
                  AI와 실시간 시스템으로 물류 업무를 재정의한 경험
                </span>
                <span className="text-xl font-bold">
                  전체 UI/UX 구조 설계 및 프론트엔드 리드 개발
                </span>
                <div className="flex flex-col gap-y-2">
                  <p className="font-bold text-xl">프로젝트 배경</p>
                  <span className=" text-sm">
                    기존 물류 산업에서는 재고 누락·초과·미정리 등의 문제가
                    당연시되어 왔으며,
                  </span>
                  <span className=" text-sm">
                    WMS 시스템조차 단순 기록 수준에 머물러 예측이나 실시간
                    대응은 불가능했습니다.
                  </span>
                  <span className=" text-sm">
                    이에, 물류 데이터를 기반으로 한 AI 예측 모델과 자동 재고
                    파악 기능을 포함한 통합 SaaS 솔루션을 기획하게 되었습니다.
                  </span>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="font-bold text-xl">기술적 선택과 전환 이유</p>
                  <ul className="flex flex-col gap-y-2">
                    <p className="font-bold text-xl">
                      Redux / Redux-Saga → React Query + Zustand
                    </p>
                    <p>
                      기존에는 Redux + Redux-Saga 조합을 통해 전역 상태와 API
                      비동기 흐름을 통합적으로 관리했으나, 다음과 같은 이유로
                      분리된 설계를 도입했습니다
                    </p>
                    <li className=" text-sm">
                      Redux의 러닝 커브와 Boilerplate 이슈: 간단한 상태 관리에도
                      액션/리듀서/사가 파일이 필요해 개발 피로도가 높았고, 초기
                      설정 시간이 과도하게 소요되었습니다.
                    </li>
                    <li className=" text-sm">
                      React Query 도입 이유: API 요청/응답 로직이 많고, 요청 간
                      캐싱, 리페치, 로딩 상태 관리가 중요했기 때문에 React
                      Query의 기능이 요구에 적합하다고 판단했습니다.
                    </li>
                    <li className=" text-sm">useQuery를 통한 데이터 캐싱</li>
                    <li>staleTime, refetchOnWindowFocus로 네트워크 최적화</li>
                    <li>
                      error, isFetching, isLoading 등 내장 상태 사용으로 UI 로직
                      단순화
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-y-2">
                    <p className="font-bold text-xl">Next.js 12 → Next.js 15</p>
                    <li className=" text-sm">
                      App Router 기반 구조로 전환하여 Layout, Slot, Suspense,
                      Streaming 등 모던 패턴 대응
                    </li>
                    <li className=" text-sm">
                      layout.tsx, loading.tsx, error.tsx 구조를 통해 화면 단위의
                      관리가 훨씬 유연해졌고, 클라이언트 컴포넌트와 서버
                      컴포넌트를 분리해 SSR 최적화 가능
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-y-2">
                    <p className="font-bold text-xl">
                      기존 Serverless Framework → AWS Amplify
                    </p>
                    <li className=" text-sm">
                      Next.js 15를 사용하면서 serverless framework가 더 이상
                      버전 호환이 되지 않아, 운영 편의성과 최신 프레임워크
                      지원을 위해 Amplify로 전환.
                    </li>
                    <li className=" text-sm">
                      특히 GitHub 연동을 통한 CI/CD 자동화, 정적 자산 호스팅,
                      도메인 연결까지 통합 관리할 수 있어, 개발-운영 효율이 크게
                      향상됨.
                    </li>
                  </ul>
                </div>
                <ul className="flex flex-col gap-y-2">
                  <p className="font-bold text-xl">맡은 역할</p>
                  <li className=" text-sm">
                    플랫폼 전체 아키텍처 설계 및 UI/UX 기획 주도
                  </li>
                  <li className=" text-sm">
                    WebSocket/LLM 기반 실시간 시스템 구현
                  </li>
                  <li className=" text-sm">
                    물류센터 현장 인터뷰를 통한 사용자 중심 설계
                  </li>
                </ul>
                <div className="flex flex-col gap-y-2">
                  <p className="font-bold text-xl">
                    해결한 문제 / 주요 구현 포인트
                  </p>
                  <ul>
                    <p>WMS 시스템의 핵심 기능 분석 후 맞춤형 UI로 재구현</p>
                  </ul>
                  <ul className="flex flex-col gap-y-2">
                    <p>AI 기반 실시간 예측 및 응답 시스템 구현</p>
                    <li className=" text-sm">
                      재고 예측, 수요 예측, 추천 발주 기능 등은 LLM + 실제
                      입출고 데이터 기반
                    </li>
                    <li className=" text-sm">
                      OpenAI API를 활용한 문서/이미지 기반 질문 응답 시스템 도입
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-y-2">
                    <p>현장 작업자의 업무를 돕는 실시간 기능</p>
                    <li className=" text-sm">
                      채팅, 메모(크기 조절·이동·스티커), 송장 발급, 엑셀·바코드
                      인쇄 등
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-y-2">
                    <p> 실제 물류 업무 흐름을 UI에 맞춰 구현</p>
                    <li className=" text-sm">
                      상품 등록 → 입고 처리 → 재고 자동 반영 → 출고 등록 → 송장
                      출력까지 단일 페이지 내 흐름 구현
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row gap-4">
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
                    className="dark:bg-amber-100 dark:text-black bg-gray-400 text-white px-2 rounded-2xl flex items-center justify-center"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-x-10 px-8">
            <span className="min-w-fit">2024-11 ~ 2025-06</span>

            <div className="flex flex-col gap-y-4" id="trenshow">
              <div className="flex flex-col gap-y-2">
                <p className=" text-2xl font-bold">
                  Front-end Developer · WMS / DDPICK
                </p>

                <span>
                  동대문 물류의 복잡한 흐름을 통합된 플랫폼으로 단순화하다
                </span>
                <span>전체 UI/UX 구조 설계 및 프론트엔드 리드 개발</span>
                <div className="flex flex-col gap-y-2">
                  <p className="font-bold text-xl">프로젝트 배경</p>
                  <span className=" text-sm">
                    동대문 기반의 의류 유통 현장은 사입자, 화주사, 물류센터,
                    라이더 등 다양한 주체가 엮인 복잡한 구조를 가지고 있음에도
                    불구하고,
                  </span>
                  <span className=" text-sm">
                    이를 통합적으로 관리할 수 있는 SaaS 시스템은 부재했습니다.
                  </span>
                  <span className=" text-sm">
                    특히 WMS가 단순 재고기록용에 머물고 있고, 플랫폼 간 UI/UX
                    괴리로 작업 효율 저하가 빈번히 발생하고 있었습니다.
                  </span>
                  <span className=" text-sm">
                    이를 해결하기 위해, 다주체 통합 플랫폼 구축을 목표로
                    프로젝트가 시작되었습니다.
                  </span>
                </div>
                <ul className="flex flex-col gap-y-2">
                  <p className="font-bold text-xl">맡은 역할</p>
                  <li className=" text-sm">Front-End 전담 개발자</li>
                  <li className=" text-sm">
                    6개 플랫폼의 웹/앱 UI/UX 전면 설계 및 개발
                  </li>
                  <li className=" text-sm">
                    React Native 기반의 모바일 & 웹 통합 개발 구조 설계
                  </li>
                  <li className=" text-sm">
                    입고-출고-사입-재고 프로세스 전체 흐름 설계
                  </li>
                </ul>
                <div className="flex flex-col gap-y-2">
                  <p> 해결한 문제 / 주요 구현 포인트</p>
                  <ul className="flex flex-col gap-y-2">
                    <p className="font-bold text-xl">[dcf-wms]</p>
                    <li className=" text-sm">
                      엑셀 업로드/다운로드, 바코드 인쇄 기능을 통해 수작업 감소
                    </li>
                    <li className=" text-sm">
                      기술적으로는 깔끔했지만 현장성과 괴리된 UI로 초기에는
                      피드백 다수 발생 → 사용자 중심 UX 개선 경험
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-y-2">
                    <p className="font-bold text-xl">[dcf-customer]</p>
                    <li className=" text-sm">
                      화주사(고객사)를 위한 입고/출고 관리 웹 서비스
                    </li>
                    <li className=" text-sm">
                      채널톡 연동 통한 CS 대응 시스템 구축
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-y-2">
                    <p>현장 작업자의 업무를 돕는 실시간 기능</p>
                    <li className=" text-sm">
                      채팅, 메모(크기 조절·이동·스티커), 송장 발급, 엑셀·바코드
                      인쇄 등
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-y-2">
                    <p className="font-bold text-xl">[dcf-crew]</p>
                    <li className=" text-sm">물류센터 작업자용 앱</li>
                    <li className=" text-sm">
                      출근 등록, 입/출고 작업, 픽업, 재고 확인 기능 구현
                    </li>
                    <li className=" text-sm">
                      USB 바코드 리더기와 직접 연동해, 단말기에서 바로 작업 처리
                      가능
                    </li>
                    <li className=" text-sm">
                      단순한 앱이 아닌 하드웨어 연동 앱 설계 경험 확보
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-y-2">
                    <p className="font-bold text-xl">
                      [ddpick / rider / customer]
                    </p>
                    <li className=" text-sm">
                      사입 → 배송 → 고객 전달까지의 전 과정을 분리된 앱으로 구현
                    </li>
                    <li className=" text-sm">
                      React Native 기반으로 3개의 앱을 동시에 효율적으로 개발
                    </li>
                    <li className=" text-sm">
                      실시간 상태 확인, 알림 기능, 픽업 요청까지 모두 앱 내에서
                      수행
                    </li>
                  </ul>
                </div>
                <ul className="flex flex-col gap-y-2">
                  <p className="font-bold text-xl">결과 및 성과</p>
                  <li className=" text-sm">
                    총 6개 플랫폼 동시 운영 환경 구현
                  </li>
                  <li className=" text-sm">
                    앱/Web을 모두 고려한 설계로 개발 및 유지보수 시간 절약
                  </li>
                  <li className=" text-sm">
                    관리자/작업자/고객사/라이더 간 소통 병목 해소 → 업무 분산
                    성공
                  </li>
                  <li className=" text-sm">
                    재고처리 속도 30~50% 향상, 실시간 상태 파악 정확도 상승
                  </li>
                  <li className=" text-sm">
                    현장 사용자 피드백 기반 UX 개선 → 반복 작업 최소화
                  </li>
                </ul>
              </div>
              <div className="flex flex-row gap-4">
                {[
                  "React",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Redux",
                  "Redux-Saga",
                ].map((v, i) => (
                  <span
                    key={`${v}_${i}`}
                    className="dark:bg-amber-100 dark:text-black bg-gray-400 text-white px-2 rounded-2xl flex items-center justify-center"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-x-10 px-8 py-8">
            <span className="min-w-fit">2024-11 ~ 2025-06</span>

            <div className="flex flex-col gap-y-4" id="261house">
              <div className="flex flex-col gap-y-2">
                <p className=" text-2xl font-bold">
                  Front-end Developer · faav / faav-connect / faav-studio
                </p>

                <span>
                  faav는 시즌성 의류의 재고 문제를 해결하기 위해 대여, 협찬,
                  구독, 리세일을 결합한 의류 순환 플랫폼
                </span>

                <div>
                  <p className="font-bold text-xl">프로젝트 배경</p>
                  <span className=" text-sm">
                    기존 물류 산업에서는 재고 누락·초과·미정리 등의 문제가
                    당연시되어 왔으며,
                  </span>
                  <span className=" text-sm">
                    WMS 시스템조차 단순 기록 수준에 머물러 예측이나 실시간
                    대응은 불가능했습니다.
                  </span>
                  <span className=" text-sm">
                    이에, 물류 데이터를 기반으로 한 AI 예측 모델과 자동 재고
                    파악 기능을 포함한 통합 SaaS 솔루션을 기획하게 되었습니다.
                  </span>
                </div>
                <ul className="flex flex-col gap-y-2">
                  <p className="font-bold text-xl">맡은 역할</p>
                  <li className=" text-sm">
                    플랫폼 전체 아키텍처 설계 및 UI/UX 기획 주도
                  </li>
                  <li className=" text-sm">
                    WebSocket/LLM 기반 실시간 시스템 구현
                  </li>
                  <li className=" text-sm">
                    물류센터 현장 인터뷰를 통한 사용자 중심 설계
                  </li>
                </ul>
                <div className="flex flex-col gap-y-2">
                  <p className="font-bold text-xl">
                    해결한 문제 / 주요 구현 포인트
                  </p>
                  <ul className="flex flex-col gap-y-2">
                    <p className="font-bold text-xl">[faav / faav app]</p>
                    <li className=" text-sm">
                      시즌성 재고 순환을 위한 실물 구독 시스템 설계 및 구현
                    </li>
                    <li className=" text-sm">
                      인플루언서 협찬 → 세컨핸즈 판매 전환 흐름 설계 및
                      어드민/앱 전체 구조 개발
                    </li>
                    <li className=" text-sm">
                      패브페이(PaavPay) 간편결제 연동으로 구매 전환 편의성 개선
                    </li>
                    <li className=" text-sm">
                      QR/NFC 결제 시스템 구축 → 팝업스토어와 연동된
                      온라인/오프라인 통합 경험 제공
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-y-2">
                    <p className="font-bold text-xl">[faav connect]</p>
                    <li className=" text-sm">
                      어드민에서 대여/반납 자동 처리 로직 및 상태 관리 구조 설계
                    </li>
                    <li className=" text-sm">
                      택배 송장 등록 및 자동 상태 반영 구현
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-y-2">
                    <p className="font-bold text-xl">[faav studio]</p>
                    <li className=" text-sm">
                      인플루언서 전용 협찬 콘텐츠 등록 및 관리 시스템 개발
                    </li>
                    <li className=" text-sm">
                      AWS Lambda + S3 + CloudFront 기반 이미지 자동 리사이징
                      시스템 구현 → 해상도에 따라 최적화된 이미지 제공 및 로딩
                      속도 개선
                    </li>
                    <li className=" text-sm">
                      서버리스 기반 이미지 캐싱 구조로 사용자별 디바이스 대응
                      최적화
                    </li>
                  </ul>
                </div>
                <ul className="flex flex-col gap-y-2">
                  <p className="font-bold text-xl">프로젝트 성과</p>
                  <li className=" text-sm">재고 출고율 93% 달성</li>
                  <li className=" text-sm">
                    협찬 → 리세일 전환 구조로 구독→구매 전환율 35% 이상 확보
                  </li>
                  <li className=" text-sm">
                    고객사 전용 어드민 페이지 제공을 통한 B2B 공급망 확장
                  </li>
                  <li className=" text-sm">
                    신규 유저 유입 대비 첫 결제 전환율 약 28% 달성
                  </li>
                </ul>
              </div>
              <ul className="flex flex-col gap-y-2">
                <p className="font-bold text-xl">배운점</p>
                <li className=" text-sm">
                  빠르게 변화하는 비즈니스 요구사항에 대응할 수 있는 모듈형
                  아키텍처 구성 역량 강화
                </li>
                <li className=" text-sm">
                  운영팀, 디자인팀과의 협업을 통해 서비스 전체 흐름을 고려한
                  UI/UX 설계 경험 축적
                </li>
                <li className=" text-sm">
                  AWS 기반 이미지 최적화와 비동기 로직 처리 등, 퍼포먼스 중심
                  커머스 프론트엔드 설계 역량 강화
                </li>
              </ul>
              <div className="flex flex-row gap-4">
                {[
                  "React",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Redux",
                  "Redux-Saga",
                ].map((v, i) => (
                  <span
                    key={`${v}_${i}`}
                    className="dark:bg-amber-100 dark:text-black bg-gray-400 text-white px-2 rounded-2xl flex items-center justify-center"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
}
