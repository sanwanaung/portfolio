export interface TerminalIdentity {
  readonly hostname: string;
  readonly workingDirectory: string;
}

export interface SiteConfig {
  readonly name: string;
  readonly username: string;
  readonly role: string;
  readonly description: string;
  readonly locale: string;
  readonly terminal: TerminalIdentity;
}
