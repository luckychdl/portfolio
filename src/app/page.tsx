import Link from "next/link";
import { BlockLine, CodeSurface, Line } from "./_components/editorSurface";
import MultiTypingText from "./_widgets/layout/ui/typingText";
import { profile } from "./_data/profile";
import { projectsData } from "./_data/projects";
import { careerData } from "./_data/career";
import {
  careerFile,
  contactFile,
  educationFile,
  skillsFile,
} from "./_data/workspace";

const contents = [
  { file: careerFile, note: "경력" },
  { file: educationFile, note: "학력" },
  { file: skillsFile, note: "기술 스택" },
  { file: contactFile, note: "연락처" },
];

export default function Home() {
  return (
    <CodeSurface className="max-w-4xl pb-16">
      <BlockLine indent={0}>
        <span className="tok-punc mr-2 align-top text-lg">#</span>
        <h1 className="inline font-mono text-[clamp(1.7rem,4.6vw,3rem)] leading-tight font-bold tracking-tight text-fg">
          {profile.nameEn}
        </h1>
      </BlockLine>

      <Line />

      <BlockLine indent={0}>
        <span className="flex items-center">
          <span className="tok-punc mr-2">&gt;</span>
          <MultiTypingText
            lines={[profile.role]}
            className="font-mono text-[clamp(0.95rem,2.2vw,1.35rem)] tracking-[0.18em] text-accent"
            speed={65}
            lineDelay={600}
          />
        </span>
      </BlockLine>

      <Line />

      <BlockLine indent={0}>
        <span className="flex max-w-3xl gap-2">
          <span className="tok-punc shrink-0">&gt;</span>
          <span className="font-sans text-[14px] leading-[1.8] text-muted">
            {profile.tagline}
          </span>
        </span>
      </BlockLine>

      <Line />

      <BlockLine indent={0}>
        <span className="flex flex-wrap items-center gap-1.5">
          <span className="flex overflow-hidden rounded font-mono text-[10.5px]">
            <span className="bg-[#3f3f46] px-2 py-0.5 text-white">
              experience
            </span>
            <span className="bg-accent px-2 py-0.5 font-semibold text-black">
              4 YEARS
            </span>
          </span>
          <span className="flex overflow-hidden rounded font-mono text-[10.5px]">
            <span className="bg-[#3f3f46] px-2 py-0.5 text-white">domain</span>
            <span className="bg-accent px-2 py-0.5 font-semibold text-black">
              SaaS · COMMERCE · LOGISTICS · APP
            </span>
          </span>
        </span>
      </BlockLine>

      <Line />

      <Line>
        <span className="tok-punc">##</span>{" "}
        <span className="font-semibold text-fg">About</span>
      </Line>

      {profile.about.map((paragraph, index) => (
        <BlockLine key={index} indent={0}>
          <p className="max-w-3xl font-sans text-[13.5px] leading-[1.85] text-muted">
            {paragraph}
          </p>
        </BlockLine>
      ))}

      <Line />

      <Line>
        <span className="tok-punc">##</span>{" "}
        <span className="font-semibold text-fg">Contents</span>
      </Line>

      <Line />

      {contents.map(({ file, note }) => (
        <Line key={file.id}>
          <span className="tok-punc">-</span>{" "}
          <Link
            href={file.href}
            className="text-syn-fn underline decoration-syn-fn/30 underline-offset-4 transition-colors hover:decoration-syn-fn"
          >
            {file.dir ? `${file.dir}/${file.name}` : file.name}
          </Link>{" "}
          <span className="tok-com">— {note}</span>
        </Line>
      ))}

      <Line>
        <span className="tok-punc">-</span>{" "}
        <Link
          href="/projects"
          className="text-syn-fn underline decoration-syn-fn/30 underline-offset-4 transition-colors hover:decoration-syn-fn"
        >
          projects/
        </Link>{" "}
        <span className="tok-com">
          — 프로젝트 아카이브 ({projectsData.length} files)
        </span>
      </Line>

      <Line />

      <Line>
        <span className="tok-punc">##</span>{" "}
        <span className="font-semibold text-fg">Career</span>
      </Line>

      <Line />

      {careerData.map((entry) => (
        <Line key={entry.company}>
          <span className="tok-punc">-</span>{" "}
          <span className="tok-str">{entry.company}</span>{" "}
          <span className="tok-punc">·</span>{" "}
          <span className="text-muted">{entry.role}</span>{" "}
          <span className="tok-com">({entry.period})</span>
        </Line>
      ))}

      <Line />

      <Line>
        <span className="tok-com">
          &lt;!-- ⌘K 또는 왼쪽 탐색기로 파일을 열어보세요 --&gt;
        </span>
      </Line>
    </CodeSurface>
  );
}
