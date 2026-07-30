import { SiteConfig } from "@/types";
import TerminalRunTime from "@/features/components/terminal-runtime";

interface TerminalFrameProps {
  readonly site: SiteConfig;
}
const TerminalFrame = ({ site }: TerminalFrameProps) => {
  return (
    <section className="flex h-full w-full flex-col bg-terminal-bg">
      <header className="flex border-b-2 h-10 items-center justify-between px-4 opacity-70">
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-terminal-red" />
          <span className="inline-block h-3 w-3 rounded-full bg-terminal-yellow" />
          <span className="inline-block h-3 w-3 rounded-full bg-terminal-green" />
        </div>
        <h1 className="text-xs text-terminal-subtext">
          {site.username}@{site.terminal.hostname}:~
        </h1>
        <div className="w-12" />
      </header>

      <div className="flex-1 overflow-hidden">
        <TerminalRunTime site={site} />
      </div>
    </section>
  );
};

export default TerminalFrame;
