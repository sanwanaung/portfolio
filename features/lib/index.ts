import type { Terminal } from "@xterm/xterm";

export function centerAscii(terminal: Terminal, ascii: string): string {
  return ascii
    .split("\n")
    .map((line) => {
      const visibleLength = line.replace(/\x1b\[[0-9;]*m/g, "").length;

      const padding = Math.max(
        0,
        Math.floor((terminal.cols - visibleLength) / 2),
      );

      return " ".repeat(padding) + line;
    })
    .join("\n");
}

export async function convertIIP(imageUrl: string): Promise<string> {
  const response = await fetch(imageUrl);

  if (!response.ok) {
    throw new Error(`Failed to load image: ${imageUrl}`);
  }

  const blob = await response.blob();

  const base64Data = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1]);
    };

    reader.onerror = reject;

    reader.readAsDataURL(blob);
  });

  const OSC = "\x1b]1337;";
  const ST = "\x07";

  const args = `File=size=${blob.size};inline=1`;

  return `${OSC}${args}:${base64Data}${ST}`;
}
