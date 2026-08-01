import { portfolio } from "@/config";
import { color, image, text } from "@/features/lib/command-helper";
import { ANSI } from "@/features/theme";
import { TerminalCommand, TerminalOutput } from "@/features/lib/command";

export const projectsCommand: TerminalCommand = {
  name: "projects",
  description: "List projects",
  usage: "projects",
  aliases: ["work"],

  execute: () => {
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
        outputs.push(image(project.images));
      }

      outputs.push(
        text(`
${color("Description", ANSI.green)}
  ${project.description}

${color("Stack", ANSI.green)}
  ${project.stack}

${color("Preview", ANSI.green)}
  ${project.preview}
`),
      );
    }

    return outputs;
  },
};
