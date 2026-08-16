export function Spinner() {
  return (
    <div className="flex items-center justify-center py-16">
      <span className="relative flex h-12 w-12">
        <span className="absolute inset-0 rounded-full border-2 border-line" />
        <span className="animate-spin absolute inset-0 rounded-full border-2 border-transparent border-t-accent" />
      </span>
    </div>
  );
}
