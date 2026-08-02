import type { Terminal } from "@xterm/xterm";

interface RenderedImage {
  sequence: string;
  width: number;
}

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

export async function convertIIP(
  imageUrl: string,
  options?: { widthCells?: number; heightCells?: number },
): Promise<{ sequence: string; width: number; height: number }> {
  const response = await fetch(imageUrl);

  if (!response.ok) {
    throw new Error(`Failed to load image: ${imageUrl}`);
  }

  const blob = await response.blob();

  const base64Data = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

  const OSC = "\x1b]1337;";
  const ST = "\x07";

  const width = options?.widthCells ?? 30;
  const height = options?.heightCells ?? 15;

  const args = `File=size=${blob.size};inline=1;preserveAspectRatio=0;width=${width};height=${height}`;

  return {
    sequence: `${OSC}${args}:${base64Data}${ST}`,
    width,
    height,
  };
}

export function renderImagesInRow(
  images: readonly RenderedImage[],
  heightRows: number,
): string {
  const SAVE = "\x1b7";
  const RESTORE = "\x1b8";
  const GAP = 2;

  let output = SAVE;
  let offset = 0;

  images.forEach((image, index) => {
    if (index > 0) {
      output += RESTORE;
      output += `\x1b[${offset}C`;
    }
    output += image.sequence;
    offset += image.width + GAP;
  });

  output += RESTORE;
  output += `\x1b[${heightRows}B`;
  output += "\r";

  return output;
}
