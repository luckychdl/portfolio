import { ProjectMedia } from "../_data/projectImages";
import Lottie from "lottie-react";
import animationData from "../../../public/main_video.json";
import animationDataMobile from "../../../public/main_mobile.json";
import Image from "next/image";
export function RenderMedia({
  item,
  isMobile,
  variant,
}: {
  item: ProjectMedia;
  isMobile: boolean;
  variant?: "card" | "modal";
}) {
  if (item.type === "lottie") {
    return (
      <Lottie
        animationData={isMobile ? animationDataMobile : animationData}
        loop
      />
    );
  }
  if (variant === "modal") {
    return (
      <Image
        src={item.src}
        alt=""
        width={1600}
        height={1000}
        className="w-full h-auto object-contain"
      />
    );
  }
  return <Image src={item.src} alt="" fill className="object-cover" />;
}
