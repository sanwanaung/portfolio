"use client";

import { useEffect, useState } from "react";
import { bootSequence } from "@/config";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface TerminalBootProps {
  readonly onComplete: () => void;
}

export function TerminalBoot({ onComplete }: TerminalBootProps) {
  const prefersReducedMotion = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const lineDelay = prefersReducedMotion ? 0 : 360;
    const completionDelay = prefersReducedMotion ? 0 : 520;

    if (visibleLines < bootSequence.length) {
      const timer = window.setTimeout(() => {
        setVisibleLines((current) => current + 1);
      }, lineDelay);

      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(onComplete, completionDelay);
    return () => window.clearTimeout(timer);
  }, [onComplete, prefersReducedMotion, visibleLines]);

  return (
    <div className="text-sm leading-7 text-terminal-green p-3" role="status">
      <AnimatePresence initial={false}>
        {bootSequence.slice(0, visibleLines).map((line) => (
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 4 }}
            key={line}
            transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
          >
            <span aria-hidden="true">› </span>
            {line}
          </motion.p>
        ))}
      </AnimatePresence>
      <span
        aria-hidden="true"
        className="mt-2 inline-block h-4 w-2 animate-pulse align-middle"
      />
    </div>
  );
}
