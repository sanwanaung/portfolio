import { SiteConfig } from "@/types";
import type { Terminal } from "@xterm/xterm";

export type TerminalTheme =
  | "dark"
  | "light"
  | "matrix"
  | "dracula"
  | "nord"
  | "catppuccin"
  | "tokyo-night";

export type TerminalOutput =
  | { readonly type: "text"; readonly content: string }
  | { readonly type: "clear" }
  | { readonly type: "set-theme"; readonly theme: TerminalTheme }
  | { readonly type: "open-external"; readonly url: string };

export interface CommandContext {
  readonly args: readonly string[];
  readonly input: string;
  readonly now: Date;
  readonly site: SiteConfig;
  readonly theme?: TerminalTheme;
  readonly cols: number;
  readonly history: readonly string[];
}

export interface TerminalCommand {
  readonly name: string;
  readonly description: string;
  readonly usage: string;
  readonly aliases: readonly string[];
  execute(context: CommandContext): TerminalOutput | Promise<TerminalOutput>;
}
