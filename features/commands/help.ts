import { text } from "@/features/lib/command-helper";
import { terminalCommands } from "@/features/commands";

export const helpCommand = {
  name: "help",
  description: "List available commands",
  usage: "help",
  aliases: ["?"],
  execute: () =>
    text(
      `Available commands:\n${terminalCommands.map((command) => `  ${command.name.padEnd(12)} ${command.description}`).join("\n")}\n\nUse Tab to autocomplete.`,
    ),
} as const;
