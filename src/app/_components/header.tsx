import Link from "next/link";
import DarkmodeToggle from "./darkmodeToggle";
import { FaHome } from "react-icons/fa";
export default function Header() {
  return (
    <header className="flex w-full h-[40px] justify-between items-center">
      <Link href={`/`}>
        <FaHome className="w-[28px] h-[28px] cursor-pointer text-black dark:text-amber-100 active:opacity-7 transition-all duration-300 hover:w-[32px] hover:h-[32px]" />
      </Link>
      <DarkmodeToggle />
    </header>
  );
}
