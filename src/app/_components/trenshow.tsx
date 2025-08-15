import React from "react";
import {
  textBaseBold,
  textSmall,
  textSmallMargin,
} from "../_utils/classPresets";
import Card from "./Card";
import CardTitle from "./CardTitle";

const Trenshow = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      className="flex flex-row items-start justify-start gap-x-4 px-8"
      ref={ref}
      id="trenshow"
    >
      <div className="flex flex-col min-w-[20%] max-w-[20%] gap-y-4">
        <div className="border-1 p-4 rounded-2xl bg-black text-white flex w-full flex-col gap-y-2 ">
          <p>TRENSHOW</p>
          <p>2024-06 ~ 2024-11</p>
          <span className="w-full flex justify-center items-center bg-white text-black rounded-2xl px-2 font-bold">
            Front-end Developer
          </span>
        </div>
        <div className="flex flex-row gap-2 flex-wrap">
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
              className="dark:bg-amber-100 dark:text-black bg-gray-400 text-sm text-white px-2 rounded-2xl flex items-center justify-center"
            >
              {v}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-4 w-full">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col border gap-y-2 border-gray-300 p-4 rounded-2xl">
            <span className="text-xl font-bold ">
              동대문 물류의 복잡한 흐름을 통합된 플랫폼으로 단순화하다
            </span>
            <span className="text-xl font-bold">
              전체 UI/UX 구조 설계 및 프론트엔드 리드 개발
            </span>
          </div>
          <Card>
            <CardTitle text="프로젝트 배경"></CardTitle>
            <span className={textSmallMargin}>
              동대문 기반의 의류 유통 현장은 사입자, 화주사, 물류센터, 라이더 등
              다양한 주체가 엮인 복잡한 구조를 가지고 있음에도 불구하고,
            </span>
            <span className={textSmallMargin}>
              이를 통합적으로 관리할 수 있는 SaaS 시스템은 부재했습니다.
            </span>
            <span className={textSmallMargin}>
              특히 WMS가 단순 재고기록용에 머물고 있고, 플랫폼 간 UI/UX 괴리로
              작업 효율 저하가 빈번히 발생하고 있었습니다.
            </span>
            <span className={textSmall}>
              이를 해결하기 위해, 다주체 통합 플랫폼 구축을 목표로 프로젝트가
              시작되었습니다.
            </span>
          </Card>
          <Card>
            <CardTitle text="맡은 역할" />
            <p className={textSmallMargin}>Front-End 전담 개발자</p>
            <p className={textSmallMargin}>
              6개 플랫폼의 웹/앱 UI/UX 전면 설계 및 개발
            </p>
            <p className={textSmallMargin}>
              React Native 기반의 모바일 & 웹 통합 개발 구조 설계
            </p>
            <p className={textSmall}>
              입고-출고-사입-재고 프로세스 전체 흐름 설계
            </p>
          </Card>
          <div className="flex flex-col gap-y-2">
            <Card>
              <CardTitle text="DCF-WMS" />
              <p className={textSmallMargin}>
                엑셀 업로드/다운로드, 바코드 인쇄 기능을 통해 수작업 감소
              </p>
              <p className={textSmall}>
                기술적으로는 깔끔했지만 현장성과 괴리된 UI로 초기에는 피드백
                다수 발생 → 사용자 중심 UX 개선 경험
              </p>
            </Card>
            <Card>
              <CardTitle text="DCF-CUSTOMER" />
              <p className={textSmallMargin}>
                화주사(고객사)를 위한 입고/출고 관리 웹 서비스
              </p>
              <p className={textSmall}>채널톡 연동 통한 CS 대응 시스템 구축</p>
            </Card>
            <Card>
              <CardTitle text="DCF-CREW" />
              <p className={textSmallMargin}>물류센터 작업자용 앱</p>
              <p className={textSmallMargin}>
                출근 등록, 입/출고 작업, 픽업, 재고 확인 기능 구현
              </p>
              <p className={textSmallMargin}>
                USB 바코드 리더기와 직접 연동해, 단말기에서 바로 작업 처리 가능
              </p>
              <p className={textSmall}>
                단순한 앱이 아닌 하드웨어 연동 앱 설계 경험 확보
              </p>
            </Card>
            <Card>
              <CardTitle text="DDPICK / RIDER / CUSTOMER" />
              <p className={textSmallMargin}>
                사입 → 배송 → 고객 전달까지의 전 과정을 분리된 앱으로 구현
              </p>
              <p className={textSmallMargin}>
                React Native 기반으로 3개의 앱을 동시에 효율적으로 개발
              </p>
              <p className={textSmall}>
                실시간 상태 확인, 알림 기능, 픽업 요청까지 모두 앱 내에서 수행
              </p>
            </Card>
          </div>
          <Card>
            <CardTitle text="결과 및 성과" />
            <p className={textBaseBold}>
              앱/Web을 모두 고려한 설계로 개발 및 유지보수 시간 절약
            </p>
            <p className={textSmallMargin}>
              → React-native webview를 활용 2개월만에 6개 플랫폼 동시 출시
            </p>
            <p className={textBaseBold}>
              관리자/작업자/고객사/라이더 간 소통 병목 해소
            </p>
            <p className={textSmallMargin}>→ 업무 분산 성공</p>
            <p className={textBaseBold}>
              재고처리 속도 30~50% 향상, 실시간 상태 파악 정확도 상승
            </p>
            <p className={textBaseBold}>현장 사용자 피드백 기반 UX 개선</p>
            <p className={textSmall}>→ 반복 작업 최소화</p>
          </Card>
        </div>
      </div>
    </div>
  );
});
Trenshow.displayName = "Trenshow";
export default Trenshow;
