import Link from "next/link";
import TransitionWrapper from "../_components/transitionWrapper";

export default function Contact() {
  return (
    <TransitionWrapper>
      <div className="flex-1 flex flex-col items-center justify-center w-full h-full pt-8 gap-y-8">
        <div className="flex flex-row items-center gap-x-2">
          <h2 className="text-4xl  text-black dark:text-amber-100">
            📫 CONTACT
          </h2>
        </div>
        <div className="space-y-2 text-lg w-full flex flex-col items-center justify-center">
          <div className="flex items-center flex-row gap-1">
            <p className="text-black dark:text-amber-100">📧 Email : </p>
            <Link
              href="mailto:vivid4112@gmail.com"
              className="underline text-black dark:text-amber-100"
            >
              vivid4112@gmail.com
            </Link>
          </div>
          <div className="flex items-center flex-row gap-1">
            <p className="text-black dark:text-amber-100">📞 Phone : </p>
            <Link
              href="tel:01041122653"
              className="underline text-black dark:text-amber-100"
            >
              010-4112-2653
            </Link>
          </div>
          <div className="flex items-center flex-row gap-1">
            <p className="text-black dark:text-amber-100">💼 GitHub : </p>
            <Link
              target="_blank"
              href="https://github.com/luckychdl"
              className="underline text-black dark:text-amber-100"
            >
              github.com/luckychdl
            </Link>
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
}
