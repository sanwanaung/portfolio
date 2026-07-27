"use client";

import { SiteConfig } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";
import { TerminalBoot } from "@/features/components/terminal-boot";

import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { parseInput } from "@/features/lib/parse-input";
import { CommandRegistry } from "@/features/lib/command-registry";
import { terminalCommands } from "@/features/commands/index";

const commandRegistry = new CommandRegistry(terminalCommands);

interface XtermTerminalProps {
  site: SiteConfig;
}

export const XtermTerminal = ({ site }: XtermTerminalProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasBooted, setHasBooted] = useState<boolean>(false);

  const completeBooted = useCallback(() => setHasBooted(true), []);

  useEffect(() => {
    if (!hasBooted || !containerRef.current) return;

    let commandHistory: string[] = [];

    const terminal = new Terminal({
      allowTransparency: true,
      convertEol: true,
      cursorBlink: true,
      cursorStyle: "underline",
      fontFamily: "var(--font-mono), monospace",
      fontSize: 16,
      lineHeight: 1.5,
      scrollback: 1000,
      theme: {
        background: "rgba(0, 0, 0, 0)",
        foreground: "#e5e5e5",
      },
    });
    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);
    terminal.open(containerRef.current);
    fitAddon.fit();
    terminal.focus();

    const resizeObserver = new ResizeObserver(() => fitAddon.fit());
    resizeObserver.observe(containerRef.current);

    const writePrompt = () => {
      terminal.write(
        `👤 \u001b[38;5;78m${site.username}@${site.terminal.hostname}\u001b[0m:\u001b[38;5;75m~\u001b[0m$ `,
      );
    };
    writePrompt();

    const executeCommand = async (input: string) => {
      terminal.writeln(`You typed: ${input}`);
      const { args, commandName } = parseInput(input);
      const command = commandRegistry.get(commandName);
      if (!command) {
        const suggestions = commandRegistry.suggest(commandName);
        terminal.writeln(
          suggestions.length
            ? `Command not found: ${commandName}. Did you mean: ${suggestions.join(", ")}?`
            : `Command not found. Type 'help' for available commands.`,
        );
        return;
      }
      const output = await command.execute({
        args: [],
        history: commandHistory,
        input,
        now: new Date(),
        site,
      });
      const handlers = {
        clear: () => terminal.clear(),
        // text: () => terminal.writeln(output.content),
      } as const;
    };

    let currentInput = "";
    terminal.onData((data) => {
      if (data === "\r") {
        terminal.write("\r\n");

        if (currentInput.trim()) {
          executeCommand(currentInput);
        }

        currentInput = "";

        writePrompt();
        return;
      }
      currentInput += data;
      terminal.write(data);
    });

    return () => {
      terminal.dispose();
      resizeObserver.disconnect();
    };
  }, [hasBooted]);

  if (!hasBooted) return <TerminalBoot onComplete={completeBooted} />;

  return <div ref={containerRef} className="h-full" />;
};
