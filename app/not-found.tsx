"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ModeToggle } from "@/features/theme/theme-toggle";

export default function NotFound() {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <main className="relative min-h-dvh w-screen overflow-x-hidden bg-terminal-bg text-terminal-text">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-terminal-accent/20 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-dvh max-w-3xl items-center justify-center px-6 py-12">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          className="w-full overflow-hidden rounded-xl border border-terminal-border bg-terminal-surface shadow-[var(--terminal-shadow)]"
        >
          <header className="flex h-10 items-center justify-between border-b border-terminal-border bg-terminal-elevated px-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            </div>
            <span className="font-mono text-xs text-terminal-subtext">
              zawmunaung@portfolio:~
            </span>
          </header>

          <div className="p-6 font-mono text-sm">
            <p className="text-6xl font-bold text-terminal-accent">404</p>
            <p className="mt-2 text-lg text-terminal-text">Command Not Found</p>
            <div className="mt-4 space-y-1 text-xs text-terminal-subtext">
              <p>&gt; route.resolve()</p>
              <p className="text-terminal-accent">ERROR: RESOURCE_NOT_FOUND</p>
              <p>&gt; The requested path does not exist.</p>
              <p>&gt; Returning to available resources...</p>
              <p className="mt-2 animate-pulse">_</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-md bg-terminal-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                Return Home
              </Link>
              <button
                onClick={goBack}
                className="rounded-md border border-terminal-border px-4 py-2 text-sm text-terminal-text transition hover:bg-terminal-elevated"
              >
                Go Back
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
