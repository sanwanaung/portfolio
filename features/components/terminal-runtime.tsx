"use client";

import dynamic from "next/dynamic";
import type { SiteConfig } from "@/types";
import XtermLoading from "./xterm-loading";

const XtermTerminal = dynamic(
  () =>
    import("@/features/components/xterm-terminal").then(
      (module) => module.XtermTerminal,
    ),
  {
    loading: () => <XtermLoading message="Preparing terminal runtime..." />,
    ssr: false,
  },
);

interface TerminalRunTimeProps {
  readonly site: SiteConfig;
}

const TerminalRunTime = ({ site }: TerminalRunTimeProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div>
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-5xl font-extrabold">{site.name}</h1>
          <p className="text-lg text-terminal-subtext">{site.role}</p>
        </div>
        <div className="mt-2 text-center text-terminal-subtext text-sm">
          <p>{site.description}</p>
          <p>Type 'help' to see available commands.</p>
        </div>
      </div>
      <div className="flex-1 w-full">
        <XtermTerminal site={site} />
      </div>
    </div>
  );
};

export default TerminalRunTime;
