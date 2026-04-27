"use client";

import { RenderMedia } from "./renderMedia";

export default function ZoomModal({
  item,
  isMobile,
  onClose,
}: {
  item: any;
  isMobile: boolean;
  onClose: () => void;
}) {
  // const [scale, setScale] = useState(1);

  // const BASE_WIDTH = 720;
  // const MIN_SCALE = 1;
  // const MAX_SCALE = 4;
  // const ZOOM_SPEED = 0.0005;

  // const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
  //   e.preventDefault();

  //   setScale((prev) => {
  //     const next = prev - e.deltaY * ZOOM_SPEED;
  //     return Math.min(Math.max(next, MIN_SCALE), MAX_SCALE);
  //   });
  // };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 overflow-auto p-y-4"
      onClick={onClose}
      // onWheel={handleWheel}
    >
      <button
        type="button"
        className="fixed right-5 top-5 z-20 text-white text-3xl"
        onClick={onClose}
      >
        ×
      </button>

      <div className="min-h-full flex items-center justify-center p-6">
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex justify-center"
          // style={{
          //   width: `${BASE_WIDTH * scale}px`,
          //   maxWidth: scale === 1 ? "90vw" : "none",
          // }}
        >
          <RenderMedia item={item} isMobile={isMobile} variant="modal" />
        </div>
      </div>
    </div>
  );
}
