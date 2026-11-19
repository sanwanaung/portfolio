import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTerminalTheme() {
  const styles = getComputedStyle(document.documentElement);

  return {
    background: styles.getPropertyValue("--terminal-bg").trim(),
    foreground: styles.getPropertyValue("--terminal-text").trim(),
    cursor: styles.getPropertyValue("--terminal-accent").trim(),
    cursorAccent: styles.getPropertyValue("--terminal-bg").trim(),
    black: "#000000",
    blue: styles.getPropertyValue("--terminal-accent").trim(),
    green: styles.getPropertyValue("--terminal-success").trim(),
    yellow: styles.getPropertyValue("--terminal-accent").trim(),
    red: "#F87171",
    magenta: styles.getPropertyValue("--terminal-accent").trim(),
    cyan: styles.getPropertyValue("--terminal-accent").trim(),
    white: styles.getPropertyValue("--terminal-text").trim(),
    selectionBackground: styles.getPropertyValue("--terminal-elevated").trim(),
  };
}
