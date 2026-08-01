import { TerminalCommand } from "@/features/lib/command";

export const clearCommand: TerminalCommand = {
  name: "clear",
  description: "clear the terminal",
  usage: "clear",
  aliases: ["cls"],

  execute: () => [
    {
      type: "clear",
    },
  ],
};
