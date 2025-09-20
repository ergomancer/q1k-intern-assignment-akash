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
          <div className="flex flex-col w-screen h-screen">
            <header className="flex p-10 border-b justify-between">
              <Link href="/" className="flex gap-15">
                <NotebookTabs className="h-10 w-10" />
                <h1 className="text-4xl font-bold">Diddit</h1>
              </Link>
              <ModeToggle />
            </header>
            <main className="flex-grow">
              {children}
              <Toaster richColors position="bottom-right" invert={true} />
            </main>
            <footer className="flex p-10 border-t justify-evenly">
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
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
