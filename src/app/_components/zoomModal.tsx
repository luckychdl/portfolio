"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { LuX } from "react-icons/lu";
import { RenderMedia } from "./renderMedia";
import { ProjectMedia } from "../_data/projectImages";

export default function ZoomModal({
  item,
  isMobile,
  onClose,
}: {
  item: ProjectMedia;
  isMobile: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!mounted) return null;

  // Portal to <body>: the page-transition wrapper creates a stacking context,
  // so an in-place overlay would render underneath the fixed header.
  return createPortal(
    <motion.div
      role="dialog"
      aria-modal
      className="fixed inset-0 z-[60] overflow-auto bg-canvas-deep/85 backdrop-blur-md"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <button
        type="button"
        aria-label="닫기"
        className="glass fixed top-5 right-5 z-20 grid h-11 w-11 place-items-center rounded-full text-fg transition-colors duration-300 hover:border-line-strong"
        onClick={onClose}
      >
        <LuX className="text-lg" />
      </button>

      <motion.div
        className="flex min-h-full items-center justify-center p-5 sm:p-10"
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex w-full justify-center"
        >
          <RenderMedia item={item} isMobile={isMobile} variant="modal" />
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
