import { portfolio } from "@/config";
import { color, staticCommand } from "@/features/lib/command-helper";
import { ANSI } from "@/features/theme";

export const educationCommand = staticCommand({
  name: "education",
  aliases: ["edu"],
  usage: "education",
  description: "Show education",
  content: portfolio.education
    .map(
      (item) =>
        `${color(`🎓 Education`, ANSI.green)}
${"─".repeat("Education".length + 10)}

${color(item.school, ANSI.bold)}

Qualification: ${item.qualification}
Period: ${item.period}`,
    )
    .join("\n"),
});
