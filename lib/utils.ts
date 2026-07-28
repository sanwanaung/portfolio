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
    // cursor: styles.getPropertyValue("--terminal-green").trim(),
    black: "#000000",
    blue: styles.getPropertyValue("--terminal-blue").trim(),
    green: styles.getPropertyValue("--terminal-green").trim(),
    yellow: styles.getPropertyValue("--terminal-yellow").trim(),
    red: styles.getPropertyValue("--terminal-red").trim(),
    magenta: styles.getPropertyValue("--terminal-pink").trim(),
    cyan: styles.getPropertyValue("--terminal-cyan").trim(),
    white: styles.getPropertyValue("--terminal-text").trim(),
  };
}
