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
    <div className="h-full w-full">
      <XtermTerminal site={site} />
    </div>
  );
};

export default TerminalRunTime;
