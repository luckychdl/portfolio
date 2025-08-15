import React from "react";
import { textSmall, textSmallMargin } from "../_utils/classPresets";
import Card from "./Card";
import CardTitle from "./CardTitle";

const House = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      className="flex flex-row items-start justify-start gap-x-4 px-8  "
      ref={ref}
      id="261house"
    >
      <div className="flex flex-col min-w-[20%] max-w-[20%] gap-y-4">
        <div className="border-1 p-4 rounded-2xl bg-black text-white flex w-full flex-col gap-y-2">
          <p>261HOUSE</p>
          <p>2021-12 ~ 2024-06</p>
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
              className="dark:bg-amber-100 dark:text-black bg-gray-400 text-white px-2 rounded-2xl flex items-center justify-center"
            >
              {v}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-4 w-full">
        <Card>
          <span className="text-xl font-bold ">
            faav는 시즌성 의류의 재고 문제를 해결하기 위해 대여, 협찬, 구독,
            리세일을 결합한 의류 순환 플랫폼
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
            이에, 물류 데이터를 기반으로 한 AI 예측 모델과 자동 재고 파악 기능을
            포함한 통합 SaaS 솔루션을 기획하게 되었습니다.
          </p>
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
          <CardTitle text="faav / faav app" />
          <p className={textSmallMargin}>
            시즌성 재고 순환을 위한 실물 구독 시스템 설계 및 구현
          </p>
          <p className={textSmallMargin}>
            인플루언서 협찬 → 세컨핸즈 판매 전환 흐름 설계 및 어드민/앱 전체
            구조 개발
          </p>
          <p className={textSmallMargin}>
            패브페이(PaavPay) 간편결제 연동으로 구매 전환 편의성 개선
          </p>
          <p className={textSmall}>
            QR/NFC 결제 시스템 구축 → 팝업스토어와 연동된 온라인/오프라인 통합
            경험 제공
          </p>
        </Card>
        <Card>
          <CardTitle text="faav connect" />
          <p className={textSmallMargin}>
            어드민에서 대여/반납 자동 처리 로직 및 상태 관리 구조 설계
          </p>
          <p className={textSmallMargin}>
            택배 송장 등록 및 자동 상태 반영 구현
          </p>
        </Card>
        <Card>
          <CardTitle text="faav studio" />
          <p className={textSmallMargin}>
            인플루언서 전용 협찬 콘텐츠 등록 및 관리 시스템 개발
          </p>
          <p className={textSmallMargin}>
            AWS Lambda + S3 + CloudFront 기반 이미지 자동 리사이징 시스템 구현 →
            해상도에 따라 최적화된 이미지 제공 및 로딩 속도 개선
          </p>
          <p className={textSmall}>
            서버리스 기반 이미지 캐싱 구조로 사용자별 디바이스 대응 최적화
          </p>
        </Card>
        <Card>
          <p className="font-bold text-xl"></p>
          <CardTitle text="프로젝트 성과" />
          <p className={textSmallMargin}>재고 출고율 93% 달성</p>
          <p className={textSmallMargin}>
            협찬 → 리세일 전환 구조로 구독→구매 전환율 35% 이상 확보
          </p>
          <p className={textSmallMargin}>
            고객사 전용 어드민 페이지 제공을 통한 B2B 공급망 확장
          </p>
          <p className={textSmall}>
            신규 유저 유입 대비 첫 결제 전환율 약 28% 달성
          </p>
        </Card>

        <Card>
          <CardTitle text="배운점" />
          <p className={textSmallMargin}>
            빠르게 변화하는 비즈니스 요구사항에 대응할 수 있는 모듈형 아키텍처
            구성 역량 강화
          </p>
          <p className={textSmallMargin}>
            운영팀, 디자인팀과의 협업을 통해 서비스 전체 흐름을 고려한 UI/UX
            설계 경험 축적
          </p>
          <p className={textSmall}>
            AWS 기반 이미지 최적화와 비동기 로직 처리 등, 퍼포먼스 중심 커머스
            프론트엔드 설계 역량 강화
          </p>
        </Card>
      </div>
    </div>
  );
});
House.displayName = "house";
export default House;
