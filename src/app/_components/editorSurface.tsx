import { twMerge } from "tailwind-merge";

/**
 * A block of "source" with an automatic line-number gutter.
 * Numbering comes from a CSS counter (see `.code-surface` / `.code-line`),
 * so lines can be composed freely without manual bookkeeping.
 */
export function CodeSurface({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={twMerge("code-surface py-4", className)}>{children}</div>
  );
}

/** One numbered line. `indent` adds editor-style indentation steps. */
export function Line({
  children,
  indent = 0,
  className,
}: {
  children?: React.ReactNode;
  indent?: 0 | 1 | 2 | 3;
  className?: string;
}) {
  const indentClass = ["", "ind-1", "ind-2", "ind-3"][indent];
  return (
    <div className={twMerge("code-line", indentClass, className)}>
      {children ?? " "}
    </div>
  );
}

/** A numbered line whose content is a block (cards, images, meters…). */
export function BlockLine({
  children,
  indent = 1,
  className,
}: {
  children: React.ReactNode;
  indent?: 0 | 1 | 2 | 3;
  className?: string;
}) {
  const indentClass = ["", "ind-1", "ind-2", "ind-3"][indent];
  return (
    <div className={twMerge("code-line py-1.5", indentClass, className)}>
      {children}
    </div>
  );
}

/** `// comment` line. */
export function Comment({
  children,
  indent = 0,
}: {
  children: React.ReactNode;
  indent?: 0 | 1 | 2 | 3;
}) {
  return (
    <Line indent={indent}>
      <InlineComment>{children}</InlineComment>
    </Line>
  );
}

/** `// text` as an inline span (usable at the end of a code line). */
export const InlineComment = ({ children }: { children: React.ReactNode }) => (
  <span className="tok-com">
    {"//"} {children}
  </span>
);

/** `/** text *​/` doc comment. */
export const DocComment = ({ children }: { children: React.ReactNode }) => (
  <span className="tok-com">
    {"/**"} {children} {"*/"}
  </span>
);

/**
 * Renders `**강조**` markers as bold. Everything else is passed through,
 * so resume copy can carry its own emphasis without any markdown parser.
 */
export function RichText({ children }: { children: string }) {
  const parts = children.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index} className="font-semibold text-fg">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

export const Key = ({ children }: { children: React.ReactNode }) => (
  <span className="tok-key">{children}</span>
);

export const Str = ({ children }: { children: React.ReactNode }) => (
  <span className="tok-str">&quot;{children}&quot;</span>
);

export const Prop = ({ children }: { children: React.ReactNode }) => (
  <span className="tok-prop">{children}</span>
);

export const Punc = ({ children }: { children: React.ReactNode }) => (
  <span className="tok-punc">{children}</span>
);

export const Num = ({ children }: { children: React.ReactNode }) => (
  <span className="tok-num">{children}</span>
);

export const Fn = ({ children }: { children: React.ReactNode }) => (
  <span className="tok-fn">{children}</span>
);

export const Type = ({ children }: { children: React.ReactNode }) => (
  <span className="tok-type">{children}</span>
);
