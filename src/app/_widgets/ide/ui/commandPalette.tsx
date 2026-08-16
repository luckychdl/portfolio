"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { VscArrowRight, VscSearch } from "react-icons/vsc";
import { allFiles } from "@/app/_data/workspace";
import FileIcon from "./fileIcon";

export default function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allFiles;
    return allFiles.filter(
      (file) =>
        file.name.toLowerCase().includes(q) ||
        file.id.toLowerCase().includes(q) ||
        (file.dir ?? "").toLowerCase().includes(q),
    );
  }, [query]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setCursor(0);
    // 다음 프레임에 포커스 (모달이 붙은 뒤)
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setCursor((c) => (results.length ? (c + 1) % results.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setCursor((c) =>
          results.length ? (c - 1 + results.length) % results.length : 0,
        );
      } else if (e.key === "Enter") {
        const target = results[cursor];
        if (target) {
          router.push(target.href);
          onClose();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, results, cursor, router, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex justify-center bg-black/40 pt-[12vh] backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-fit w-[min(38rem,92vw)] overflow-hidden rounded-lg border border-line-strong bg-panel shadow-[var(--shadow-lg)]"
      >
        <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
          <VscSearch className="shrink-0 text-faint" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(0);
            }}
            placeholder="파일 이름으로 이동…"
            className="w-full bg-transparent font-mono text-sm text-fg placeholder:text-faint focus:outline-none"
          />
          <kbd className="shrink-0 rounded border border-line px-1 font-mono text-[10px] text-faint">
            esc
          </kbd>
        </div>

        <ul className="max-h-[50vh] overflow-y-auto py-1">
          {results.map((file, index) => (
            <li key={file.id}>
              <button
                type="button"
                onMouseEnter={() => setCursor(index)}
                onClick={() => {
                  router.push(file.href);
                  onClose();
                }}
                className={`flex w-full items-center gap-2.5 px-3 py-2 text-left font-mono text-[13px] transition-colors ${
                  index === cursor
                    ? "bg-surface-2 text-fg"
                    : "text-muted hover:text-fg"
                }`}
              >
                <FileIcon kind={file.kind} />
                <span>{file.name}</span>
                {file.dir && (
                  <span className="text-[11px] text-gutter">{file.dir}/</span>
                )}
                {index === cursor && (
                  <VscArrowRight className="ml-auto text-accent" />
                )}
              </button>
            </li>
          ))}

          {results.length === 0 && (
            <li className="px-3 py-6 text-center font-mono text-[13px] text-faint">
              일치하는 파일이 없습니다
            </li>
          )}
        </ul>
      </div>
    </div>,
    document.body,
  );
}
