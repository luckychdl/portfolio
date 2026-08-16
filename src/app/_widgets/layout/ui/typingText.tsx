"use client";

import { useEffect, useState } from "react";

type MultiTypingTextProps = {
  lines: string[];
  /** per-line styling; falls back to `className` when missing */
  lineClassNames?: string[];
  className?: string;
  speed?: number;
  lineDelay?: number; // 다음 줄 시작 전 대기 시간
};

export default function MultiTypingText({
  lines,
  lineClassNames,
  className = "",
  speed = 100,
  lineDelay = 500,
}: MultiTypingTextProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!lines?.length || currentLine >= lines?.length) return;

    if (charIndex < lines[currentLine]?.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLine] =
            (updated[currentLine] || "") + lines[currentLine][charIndex];
          return updated;
        });
        setCharIndex(charIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // 현재 줄이 다 끝났으면 다음 줄로 넘어감
      const delay = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setCharIndex(0);
      }, lineDelay);

      return () => clearTimeout(delay);
    }
  }, [charIndex, currentLine, lines, speed, lineDelay]);

  const done = currentLine >= lines.length;

  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4">
      {lines.map((_, i) => {
        const typed = displayedLines[i] ?? "";
        const isCursorHere = done ? i === lines.length - 1 : i === currentLine;

        return (
          <span
            key={i}
            className={`${lineClassNames?.[i] ?? className} ${
              typed.length === 0 && i > currentLine ? "hidden" : "block"
            }`}
          >
            {typed}
            {isCursorHere && (
              <span className="animate-blink ml-1 inline-block h-[0.85em] w-[0.5ch] translate-y-[0.06em] bg-accent align-middle" />
            )}
          </span>
        );
      })}
    </div>
  );
}
