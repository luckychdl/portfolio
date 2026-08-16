"use client";

import { useRef, useState } from "react";
import { projectImages, ProjectMedia } from "@/app/_data/projectImages";
import useIsMobile from "@/app/_hooks/useMobile";
import { RenderMedia } from "@/app/_components/renderMedia";
import ZoomModal from "@/app/_components/zoomModal";
import { useInView } from "framer-motion";
import { VscScreenFull } from "react-icons/vsc";
import {
  BlockLine,
  InlineComment,
  Line,
} from "@/app/_components/editorSurface";

export default function ProjectImages({ slug }: { slug: string }) {
  const isMobile = useIsMobile();

  // 갤러리가 화면에 가까워질 때까지 <img> 자체를 마운트하지 않는다.
  // loading="lazy" 만으로는 브라우저 기본 임계값(~1250px)이 넓어서
  // 첫 진입에 스크린샷이 전부 요청된다.
  const galleryRef = useRef<HTMLDivElement>(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "250px" });

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const media: readonly ProjectMedia[] = projectImages[slug] ?? [];
  const selectedItem = selectedIndex !== null ? media[selectedIndex] : null;

  if (media.length === 0) return null;

  return (
    <>
      <BlockLine indent={0}>
        <div
          ref={galleryRef}
          className="grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3"
        >
          {!galleryInView &&
            media.map((_, index) => (
              <div
                key={`skeleton_${index}`}
                aria-hidden
                className="aspect-[16/10] w-full animate-pulse rounded border border-line bg-surface-2"
              />
            ))}

          {galleryInView &&
            media.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-[16/10] w-full overflow-hidden rounded border border-line bg-surface-2 transition-colors duration-300 hover:border-accent"
              >
                <RenderMedia item={item} isMobile={isMobile} />

                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/55 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 rounded border border-white/25 bg-black/50 px-2 py-1 font-mono text-[10.5px] tracking-wider text-white">
                    <VscScreenFull /> open preview
                  </span>
                </span>

                <span className="pointer-events-none absolute top-1.5 left-1.5 rounded bg-black/55 px-1.5 py-0.5 font-mono text-[10px] text-white/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
        </div>
      </BlockLine>

      <Line />
      <Line>
        <InlineComment>
          {media.length} screenshots · 클릭하면 원본 크기로 열립니다
        </InlineComment>
      </Line>

      {selectedItem && (
        <ZoomModal
          item={selectedItem}
          isMobile={isMobile}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
}
