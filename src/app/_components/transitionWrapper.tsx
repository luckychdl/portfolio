"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

/**
 * Page enter animation.
 *
 * Deliberately NOT using `AnimatePresence mode="wait"`: it freezes the incoming
 * tree until the outgoing one finishes, which strands Suspense boundaries that
 * bail out to client rendering (the `useSearchParams` boundary on /projects) and
 * delays mounting past the router's scroll reset (blank space on /about).
 * A keyed motion.div mounts the new page immediately and just fades it in.
 */
export default function TransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
