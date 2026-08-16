import { VscJson, VscMarkdown, VscSymbolMethod } from "react-icons/vsc";
import { FileKind } from "@/app/_data/workspace";

const map: Record<FileKind, { Icon: typeof VscJson; className: string }> = {
  md: { Icon: VscMarkdown, className: "text-sky-500 dark:text-sky-400" },
  ts: { Icon: VscSymbolMethod, className: "text-blue-500 dark:text-blue-400" },
  json: { Icon: VscJson, className: "text-amber-600 dark:text-amber-400" },
};

export default function FileIcon({
  kind,
  className = "",
}: {
  kind: FileKind;
  className?: string;
}) {
  const { Icon, className: color } = map[kind];
  return <Icon className={`shrink-0 ${color} ${className}`} />;
}
