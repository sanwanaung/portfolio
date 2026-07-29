import { aboutCommand } from "@/features/commands/about";
import { clearCommand } from "@/features/commands/clear";
import { helpCommand } from "@/features/commands/help";
import { echoCommand } from "@/features/commands/echo";
import { skillsCommand } from "@/features/commands/skills";
import { projectsCommand } from "@/features/commands/projects";
import { educationCommand } from "@/features/commands/education";
import { contactCommand } from "@/features/commands/contact";
import { socialsCommand } from "@/features/commands/socials";

import type { TerminalCommand } from "@/features/lib/command";

export const terminalCommands: readonly TerminalCommand[] = [
  aboutCommand,
  clearCommand,
  helpCommand,
  echoCommand,
  skillsCommand,
  projectsCommand,
  educationCommand,
  contactCommand,
  socialsCommand,
];
