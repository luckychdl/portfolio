/**
 * Fixed ambient background: aurora blobs + blueprint grid + film grain.
 * Purely decorative, sits behind every page.
 */
export default function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas"
    >
      {/* base vertical wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas-deep" />

      {/* aurora blobs */}
      <div className="animate-aurora absolute -top-[22rem] -left-[14rem] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle_at_center,var(--accent-glow),transparent_65%)] blur-3xl" />
      <div className="animate-aurora-slow absolute -top-[10rem] right-[-16rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,var(--accent-2-glow),transparent_65%)] blur-3xl" />
      <div className="animate-aurora absolute bottom-[-20rem] left-1/3 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,var(--accent-glow),transparent_70%)] opacity-70 blur-3xl" />

      {/* blueprint grid */}
      <div className="grid-bg absolute inset-0" />

      {/* grain */}
      <div className="noise absolute inset-0 opacity-[0.15] mix-blend-overlay dark:opacity-[0.07]" />
    </div>
  );
}
