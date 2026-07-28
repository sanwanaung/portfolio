import { aboutCommand } from "@/features/commands/about";
import { clearCommand } from "@/features/commands/clear";
import { helpCommand } from "@/features/commands/help";

import type { TerminalCommand } from "@/features/lib/command";

export const terminalCommands: readonly TerminalCommand[] = [
  aboutCommand,
  clearCommand,
  helpCommand,
];
