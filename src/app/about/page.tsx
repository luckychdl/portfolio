import {
  BlockLine,
  CodeSurface,
  DocComment,
  InlineComment,
  Key,
  Line,
  Prop,
  Punc,
  Str,
  Type,
} from "../_components/editorSurface";
import { careerData } from "../_data/career";

/** key 컬럼 폭을 맞춰 에디터에서 정렬된 것처럼 보이게 한다 */
function Field({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Prop>{name}</Prop>
      <Punc>:</Punc>
      <span
        aria-hidden
        className="inline-block"
        style={{ width: `${Math.max(1, 10 - name.length)}ch` }}
      />
      {children}
      <Punc>,</Punc>
    </>
  );
}

export default function About() {
  return (
    <CodeSurface className="max-w-5xl pb-16">
      <Line>
        <Key>import type</Key> <Punc>{"{"}</Punc> <Type>Career</Type>{" "}
        <Punc>{"}"}</Punc> <Key>from</Key> <Str>./types</Str>
        <Punc>;</Punc>
      </Line>
      <Line />
      <Line>
        <DocComment>
          SaaS · 커머스 · 물류 플랫폼 · 모바일 앱을 오가며 쌓은 4년의 기록
        </DocComment>
      </Line>
      <Line>
        <Key>export const</Key> <span className="tok-fn">career</span>
        <Punc>:</Punc> <Type>Career</Type>
        <Punc>[] = [</Punc>
      </Line>

      {careerData.map((entry, index) => (
        <div key={entry.company} className="group">
          <Line indent={1}>
            <Punc>{"{"}</Punc>
            <span className="ml-3 text-[11px] text-gutter opacity-0 transition-opacity group-hover:opacity-100">
              #{String(index + 1).padStart(2, "0")}
            </span>
          </Line>
          <Line indent={2}>
            <Field name="company">
              <span className="tok-str font-semibold">
                &quot;{entry.company}&quot;
              </span>
            </Field>
          </Line>
          <Line indent={2}>
            <Field name="role">
              <Str>{entry.role}</Str>
            </Field>
          </Line>
          <Line indent={2}>
            <Field name="period">
              <Str>{entry.period}</Str>
            </Field>
          </Line>
          <Line indent={2}>
            <Field name="summary">
              <Str>{entry.summary}</Str>
            </Field>
          </Line>
          <Line indent={2}>
            <Prop>points</Prop>
            <Punc>:</Punc>
            <span aria-hidden className="inline-block" style={{ width: "4ch" }} />
            <Punc>[</Punc>
          </Line>
          {entry.points.map((point, pointIndex) => (
            <BlockLine key={pointIndex} indent={3}>
              <span className="flex max-w-3xl gap-1">
                <span className="tok-punc shrink-0">→</span>
                <span className="font-sans text-[13px] leading-[1.8] text-syn-str">
                  {point}
                </span>
              </span>
            </BlockLine>
          ))}
          <Line indent={2}>
            <Punc>],</Punc>
          </Line>
          <Line indent={1}>
            <Punc>{"},"}</Punc>
          </Line>
        </div>
      ))}

      <Line>
        <Punc>];</Punc>
      </Line>
      <Line />
      <Line>
        <InlineComment>
          {careerData.length} entries · 2021.12 — 2026.03
        </InlineComment>
      </Line>
    </CodeSurface>
  );
}
