import { siteConfig } from "@/config/site";
import { FloatingOverlay } from "@/features/components/floating-overlay";
import TerminalFrame from "@/features/components/terminal-frame";

export default function Home() {
  return (
    <main className="relative h-dvh w-screen overflow-hidden bg-terminal-bg">
      <TerminalFrame site={siteConfig} />
      <FloatingOverlay site={siteConfig} />
    </main>
  );
}
