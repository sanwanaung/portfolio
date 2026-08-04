import { portfolio } from "@/config";
import { color, staticCommand, text } from "@/features/lib/command-helper";
// import { convertIIP, renderImagesInRow } from "@/features/lib";
import { ANSI } from "@/features/theme";
// import type { CommandContext, TerminalCommand } from "@/features/lib/command";

export const projectsCommand = staticCommand({
  name: "projects",
  description: "List projects",
  usage: "projects",
  aliases: ["work"],
  content: portfolio.projects
    .map((project) =>
      `
${color(`📦 ${project.name}`, ANSI.blue)}
${"─".repeat(project.name.length)}

${project.description}

${color("Stack", ANSI.green)}   : ${project.stack}
${color("Preview", ANSI.yellow)} : ${project.preview}`.trim(),
    )
    .join("\n"),
});

// export const projectsCommand: TerminalCommand = {
//   name: "projects",
//   description: "List projects",
//   usage: "projects",
//   aliases: [],

//   async execute({ cols }: CommandContext) {
//     const sections = await Promise.all(
//       portfolio.projects.map(async (project) => {
//         const heightRows = 8;
//         const columnsPerImage =
//           Math.floor((cols - 4) / project.images.length) - 1;

//         const renderedImages = await Promise.all(
//           project.images.map((imageUrl) =>
//             convertIIP(imageUrl, {
//               widthCells: columnsPerImage,
//               heightCells: heightRows,
//             }).catch((error) => {
//               console.error(`Failed to render image ${imageUrl}:`, error);
//               return null;
//             }),
//           ),
//         );

//         const validImages = renderedImages.filter(
//           (img): img is { sequence: string; width: number; height: number } =>
//             img !== null,
//         );

//         const imageRow = validImages.length
//           ? renderImagesInRow(validImages, heightRows)
//           : "[images failed to load]";

//         return `
// ${color(`📦 ${project.name}`, ANSI.blue)}
// ${"─".repeat(project.name.length)}

// ${imageRow}

// ${project.description}

// ${color("Stack", ANSI.green)}   : ${project.stack}
// ${color("Preview", ANSI.yellow)} : ${project.preview}`.trim();
//       }),
//     );

//     return text(sections.join("\n\n"));
//   },
// };
