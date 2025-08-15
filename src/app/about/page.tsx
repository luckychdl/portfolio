// components/CareerTimeline.tsx
"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaCode, FaRocket, FaGraduationCap } from "react-icons/fa";
import TransitionWrapper from "../_components/transitionWrapper";

export default function About() {
  return (
    <TransitionWrapper>
      <div className="text-white  flex flex-col flex-1 items-start justify-start box-border overflow-auto py-8">
        <VerticalTimeline lineColor="#E5D4B3">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#1e1e1e", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1e1e1e" }}
            date="2020.03"
            dateClassName="text-black dark:text-amber-100"
            iconStyle={{ background: "#E5D4B3", color: "#000" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">코드캠프 수료</h3>
            <p>비전공자에서 개발자로 전향하며 첫 걸음</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1e1e1e", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1e1e1e" }}
            date="2021.12 - 2024.06"
            dateClassName="text-black dark:text-amber-100"
            iconStyle={{ background: "#E5D4B3", color: "#000" }}
            icon={<FaCode />}
          >
            <h3 className="vertical-timeline-element-title">261house</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Front-end Developer
            </h4>
            <p>구독 기반 의류 대여 서비스 개발, faav app, faav studio 등</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1e1e1e", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1e1e1e" }}
            date="2024.06 - 2024.11"
            dateClassName="text-black dark:text-amber-100"
            iconStyle={{ background: "#E5D4B3", color: "#000" }}
            icon={<FaRocket />}
          >
            <h3 className="vertical-timeline-element-title">Trenshow</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Front-end Developer
            </h4>
            <p>
              동대문 물류 및 사입 서비스용 WMS/앱 개발, 바코드 자동화 시스템 등
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1e1e1e", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1e1e1e" }}
            date="2024.11 - 2025.06"
            dateClassName="text-black dark:text-amber-100"
            iconStyle={{ background: "#E5D4B3", color: "#000" }}
            icon={<FaRocket />}
          >
            <h3 className="vertical-timeline-element-title">로커스코리아</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Lead Front-end Developer
            </h4>
            <p>AI 기반 물류 통합 SaaS 솔루션</p>
          </VerticalTimelineElement>

          {/* 더 추가 가능 */}
        </VerticalTimeline>
      </div>
    </TransitionWrapper>
  );
}
