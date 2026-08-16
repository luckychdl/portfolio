import SectionHeading from "../_components/sectionHeading";
import BadgeContainer from "../_widgets/skills/ui/badgeContainer";
import SkillsLegend from "../_widgets/skills/ui/header";

export default function Skills() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <SectionHeading
        eyebrow="Skills"
        title="기술 스택"
        description="숙련도와 함께, 각 기술을 실제로 사용한 프로젝트를 함께 표기했습니다."
        index="02"
      />
      <SkillsLegend />
      <BadgeContainer />
    </div>
  );
}
