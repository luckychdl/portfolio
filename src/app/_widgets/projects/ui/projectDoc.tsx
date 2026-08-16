import { ProjectData } from "@/app/_types/project";
import {
  BlockLine,
  CodeSurface,
  Line,
  RichText,
} from "@/app/_components/editorSurface";
import ProjectImages from "./projectImages";

/** `## heading` */
function Heading({ children }: { children: React.ReactNode }) {
  return (
    <Line>
      <span className="tok-punc">##</span>{" "}
      <span className="font-semibold text-fg">{children}</span>
    </Line>
  );
}

/** `### heading` */
function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <Line indent={1}>
      <span className="tok-punc">###</span>{" "}
      <span className="font-semibold text-fg">{children}</span>
    </Line>
  );
}

/** 긴 산문은 mono 대신 본문 폰트로 읽는다. */
function Prose({
  children,
  indent = 0,
}: {
  children: string;
  indent?: 0 | 1 | 2;
}) {
  return (
    <BlockLine indent={indent}>
      <p className="max-w-3xl font-sans text-[13.5px] leading-[1.85] text-muted">
        <RichText>{children}</RichText>
      </p>
    </BlockLine>
  );
}

function Bullet({
  children,
  marker = "-",
  indent = 0,
  strong = false,
}: {
  children: string;
  marker?: string;
  indent?: 0 | 1 | 2 | 3;
  strong?: boolean;
}) {
  return (
    <BlockLine indent={indent}>
      <span className="flex max-w-3xl gap-2">
        <span className="tok-punc shrink-0">{marker}</span>
        <span
          className={`font-sans text-[13.5px] leading-[1.85] ${
            strong ? "text-fg" : "text-muted"
          }`}
        >
          <RichText>{children}</RichText>
        </span>
      </span>
    </BlockLine>
  );
}

export default function ProjectDoc({ project }: { project: ProjectData }) {
  return (
    <CodeSurface className="max-w-5xl pb-16">
      {/* ── YAML front matter ───────────────────────────── */}
      <Line>
        <span className="tok-punc">---</span>
      </Line>
      <Line>
        <span className="tok-prop inline-block w-[10ch]">name:</span>
        <span className="tok-str font-semibold">{project.name}</span>
      </Line>
      <Line>
        <span className="tok-prop inline-block w-[10ch]">org:</span>
        <span className="tok-str">{project.company}</span>
      </Line>
      <Line>
        <span className="tok-prop inline-block w-[10ch]">period:</span>
        <span className="tok-str">{project.period}</span>
      </Line>
      {project.note && (
        <Line>
          <span className="tok-prop inline-block w-[10ch]">status:</span>
          <span className="tok-str">{project.note}</span>
        </Line>
      )}
      {project.tags.length > 0 && (
        <BlockLine indent={0}>
          <span className="flex flex-wrap items-baseline gap-1.5">
            <span className="tok-prop w-[10ch] shrink-0">tags:</span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10.5px] text-accent"
              >
                {tag}
              </span>
            ))}
          </span>
        </BlockLine>
      )}

      {project.stack.map((group) => (
        <BlockLine key={group.label} indent={0}>
          <span className="flex flex-wrap items-baseline gap-y-1">
            <span className="tok-prop w-[10ch] shrink-0">
              {group.label.toLowerCase().replace(/[^a-z]/g, "")}:
            </span>
            <span className="tok-punc">[</span>
            {group.items.map((item, index) => (
              <span key={item} className="inline-flex items-baseline">
                <span className="rounded border border-line bg-surface-2 px-1.5 py-px font-mono text-[11px] text-muted">
                  {item}
                </span>
                {index < group.items.length - 1 && (
                  <span className="tok-punc">,</span>
                )}
              </span>
            ))}
            <span className="tok-punc">]</span>
          </span>
        </BlockLine>
      ))}

      <Line>
        <span className="tok-punc">---</span>
      </Line>

      <Line />

      {/* ── Title ───────────────────────────────────────── */}
      <BlockLine indent={0}>
        <span className="tok-punc mr-2 align-top">#</span>
        <h1 className="inline font-mono text-[clamp(1.15rem,2.6vw,1.7rem)] leading-snug font-bold text-fg">
          {project.name}
        </h1>
      </BlockLine>

      <Line />

      <BlockLine indent={0}>
        <span className="flex max-w-3xl gap-2">
          <span className="tok-punc shrink-0">&gt;</span>
          <span className="font-sans text-[14px] leading-[1.8] text-fg">
            {project.subtitle}
          </span>
        </span>
      </BlockLine>

      {/* ── Background ──────────────────────────────────── */}
      {project.background && (
        <>
          <Line />
          <Heading>프로젝트 배경</Heading>
          <Line />
          <Prose>{project.background}</Prose>
        </>
      )}

      {/* ── Problem framing ─────────────────────────────── */}
      {project.problem && (
        <>
          <Line />
          <Heading>문제 정의 및 해결</Heading>
          <Line />
          <Prose>{project.problem}</Prose>
        </>
      )}

      {/* ── Achievements ────────────────────────────────── */}
      {project.achievements.length > 0 && (
        <>
          <Line />
          <Heading>주요 성과 및 기여</Heading>
          <Line />
          {project.achievements.map((item, index) => (
            <div key={index}>
              <Bullet marker="→" strong>
                {item.text}
              </Bullet>
              {item.children?.map((child, childIndex) => (
                <Bullet key={childIndex} marker="·" indent={1}>
                  {child}
                </Bullet>
              ))}
            </div>
          ))}
        </>
      )}

      {/* ── Technical choices ───────────────────────────── */}
      {project.technicalChoices && project.technicalChoices.length > 0 && (
        <>
          <Line />
          <Heading>기술적 선택과 전환 이유</Heading>
          {project.technicalChoices.map((choice, index) => (
            <div key={index}>
              <Line />
              <SubHeading>{choice.title}</SubHeading>
              <Prose indent={1}>{choice.body}</Prose>
              {choice.points?.map((point, pointIndex) => (
                <Bullet key={pointIndex} marker="·" indent={2}>
                  {point}
                </Bullet>
              ))}
            </div>
          ))}
        </>
      )}

      {/* ── Learning ────────────────────────────────────── */}
      {project.learning && (
        <>
          <Line />
          <Heading>배운 점</Heading>
          <Line />
          <BlockLine indent={0}>
            <p className="max-w-3xl border-l-2 border-accent/40 pl-4 font-sans text-[13.5px] leading-[1.85] text-muted italic">
              {project.learning}
            </p>
          </BlockLine>
        </>
      )}

      {/* ── Preview ─────────────────────────────────────── */}
      <Line />
      <Heading>화면 미리보기</Heading>
      <Line />
      <ProjectImages slug={project.slug} />
    </CodeSurface>
  );
}
