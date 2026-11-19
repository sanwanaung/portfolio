import { SiteConfig } from "@/types";
import { ModeToggle } from "@/features/theme/theme-toggle";
import TerminalRunTime from "@/features/components/terminal-runtime";

interface TerminalFrameProps {
  readonly site: SiteConfig;
}
const TerminalFrame = ({ site }: TerminalFrameProps) => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center bg-terminal-bg p-4 sm:p-6">
      <div className="flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-terminal-border bg-terminal-surface shadow-[var(--terminal-shadow)]">
        <header className="flex h-10 items-center justify-between border-b border-terminal-border bg-terminal-elevated px-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <h1 className="text-xs text-terminal-subtext">
            {site.username}@{site.terminal.hostname}:~
          </h1>
          <ModeToggle />
        </header>

        <div className="flex-1 overflow-hidden p-2">
          <TerminalRunTime site={site} />
        </div>
      </div>
    </section>
  );
};

export default TerminalFrame;
