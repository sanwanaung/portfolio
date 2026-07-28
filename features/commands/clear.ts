export const clearCommand = {
  name: "clear",
  description: "clear the terminal",
  usage: "clear",
  aliases: ["cls"],
  execute: () => ({ type: "clear" as const }),
};
