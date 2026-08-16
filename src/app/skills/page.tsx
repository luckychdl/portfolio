import {
  BlockLine,
  CodeSurface,
  InlineComment,
  Line,
  Punc,
} from "../_components/editorSurface";
import { stackData } from "../_data/skills";

export default function Skills() {
  const total = stackData.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <CodeSurface className="max-w-5xl pb-16">
      <Line>
        <Punc>{"{"}</Punc>
      </Line>

      {stackData.map((group, groupIndex) => (
        <div key={group.key} className="group">
          <Line indent={1}>
            <span className="tok-prop">&quot;{group.key}&quot;</span>
            <Punc>: [</Punc>
            <span className="ml-2 opacity-0 transition-opacity group-hover:opacity-100">
              <InlineComment>
                {group.label} · {group.items.length}
              </InlineComment>
            </span>
          </Line>

          <BlockLine indent={2}>
            <span className="flex max-w-3xl flex-wrap items-center gap-1.5">
              {group.items.map((item, index) => (
                <span key={item} className="inline-flex items-baseline">
                  <span className="rounded border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11.5px] text-fg transition-colors hover:border-line-strong">
                    &quot;{item}&quot;
                  </span>
                  {index < group.items.length - 1 && (
                    <span className="tok-punc">,</span>
                  )}
                </span>
              ))}
            </span>
          </BlockLine>

          <Line indent={1}>
            <Punc>]{groupIndex < stackData.length - 1 ? "," : ""}</Punc>
          </Line>
        </div>
      ))}

      <Line>
        <Punc>{"}"}</Punc>
      </Line>
      <Line />
      <Line>
        <InlineComment>
          {stackData.length} categories · {total} entries
        </InlineComment>
      </Line>
    </CodeSurface>
  );
}
