import { SiteConfig } from "@/types";
import TerminalRunTime from "@/features/components/terminal-runtime";

interface TerminalFrameProps {
  readonly site: SiteConfig;
}

const TerminalFrame = ({ site }: TerminalFrameProps) => {
  return (
    <section className="w-full max-w-6xl max-h-4xl h-4xl border-terminal-border border-2 rounded-sm">
      <header className="flex h-11 items-center justify-center gap-3 border-b px-3">
        <div className="flex gap-2">
          <span className="size-3 rounded-full bg-terminal-red" />
          <span className="size-3 rounded-full bg-terminal-yellow" />
          <span className="size-3 rounded-full bg-terminal-green" />
        </div>
        <h1 className="text-xs text-terminal-subtext flex-1 text-center">
          {site.terminal.workingDirectory}/{site.username}@
          {site.terminal.hostname}
        </h1>
      </header>
      <div className="p-3 w-full">
        <TerminalRunTime site={site} />
      </div>
    </section>
  );
};

export default TerminalFrame;
