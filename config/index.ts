export const bootSequence = [
  "Initializing portfolio terminal...",
  "Loading user profile...",
  "Terminal ready.",
] as const;

export const portfolio = {
  about:
    "Full Stack Developer who loves building modern web applications with clean architecture, thoughtful user experiences, and reliable backend systems.",
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma ORM",
    "Tailwind CSS",
    "shadcn/ui",
    "React Query",
    "Zustand",
    "Git",
    "Redux",
  ],
  projects: [
    {
      name: "Project One",
      description: "Replace with your project summary.",
      stack: "Next.js, TypeScript",
      year: "2026",
    },
  ],
  experience: [
    {
      role: "Full Stack Engineer",
      company: "Your Company",
      period: "2024 — Present",
    },
  ],
  education: [
    {
      school: "Pyay University (Distance Education)",
      qualification: "B.A (English)(Third Year)",
      period: "2022 — 2026",
    },
  ],

  contact: {
    email: "sanwanaungdev@gmail.com",
    phone: "+959 974 463092",
    location: "Yangon, Myanmar",
  },
  socials: {
    github: "https://github.com/sanwanaung",
    repository: "https://github.com/sanwanaung/portfolio",
    resume: "/resume.pdf",
  },
} as const;
