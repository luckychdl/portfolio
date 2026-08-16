import { twMerge } from "tailwind-merge";

export default function CardBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={twMerge("panel flex flex-col p-5 sm:p-6", className)}>
      {children}
    </div>
  );
}
