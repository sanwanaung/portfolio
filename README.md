# San Wan Aung — Interactive Terminal Portfolio

A developer portfolio where an interactive terminal is the primary interface. It presents experience, skills, projects, and contact information through a real xterm.js terminal wrapped in a macOS-inspired window.

## Overview

The application is a single-page Next.js app. The hero pairs a concise personal introduction with a live terminal. Below it, minimal sections cover about, projects, and contact. All interaction happens through the terminal command system; there is no navbar or sidebar.

## Features

- Live xterm.js terminal with command execution
- Command registry with aliases, parsing, history, and Tab autocomplete
- Arrow-key history navigation
- macOS-style window chrome with traffic-light controls
- Boot sequence animation
- Light, dark, and system themes via next-themes
- Responsive ASCII banner that adapts to terminal width
- Custom 404 page matching the terminal aesthetic
- External link and mailto handling from commands

## Technology Stack

| Category | Technologies |
| --- | --- |
| Framework | Next.js 16, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4, shadcn/ui, tw-animate-css |
| Animation | Framer Motion |
| Terminal | xterm.js 6 with fit, clipboard, image, and web-links addons |
| Theming | next-themes |
| Icons | Lucide React |
| Tooling | ESLint 9, pnpm |

## Project Architecture

```
app/
  page.tsx          # Hero layout and content sections
  layout.tsx        # Fonts, metadata, theme provider
  globals.css       # Design tokens and terminal styling
  not-found.tsx     # Custom 404 page
config/
  index.ts          # Boot sequence and portfolio content
  site.ts           # Site config and ASCII banners
features/
  commands/         # Command definitions and registry
  components/       # Terminal runtime, frame, boot, loading
  lib/              # Parsing, helpers, image utilities
  theme/            # Theme toggle
providers/         # next-themes provider
lib/               # Utilities, including xterm theme mapping
types/             # Shared TypeScript interfaces
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Installation

```bash
git clone https://github.com/sanwanaung/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Run the production server |
| `pnpm lint` | Run ESLint |

## Configuration

Portfolio content is defined in `config/index.ts`. Site metadata and terminal identity live in `config/site.ts`. No environment variables are required.

## Deployment

The project is compatible with Vercel. Connect the repository to Vercel or run `vercel` from the project root.

## License

All rights reserved.
