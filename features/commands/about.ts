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
${portfilio.about}\n
${color("Currently focusing on", ANSI.cyan)}
  • Next.js
  • React.js
  • TypeScript
  • Node.js (Express.js)
  • PostgreSQL
`,
});
