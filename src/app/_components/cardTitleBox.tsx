export default function CardTitleBox({ text }: { text: string }) {
  return (
    <div className="mb-4 flex items-center gap-2.5">
      <span
        aria-hidden
        className="h-4 w-1 shrink-0 rounded-full bg-gradient-to-b from-accent-soft to-accent-2"
      />
      <h3 className="font-display text-[15px] font-semibold tracking-tight text-fg">
        {text}
      </h3>
    </div>
  );
}
