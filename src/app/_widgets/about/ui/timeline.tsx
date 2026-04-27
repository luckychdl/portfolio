import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaCode, FaRocket, FaGraduationCap } from "react-icons/fa";
interface VerticalTimelineProps {
  icon: React.ReactNode;
  position?: string;
  description: string;
  date: string;
  title: string;
}
export default function Timeline({
  icon,
  position,
  description,
  date,
  title,
}: VerticalTimelineProps) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#1e1e1e", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #1e1e1e" }}
      date={date}
      dateClassName="text-black dark:text-amber-100"
      iconStyle={{ background: "#E5D4B3", color: "#000" }}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{position}</h4>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
}
