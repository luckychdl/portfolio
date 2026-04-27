import TransitionWrapper from "../../../transitionWrapper";
import BadgeContainer from "../_widgets/skills/ui/badgeContainer";

import SkillsHeader from "../_widgets/skills/ui/header";

export default function Skills() {
  return (
    <TransitionWrapper>
      <div className="flex-1 flex flex-col items-center w-full lg:h-[calc(100dvh-60px-76px)] h-[calc(100dvh-60px-68px)] pt-8 overflow-y-auto relative">
        <SkillsHeader />
        <BadgeContainer />
      </div>
    </TransitionWrapper>
  );
}
