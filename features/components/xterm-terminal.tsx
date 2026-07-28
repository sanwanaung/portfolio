"use client";

import { SiteConfig } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";
import { TerminalBoot } from "@/features/components/terminal-boot";

import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { parseInput } from "@/features/lib/parse-input";
import { CommandRegistry } from "@/features/lib/command-registry";
import { terminalCommands } from "@/features/commands/index";
import { getTerminalTheme } from "@/lib/utils";

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
    const setInput = (nextInput: string) => {
      currentInput = nextInput;
      terminal.write("\r\u001b[2K");
      writePrompt();
      terminal.write(currentInput);
    };
    let historyIndex = 0;

    const terminal = new Terminal({
      allowTransparency: true,
      convertEol: true,
      cursorBlink: true,
      cursorStyle: "underline",
      fontFamily: "var(--font-mono)",
      fontSize: 16,
      lineHeight: 2.5,
      scrollback: 1000,
      theme: getTerminalTheme(),
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
        `👤  \u001b[38;5;78m${site.username}@${site.terminal.hostname}\u001b[0m:\u001b[38;5;75m~\u001b[0m$ `,
      );
    };
    writePrompt();

    const executeCommand = async (input: string) => {
      // terminal.writeln(`You typed: ${input}`);
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
        args: args,
        history: commandHistory,
        input,
        now: new Date(),
        site,
      });
      switch (output.type) {
        case "text":
          terminal.writeln(output.content);
          break;
        case "clear":
          terminal.clear();
          break;
        case "set-theme":
          //
          break;
      }
    };

    let currentInput = "";
    terminal.onData((data) => {
      // if (data === "\r") {
      //   terminal.write("\r\n");

      //   if (currentInput.trim()) {
      //     executeCommand(currentInput);
      //   }

      //   currentInput = "";

      //   writePrompt();
      //   return;
      // }

      //Arrow Up
      if (data === "\u001b[A") {
        historyIndex = Math.max(0, historyIndex - 1);
        setInput(commandHistory[historyIndex] ?? "");
        return;
      }
      // Arrow Down
      if (data === "\u001b[B") {
        historyIndex = Math.min(commandHistory.length, historyIndex + 1);
        setInput(commandHistory[historyIndex] ?? "");
        return;
      }
      // Tab
      if (data === "\t") {
        const suggestions = commandRegistry.suggest(
          parseInput(currentInput).commandName,
        );
        if (suggestions.length === 1) setInput(suggestions[0]);
        else if (suggestions.length > 1) {
          terminal?.write(`\r\n${suggestions.join("  ")}\r\n`);
          writePrompt();
          terminal?.write(currentInput);
        }
        return;
      }
      // Ignore any other unhandled escape sequences or control codes
      // if (data.includes("\u001b") || data < " ") {
      //   return;
      // }

      for (const character of data) {
        if (character === "\r") {
          terminal.write("\r\n");
          if (currentInput.trim()) {
            commandHistory.push(currentInput);
            historyIndex = commandHistory.length;
            void executeCommand(currentInput);
          }
          currentInput = "";
          queueMicrotask(writePrompt);
          continue;
        }
        if (character === "\u007f") {
          if (currentInput) {
            currentInput = currentInput.slice(0, -1);
            terminal?.write("\b \b");
          }
          continue;
        }
        if (character >= " ") {
          currentInput += character;
          terminal?.write(character);
        }
      }
      // currentInput += data;
      // terminal.write(data);
    });

    return () => {
      terminal.dispose();
      resizeObserver.disconnect();
    };
  }, [hasBooted]);

  if (!hasBooted) return <TerminalBoot onComplete={completeBooted} />;

  return <div ref={containerRef} className="h-full" />;
};
