"use client";

import { useTheme } from "@/app/_components/themeProvider";
import { VscColorMode } from "react-icons/vsc";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
      title="Toggle color theme"
      className="shrink-0 rounded p-1.5 text-faint transition-colors hover:bg-surface-2 hover:text-fg"
    >
      <VscColorMode className="text-base" />
    </button>
  );
}
