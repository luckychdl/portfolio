import SectionHeading from "../_components/sectionHeading";
import TimelineContainer from "../_widgets/about/ui/timelineContainer";

export default function About() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <SectionHeading
        eyebrow="About"
        title="걸어온 길"
        description="비전공자에서 시작해 커머스 · 물류 · 여행 · 교육 도메인을 거치며 쌓아온 기록입니다."
        index="01"
      />
      <TimelineContainer />
    </div>
  );
}
