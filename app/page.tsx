import { siteConfig } from "@/config/site";
import TerminalFrame from "@/features/components/terminal-frame";

export default function Home() {
  return (
    <main className="h-dvh w-dvw bg-terminal-bg flex justify-center overflow-hidden p-3">
      <TerminalFrame site={siteConfig} />
    </main>
  );
}
