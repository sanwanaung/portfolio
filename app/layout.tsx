import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sanwanaungportfolio.vercel.app"),

  title: {
    default: "San Wan Aung | Full Stack Developer",
    template: "%s | San Wan Aung",
  },

  description:
    "Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, Express.js, Prisma ORM, and PostgreSQL. Explore my interactive terminal-style portfolio, projects, skills, and contact information.",

  keywords: [
    "San Wan Aung",
    "Portfolio",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Prisma ORM",
    "PostgreSQL",
    "Tailwind CSS",
    "Web Developer",
    "Terminal Portfolio",
  ],

  authors: [
    {
      name: "San Wan Aung",
      url: "https://sanwanaungportfolio.vercel.app",
    },
  ],

  creator: "San Wan Aung",

  applicationName: "San Wan Aung Terminal Style Portfolio",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "San Wan Aung | Full Stack Developer",
    description:
      "Interactive terminal-style portfolio showcasing projects, technical skills, and experience.",

    url: "https://sanwanaungportfolio.vercel.app",

    siteName: "San Wan Aung Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "./portfolio-showcase.png",
        width: 1200,
        height: 630,
        alt: "San Wan Aung Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "San Wan Aung | Full Stack Developer",
    description:
      "Interactive terminal portfolio built with Next.js and xterm.js.",
    images: ["./portfolio-showcase.png"],
  },

  icons: {
    icon: "./favicon.ico",
    apple: "./apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-mono",
        jetbrainsMono.variable,
      )}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
