"use client";

import { useState } from "react";
import { SiteConfig } from "@/types";

interface FloatingOverlayProps {
  site: SiteConfig;
}

export const FloatingOverlay = ({ site }: FloatingOverlayProps) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="fixed -top-full sm:top-9 right-4 z-50 flex flex-col items-end gap-2">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-3 rounded-full border border-terminal-border/40 bg-terminal-surface/90 px-4 py-2 text-sm font-medium text-terminal-text shadow-lg backdrop-blur-md transition-all hover:bg-terminal-overlay/30 active:scale-95"
      >
        <span className="text-xs md:text-sm font-bold">{site.name}</span>
        <span className="text-terminal-cyan text-xs md:text-sm">·</span>
        <span className="text-xs md:text-sm">{site.role}</span>
        <svg
          className={`h-4 w-4 text-terminal-subtext transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {expanded && (
        <div className="w-64 rounded-xl border border-terminal-border/30 bg-terminal-surface/80 p-4 text-terminal-text shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-top-2">
          <p className="text-xs sm:text-sm text-terminal-subtext">
            {site.description}
          </p>
          <p className="mt-2 text-xs text-terminal-yellow">
            Type{" "}
            <span className="rounded bg-terminal-overlay px-1 py-0.5 font-bold text-terminal-text">
              help
            </span>{" "}
            to see commands.
          </p>
        </div>
      )}
    </div>
  );
};
