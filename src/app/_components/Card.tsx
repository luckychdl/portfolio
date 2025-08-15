export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col border w-full border-gray-300 p-4 rounded-2xl shadow-md">
      {children}
    </div>
  );
}
