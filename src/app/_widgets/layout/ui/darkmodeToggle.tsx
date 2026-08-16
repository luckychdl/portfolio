"use client";

import { useTheme } from "@/app/_components/themeProvider";
import { motion } from "framer-motion";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="glass group relative h-9 w-[68px] rounded-full p-1 transition-colors duration-300 hover:border-line-strong"
    >
      {/* track icons */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-2.5 text-[13px]">
        <LuSun
          className={`transition-colors duration-300 ${
            isDark ? "text-faint" : "text-accent"
          }`}
        />
        <LuMoon
          className={`transition-colors duration-300 ${
            isDark ? "text-accent" : "text-faint"
          }`}
        />
      </span>

      {/* knob */}
      <motion.span
        aria-hidden
        className="relative block h-7 w-7 rounded-full bg-gradient-to-br from-accent-soft to-accent shadow-[0_2px_12px_var(--accent-glow)]"
        animate={{ x: mounted && isDark ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
      />
    </button>
  );
}
