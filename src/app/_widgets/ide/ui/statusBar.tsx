"use client";

import { usePathname } from "next/navigation";
import { VscCheck, VscError, VscSourceControl, VscWarning } from "react-icons/vsc";
import { allFiles, fileForPath } from "@/app/_data/workspace";

export default function StatusBar() {
  const pathname = usePathname();
  const file = fileForPath(pathname);
  const line = allFiles.findIndex((item) => item.id === file.id) + 1;

  return (
    <footer className="flex h-6 shrink-0 items-center gap-4 border-t border-line bg-statusbar px-3 font-mono text-[11px] text-statusbar-fg select-none">
      <span className="flex items-center gap-1.5">
        <VscSourceControl className="text-[12px]" />
        main
      </span>
      <span className="flex items-center gap-2 opacity-80">
        <span className="flex items-center gap-1">
          <VscError className="text-[12px]" /> 0
        </span>
        <span className="flex items-center gap-1">
          <VscWarning className="text-[12px]" /> 0
        </span>
      </span>

      <span className="ml-auto hidden items-center gap-4 opacity-80 sm:flex">
        <span>
          Ln {line}, Col 1
        </span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>LF</span>
      </span>
      <span className="flex items-center gap-1.5">
        {file.lang}
        <VscCheck className="text-[12px] opacity-70" />
      </span>
    </footer>
  );
}
