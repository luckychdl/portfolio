import {
  BlockLine,
  CodeSurface,
  Key,
  Line,
  Prop,
  Punc,
  Str,
  Type,
} from "../_components/editorSurface";
import { educationData } from "../_data/career";

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
        style={{ width: `${Math.max(1, 9 - name.length)}ch` }}
      />
      {children}
      <Punc>,</Punc>
    </>
  );
}

export default function Education() {
  return (
    <CodeSurface className="max-w-5xl pb-16">
      <Line>
        <Key>import type</Key> <Punc>{"{"}</Punc> <Type>Education</Type>{" "}
        <Punc>{"}"}</Punc> <Key>from</Key> <Str>./types</Str>
        <Punc>;</Punc>
      </Line>
      <Line />
      <Line>
        <Key>export const</Key> <span className="tok-fn">education</span>
        <Punc>:</Punc> <Type>Education</Type>
        <Punc>[] = [</Punc>
      </Line>

      {educationData.map((entry) => (
        <div key={entry.school}>
          <Line indent={1}>
            <Punc>{"{"}</Punc>
          </Line>
          <Line indent={2}>
            <Field name="school">
              <span className="tok-str font-semibold">
                &quot;{entry.school}&quot;
              </span>
            </Field>
          </Line>
          <Line indent={2}>
            <Field name="degree">
              <Str>{entry.degree}</Str>
            </Field>
          </Line>
          <Line indent={2}>
            <Field name="date">
              <Str>{entry.date}</Str>
            </Field>
          </Line>

          {entry.points && (
            <>
              <Line indent={2}>
                <Prop>points</Prop>
                <Punc>:</Punc>
                <span
                  aria-hidden
                  className="inline-block"
                  style={{ width: "3ch" }}
                />
                <Punc>[</Punc>
              </Line>
              {entry.points.map((point, index) => (
                <BlockLine key={index} indent={3}>
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
            </>
          )}

          <Line indent={1}>
            <Punc>{"},"}</Punc>
          </Line>
        </div>
      ))}

      <Line>
        <Punc>];</Punc>
      </Line>
    </CodeSurface>
  );
}
