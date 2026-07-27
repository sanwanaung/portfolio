export interface ParsedInput {
  readonly commandName: string;
  readonly args: readonly string[];
}

export function parseInput(input: string): ParsedInput {
  const tokens = input.match(/(?:[^\s"]+|"[^"]*")+/g) ?? [];
  const [commandName = "", ...args] = tokens;

  return {
    commandName: commandName.toLowerCase(),
    args: args.map((argument) => argument.replace(/^"|"$/g, "")),
  };
}
