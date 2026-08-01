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
    "Mongo DB",
  ],
  projects: [
    {
      name: "Skyline Hub Hotel – Digital Menu & Room Service",
      description:
        "A full-stack hotel's menu prview, check prices and request room-services platform that lets guests scan a room QR code to browse digital menus, customize orders with variants and add-ons, and request room services. Features include secure room sessions, order room-serivce management, and an admin dashboard for managing menus, categories, rooms, and service requests.",
      stack:
        "Next.js, TypeScript, Better-Auth , Prisma ORM, PostgreSQL, Tailwind CSS, shadcn/ui, React Query, Zustand",
      preview: "https://skyline-hub-two.vercel.app/admin/dashboard",
      images: ["./dashboard-showcase.png"],
    },
  ],
  // experience: [
  //   {
  //     role: "Full Stack Engineer",
  //     company: "",
  //     period: "2024 — Present",
  //   },
  // ],
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
};

/*



*/
