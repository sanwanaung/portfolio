import { portfolio } from "@/config/index";

export const emailCommand = {
  name: "email",
  description: "Compose an email",
  usage: "email",
  aliases: ["mail"],
  execute: () => ({
    type: "open-external" as const,
    url: `mailto:${portfolio.contact.email}`,
  }),
};
