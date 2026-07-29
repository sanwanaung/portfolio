import { text } from "@/features/lib/command-helper";

export const echoCommand = {
  name: "echo",
  description: "Print text",
  usage: "echo <text>",
  aliases: [],
  execute: ({ args }: { readonly args: readonly string[] }) =>
    text(args.join(" ")),
};
