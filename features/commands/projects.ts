import { portfolio } from "@/config";
import { color, staticCommand } from "@/features/lib/command-helper";
import { ANSI } from "@/features/theme";

export const projectsCommand = staticCommand({
  name: "projects",
  description: "List projects",
  usage: "projects",
  aliases: [],
  content: portfolio.projects
    .map((project) =>
      `
${color(`📦 ${project.name}`, ANSI.blue)}
${"─".repeat(project.name.length)}

${project.images.map((item) => item)} 

${project.description}

${color("Stack", ANSI.green)}   : ${project.stack}
${color("Preview", ANSI.yellow)} : ${project.preview}`.trim(),
    )
    .join("\n"),
});
