import { portfolio } from "@/config";
import { color, staticCommand } from "@/features/lib/command-helper";
import { ANSI } from "../theme";

export const aboutCommand = staticCommand({
  name: "about",
  description: "About me",
  usage: "about",
  aliases: [],
  content: `${color("🧑‍💻 About", ANSI.green)}
${color("────────────────────────────────────", ANSI.bold)}\n
Full Stack Developer passionate about building
modern web applications with clean architecture,
thoughtful user experiences, and reliable backend
systems.\n
${color("Currently focusing on", ANSI.cyan)}
  • Next.js
  • React.js
  • TypeScript
  • Node.js (Express.js)
  • PostgreSQL
`,
});
