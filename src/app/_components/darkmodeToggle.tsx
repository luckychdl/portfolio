"use client";

import { useState } from "react";
import { useTheme } from "./themeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <label
      className="relative inline-block w-14 h-6 cursor-pointer "
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
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
      <div
        className={`absolute top-0.5 left-1 w-5 h-5 bg-white dark:bg-black rounded-full shadow-md ${
          isHover ? "scale-120" : "no-style"
        } transition-transform duration-300 peer-checked:translate-x-7`}
      />
    </label>
  );
}
