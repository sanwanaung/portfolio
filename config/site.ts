import { ANSI } from "@/features/theme";
import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "San Wan Aung",
  username: "zawmunaung",
  role: "Full Stack Web Developer",
  description: "Welcome to San Wan Aung's interactive portfolio terminal!",
  locale: "en_US",
  terminal: {
    hostname: "portfolio",
    workingDirectory: "~",
  },
};

export const ASCCI_NAME_COMPACT = String.raw`
  {\  ***  /}
  {{\  _  /}}
  {{{\(_)/}}}
  {{{(_j_)}}}
   {{{/ \}}}
    {/   \}
    /     \
    (_______)
`;

export const ASCCI_NAME = String.raw`
   _____                _       __               ___                    
  / ___/____ _____     | |     / /___ _____     /   | __  ______  ____ _
  \__ \/ __ \`/ __ \    | | /| / / __ \`/ __ \   / /| |/ / / / __ \/ __ \`/
 ___/ / /_/ / / / /    | |/ |/ / /_/ / / / /  / ___ / /_/ / / / / /_/ /
/____/\__,_/_/ /_/     |__/|__/\__,_/_/ /_/  /_/  |_\__,_/_/ /_/\__, /
                                                               /____/
`;
