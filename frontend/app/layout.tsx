import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  Github,
  Linkedin,
  Mail,
  NotebookTabs,
  Phone,
  Twitter,
} from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diddit",
  description:
    "Diddit - A task management app built with Next.js, FastAPI and MongoDB. It lets you create, manage, and track your tasks efficiently. It is built by @ergomancer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex gap-4">
            <Link href="/">
              <NotebookTabs />
            </Link>
            <h1 className="text-3xl font-bold">Diddit</h1>

            <ModeToggle />
          </header>
          <main>
            {children}
            <Toaster richColors position="bottom-right" />
          </main>
          <footer className="flex gap-4">
            <span>Made by @ergomancer</span>

            <a
              className=""
              href="https://github.com/ergomancer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>

            <a
              className=""
              href="https://x.com/ergomancer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>

            <a
              className=""
              href="https://linkedin.com/in/ergomancer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>

            <a
              className=""
              href="mailto:akashkhetan044@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
            </a>

            <a
              className=""
              href="tel:+917003686821"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone />
            </a>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
