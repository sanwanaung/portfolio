import { aboutCommand } from "@/features/commands/about";

import type { TerminalCommand } from "@/features/lib/command";

export const terminalCommands: readonly TerminalCommand[] = [aboutCommand];
