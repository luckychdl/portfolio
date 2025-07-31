import Link from "next/link";
import DarkmodeToggle from "./darkmodeToggle";
import { FaHome } from "react-icons/fa";

import { FaCode } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex w-full h-[40px] justify-between items-center">
      <FaCode className="w-12 h-12 text-black dark:text-amber-100" />
      <div className="flex items-center gap-x-4">
        <Link href={`/`}>
          <FaHome className="w-[28px] h-[28px] cursor-pointer text-black dark:text-amber-100 active:opacity-7 transition-all duration-300 hover:w-[32px] hover:h-[32px]" />
        </Link>
        <DarkmodeToggle />
      </div>
    </header>
  );
}
