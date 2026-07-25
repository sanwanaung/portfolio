import { SiteConfig } from "@/types";

interface TerminalRunTimeProps {
  readonly site: SiteConfig;
}

const TerminalRunTime = ({ site }: TerminalRunTimeProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div>
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-6xl font-extrabold">{site.name}</h1>
          <p className="text-lg text-terminal-subtext">{site.role}</p>
        </div>
        <div className="mt-4 text-center text-terminal-subtext text-sm">
          <p>{site.description}</p>
          <p>Type 'help' to see available commands.</p>
        </div>
      </div>
      <div>Interactive Trmial Part blabla</div>
    </div>
  );
};

export default TerminalRunTime;
