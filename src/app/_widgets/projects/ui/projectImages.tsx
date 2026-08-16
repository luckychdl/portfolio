"use client";

import { useState } from "react";
import { projectImages, ProjectMedia } from "@/app/_data/projectImages";
import useIsMobile from "@/app/_hooks/useMobile";
import { RenderMedia } from "@/app/_components/renderMedia";
import ZoomModal from "@/app/_components/zoomModal";
import { motion } from "framer-motion";
import { LuMaximize2 } from "react-icons/lu";
import CardTitleBox from "@/app/_components/cardTitleBox";

export default function ProjectImages({ type }: { type: string }) {
  const isMobile = useIsMobile();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const media = (projectImages[type as keyof typeof projectImages] ??
    []) as readonly ProjectMedia[];
  const selectedItem = selectedIndex !== null ? media[selectedIndex] : null;

  if (media.length === 0) return null;

  return (
    <>
      <section className="panel p-5 sm:p-6">
        <div className="mb-4 flex items-end justify-between">
          <CardTitleBox text="화면 미리보기" />
          <span className="mb-4 font-mono text-[11px] text-faint">
            {String(media.length).padStart(2, "0")} SHOTS
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {media.map((item, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.05, 0.35),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-surface-2 transition-colors duration-300 hover:border-line-strong"
            >
              <RenderMedia item={item} isMobile={isMobile} />

              {/* hover overlay */}
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-canvas-deep/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] text-white uppercase">
                  <LuMaximize2 /> Zoom
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </section>

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
