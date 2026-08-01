import { portfolio } from "@/config";
import { color, text } from "@/features/lib/command-helper";
import { ANSI } from "@/features/theme";
import { TerminalCommand, TerminalOutput } from "@/features/lib/command";
import { convertIIP } from "../lib";

export const projectsCommand: TerminalCommand = {
  name: "projects",
  description: "List projects",
  usage: "projects",
  aliases: [""],

  execute: async () => {
    const outputs: TerminalOutput[] = [];

    for (const project of portfolio.projects) {
      outputs.push(
        text(`
${color("📦 Project", ANSI.blue)}
${"─".repeat(40)}

${color("Name", ANSI.green)}
  ${project.name}
`),
      );

      if (project.images.length > 0) {
        const iipImages = await Promise.all(
          project.images.map((image) => convertIIP(image)),
        );

        outputs.push(text(iipImages.join("\n")));
      }

      outputs.push(
        text(`
${color("Description", ANSI.green)}
  ${project.description}

${color("Stack", ANSI.green)}
  ${project.stack}

${color("Preview", ANSI.yellow)}
  ${project.preview}
`),
      );
    }

    return outputs;
  },
};
