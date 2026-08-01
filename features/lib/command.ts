import { SiteConfig } from "@/types";

export type TerminalOutput =
  | { readonly type: "text"; readonly content: string }
  | { readonly type: "clear" }
  | { readonly type: "set-theme"; readonly theme: TerminalTheme }
  | {
      type: "image";
      paths: string[];
    };

export interface CommandContext {
  readonly args: readonly string[];
  readonly input: string;
  readonly now: Date;
  readonly site: SiteConfig;
  readonly theme?: TerminalTheme;
  readonly history: readonly string[];
}

export interface TerminalCommand {
  readonly name: string;
  readonly description: string;
  readonly usage: string;
  readonly aliases: readonly string[];

  execute(
    context: CommandContext,
  ): readonly TerminalOutput[] | Promise<readonly TerminalOutput[]>;
}

export type TerminalTheme =
  | "dark"
  | "light"
  | "matrix"
  | "dracula"
  | "nord"
  | "catppuccin"
  | "tokyo-night";
