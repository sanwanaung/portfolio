import { TerminalCommand, TerminalOutput } from "@/features/lib/command";

export const text = (content: string): TerminalOutput => ({
  type: "text",
  content,
});

export const staticCommand = (
  command: Omit<TerminalCommand, "execute"> & { readonly content: string },
): TerminalCommand => ({
  ...command,
  execute: () => text(command.content),
});

export const list = (items: readonly string[]) =>
  items.map((item) => `  • ${item}`).join("\n");
