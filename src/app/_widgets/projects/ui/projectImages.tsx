"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { projectImages } from "@/app/_data/projectImages";
import useIsMobile from "@/app/_hooks/useMobile";
import { RenderMedia } from "@/app/_components/renderMedia";
import ZoomModal from "@/app/_components/zoomModal";
import { motion } from "framer-motion";
export default function ProjectImages() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") as keyof typeof projectImages;
  const isMobile = useIsMobile();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const media = projectImages[type] ?? [];
  const first = media[0];
  const restCount = media.length - 1;
  const selectedItem = selectedIndex !== null ? media[selectedIndex] : null;

  return (
    <>
      <div className="space-y-4">
        {!isOpen && first && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative w-full aspect-[16/9] overflow-hidden rounded-xl shadow-md"
          >
            <RenderMedia item={first} isMobile={isMobile} />

            {restCount > 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-2xl font-bold">
                +{restCount}
              </div>
            )}
          </button>
        )}

        {isOpen && (
          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {media.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="relative w-full aspect-[16/9] overflow-hidden rounded-xl shadow-md"
              >
                <RenderMedia item={item} isMobile={isMobile} />
              </button>
            ))}
          </motion.div>
        )}
      </div>

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
