import { text } from "@/features/lib/command-helper";
import { TerminalCommand } from "@/features/lib/command";

export const echoCommand: TerminalCommand = {
  name: "echo",
  description: "Print text",
  usage: "echo <text>",
  aliases: [],

  execute: ({ args }) => [text(args.join(" "))],
};
