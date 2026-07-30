"use client";

import { SiteConfig } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";
import { TerminalBoot } from "@/features/components/terminal-boot";

import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { ClipboardAddon } from "@xterm/addon-clipboard";
import { ImageAddon, IImageAddonOptions } from "@xterm/addon-image";

import { parseInput } from "@/features/lib/parse-input";
import { CommandRegistry } from "@/features/lib/command-registry";
import { terminalCommands } from "@/features/commands/index";
import { getTerminalTheme } from "@/lib/utils";

const commandRegistry = new CommandRegistry(terminalCommands);

// customize as needed (showing addon defaults)
const customSettings: IImageAddonOptions = {
  enableSizeReports: true,
  pixelLimit: 16777216,
  sixelSupport: true,
  sixelScrolling: true,
  sixelPaletteLimit: 4096,
  sixelSizeLimit: 33554432,
  storageLimit: 128,
  showPlaceholder: true,
  iipSupport: true,
  iipSizeLimit: 33554432,
  // kittySupport: true,
  // kittySizeLimit: 33554432
};

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
    const clipboardAddon = new ClipboardAddon();
    const imageAddon = new ImageAddon(customSettings);
    terminal.loadAddon(fitAddon);
    terminal.loadAddon(clipboardAddon);
    terminal.open(containerRef.current);
    terminal.loadAddon(imageAddon);
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
    });

    return () => {
      terminal.dispose();
      resizeObserver.disconnect();
    };
  }, [hasBooted]);

  if (!hasBooted) return <TerminalBoot onComplete={completeBooted} />;

  return (
    <div className="h-full w-full relative p-2">
      {/* Terminal is mounted only after boot fade-out */}
      {hasBooted && (
        <div
          ref={containerRef}
          className="h-full"
          style={{ padding: "0.25rem" }}
        />
      )}

      {!hasBooted && (
        <div
          className={`absolute inset-0 z-10 transition-opacity duration-500 ${
            hasBooted ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <TerminalBoot onComplete={completeBooted} />
        </div>
      )}
    </div>
  );
};
