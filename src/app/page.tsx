import MultiTypingText from "./_components/typingText";

export default function Home() {
  return (
    <main className="h-full w-full flex items-center justify-center bg-white dark:bg-black text-black dark:text-amber-100 p-8">
      <MultiTypingText
        lines={["PORTFOLIO", "FRONT-END DEVELOPER", "SHIN DONG WON"]}
        className="text-4xl"
        speed={100}
        lineDelay={700}
      />
    </main>
  );
}
