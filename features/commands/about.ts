import { portfolio } from "@/config";
import { staticCommand } from "@/features/lib/command-helper";

export const aboutCommand = staticCommand({
  name: "about",
  description: "About me",
  usage: "about",
  aliases: [],
  content: portfolio.about,
});
