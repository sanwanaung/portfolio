import { portfolio } from "@/config";
import { list, staticCommand } from "@/features/lib/command-helper";

export const skillsCommand = staticCommand({
  name: "skills",
  description: "List skills",
  usage: "skills",
  aliases: ["stacks"],
  content: `Skills:\n${list(portfolio.skills)}`,
});
