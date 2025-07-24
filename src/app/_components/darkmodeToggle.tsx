"use client";

import { useTheme } from "./themeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="relative inline-block w-14 h-8 cursor-pointer">
      {/* 숨겨진 체크박스 */}
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="sr-only peer"
      />

      {/* 토글 배경 */}
      <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-full transition-colors duration-300 peer-checked:bg-gray-700 dark:peer-checked:bg-amber-100" />

      {/* 토글 버튼 */}
      <div className="absolute top-1 left-1 w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-6" />
    </label>
  );
}
