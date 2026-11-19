import { siteConfig } from "@/config/site";
import { badges, portfolio } from "@/config";
import TerminalRunTime from "@/features/components/terminal-runtime";
import { ModeToggle } from "@/features/theme/theme-toggle";

export default function Home() {
  return (
    <main className="relative min-h-dvh w-screen overflow-hidden bg-terminal-bg text-terminal-text">
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
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-terminal-accent/20 blur-3xl"
      />

      <section className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 py-12">
        <div className="grid items-center gap-10 lg:grid-cols-[40%_60%]">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs text-terminal-success">
              SYSTEM.STATUS: ONLINE
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              San Wan Aung
            </h1>
            <p className="font-mono text-sm text-terminal-subtext">
              Full Stack Web Developer
            </p>
            <p className="max-w-md text-sm leading-relaxed text-terminal-subtext">
              {portfolio.about}
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-terminal-border bg-terminal-elevated px-2 py-1 font-mono text-xs text-terminal-text"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${portfolio.contact.email}`}
                className="rounded-md bg-terminal-accent px-4 py-2 font-mono text-sm font-medium text-white transition hover:opacity-90"
              >
                init_contact()
              </a>
              <a
                href={`/resume.pdf`}
                className="rounded-md border border-terminal-border px-4 py-2 font-mono text-sm text-terminal-text transition hover:bg-terminal-elevated"
              >
                view_resume.pdf
              </a>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-xl border border-terminal-border bg-terminal-surface shadow-[var(--terminal-shadow)]">
            <header className="flex h-10 items-center justify-between border-b border-terminal-border bg-terminal-elevated px-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>
              <h2 className="text-xs text-terminal-subtext">
                {siteConfig.username}@{siteConfig.terminal.hostname}:~
              </h2>
              <ModeToggle />
            </header>
            <div className="h-110 w-full p-2">
              <TerminalRunTime site={siteConfig} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
