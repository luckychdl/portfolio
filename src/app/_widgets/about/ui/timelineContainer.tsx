"use client";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCode, FaGraduationCap } from "react-icons/fa";
import Timeline from "./timeline";

export default function TimelineContainer() {
  return (
    <VerticalTimeline lineColor="#E5D4B3">
      <Timeline
        icon={<FaGraduationCap />}
        description="비전공자에서 개발자로 전향하며 첫 걸음"
        date="2020.03"
        title="코드캠프 수료"
      />

      <Timeline
        icon={<FaCode />}
        description="구독 기반 의류 대여 서비스 개발, faav app, faav studio 등"
        position="Front-end Developer"
        date="2021.12 - 2024.05"
        title="261house"
      />
      <Timeline
        icon={<FaCode />}
        description="동대문 물류 및 사입 서비스용 WMS/앱 개발, 바코드 자동화 시스템 등"
        position="Front-end Developer"
        date="2024.06 - 2024.10"
        title="Trenshow"
      />
      <Timeline
        icon={<FaCode />}
        description="AI 기반 물류 통합 SaaS 솔루션"
        position="Lead Front-end Developer"
        date="2024.11 - 2025.06"
        title="로커스코리아"
      />
      <Timeline
        icon={<FaCode />}
        description="호스트와 외국인 여행객 매칭 플랫폼 개발"
        position="Front-end Developer / Back-end Developer"
        date="2025.10 - 2026.01"
        title="SOJUTRIP (외주)"
      />
      <Timeline
        icon={<FaCode />}
        description="한국어 발음 학습을 위한 모바일 애플리케이션 개발"
        position="Front-end Developer / Back-end Developer"
        date="2026.2 - 2026.03"
        title="아누에듀 AnuEdu (외주)"
      />
    </VerticalTimeline>
  );
}
