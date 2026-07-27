import type { TerminalCommand } from "@/features/lib/command";

const normalize = (value: string) => value.trim().toLowerCase();

export class CommandRegistry {
  private readonly commandsByName = new Map<string, TerminalCommand>();

  public constructor(commands: readonly TerminalCommand[]) {
    for (const command of commands) {
      this.register(command);
    }
  }

  public get(name: string): TerminalCommand | undefined {
    return this.commandsByName.get(normalize(name));
  }

  public list(): readonly TerminalCommand[] {
    return [...new Set(this.commandsByName.values())].sort((left, right) =>
      left.name.localeCompare(right.name),
    );
  }

  public suggest(prefix: string): readonly string[] {
    const normalizedPrefix = normalize(prefix);

    return [...this.commandsByName.keys()]
      .filter((name) => name.startsWith(normalizedPrefix))
      .sort();
  }

  private register(command: TerminalCommand): void {
    for (const name of [command.name, ...command.aliases]) {
      const normalizedName = normalize(name);

      if (this.commandsByName.has(normalizedName)) {
        throw new Error(`Duplicate terminal command name: ${normalizedName}`);
      }

      this.commandsByName.set(normalizedName, command);
    }
  }
}
