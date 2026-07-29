import { portfolio } from "@/config";
import { color, staticCommand } from "@/features/lib/command-helper";
import { ANSI } from "@/features/theme";

export const contactCommand = staticCommand({
  name: "contact",
  aliases: ["cont"],
  usage: "contact",
  description: "Show contacts",
  content: `${color("✉ Contact", ANSI.green)}
${"─".repeat("Contact".length + 10)}
Email:          ${portfolio.contact.email}
Phone:          ${portfolio.contact.phone}
Location:       ${portfolio.contact.location}
Availability:   Open to opportunities`,
});
