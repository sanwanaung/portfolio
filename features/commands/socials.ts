import { portfolio } from "@/config";
import { color, staticCommand } from "@/features/lib/command-helper";
import { ANSI } from "@/features/theme";

export const socialsCommand = staticCommand({
  name: "socials",
  aliases: ["links"],
  usage: "socials",
  description: "List social links",
  content: `${color("🔗 Links", ANSI.green)}
${"─".repeat("Socials".length + 10)}
Github:         ${portfolio.socials.github}
Repository:     ${portfolio.socials.repository}
Resume:         ${portfolio.socials.resume}`,
});
