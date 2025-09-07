"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ProjectImage } from "../_types/project";
import {
  HiOutlinePhotograph,
  HiX,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

interface ImageGalleryProps {
  images: ProjectImage[];
  projectTitle: string;
}

export default function ImageGallery({
  images,
  projectTitle,
}: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + images.length) % images.length
      );
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
        <div className="text-center">
          <HiOutlinePhotograph className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {projectTitle}의 이미지가 준비 중입니다
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      {/* 갤러리 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images?.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openLightbox(index)}
          >
            {/* 이미지 */}
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onError={(e) => {
                  // 이미지 로드 실패 시 플레이스홀더 표시
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const container = target.closest(".relative");
                  const placeholder =
                    container?.parentElement?.querySelector(
                      ".image-placeholder"
                    );
                  if (placeholder) {
                    placeholder.classList.remove("hidden");
                    placeholder.classList.add("flex");
                  }
                }}
              />
            </div>
            {/* 플레이스홀더 (이미지 로드 실패 시) */}
            <div className="image-placeholder aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center hidden absolute inset-0">
              <div className="text-center">
                <HiOutlinePhotograph className="mx-auto h-8 w-8 text-gray-400 dark:text-gray-500" />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {image.alt}
                </p>
              </div>
            </div>

            {/* 오버레이 */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <HiOutlinePhotograph className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* 캡션 */}
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                <p className="text-white text-sm font-medium">
                  {image.caption}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* 라이트박스 모달 */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label="이미지 갤러리"
          >
            {/* 닫기 버튼 */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-60 p-2 text-white hover:text-gray-300 transition-colors"
              aria-label="갤러리 닫기"
            >
              <HiX className="w-8 h-8" />
            </button>

            {/* 이전 버튼 */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-60 p-2 text-white hover:text-gray-300 transition-colors"
                aria-label="이전 이미지"
              >
                <HiChevronLeft className="w-8 h-8" />
              </button>
            )}

            {/* 다음 버튼 */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-60 p-2 text-white hover:text-gray-300 transition-colors"
                aria-label="다음 이미지"
              >
                <HiChevronRight className="w-8 h-8" />
              </button>
            )}

            {/* 이미지 컨테이너 */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 실제 이미지 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="flex items-center justify-center min-h-[400px] max-h-[70vh] relative">
                  <Image
                    src={images[selectedImageIndex].src}
                    alt={images[selectedImageIndex].alt}
                    width={800}
                    height={600}
                    className="max-w-full max-h-full object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                    onError={(e) => {
                      // 이미지 로드 실패 시 플레이스홀더 표시
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const container =
                        target.closest(".bg-white") ||
                        target.closest("[class*='bg-gray-800']");
                      const placeholder = container?.querySelector(
                        ".lightbox-placeholder"
                      );
                      if (placeholder) {
                        placeholder.classList.remove("hidden");
                        placeholder.classList.add("flex");
                      }
                    }}
                  />
                </div>
                {/* 플레이스홀더 (이미지 로드 실패 시) */}
                <div className="lightbox-placeholder p-8 min-h-[400px] flex items-center justify-center hidden">
                  <div className="text-center">
                    <HiOutlinePhotograph className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {images[selectedImageIndex].alt}
                    </h3>
                    {images[selectedImageIndex].caption && (
                      <p className="text-gray-600 dark:text-gray-300">
                        {images[selectedImageIndex].caption}
                      </p>
                    )}
                  </div>
                </div>

                {/* 캡션 */}
                {images[selectedImageIndex].caption && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-700">
                    <p className="text-gray-800 dark:text-gray-200 text-center">
                      {images[selectedImageIndex].caption}
                    </p>
                  </div>
                )}
              </div>

              {/* 이미지 카운터 */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {images.length}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
