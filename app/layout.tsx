import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeToggle from "../components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neo Clark Portfolio",
  description: "A portfolio site for Neo Clark.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-foreground">
        <header className="border-b border-surface surface backdrop-blur-xl">
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-8">
              <div className="text-lg font-semibold text-foreground">Portfolio</div>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground">
                <a href="/" className="transition hover:text-primary">
                  Home
                </a>
                <a href="/about" className="transition hover:text-primary">
                  About
                </a>
                <a href="/projects" className="transition hover:text-primary">
                  Projects
                </a>
              </div>
            </div>
            <ThemeToggle />
          </nav>
        </header>

        <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
          {children}
        </main>

        <footer className="border-t border-surface surface backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4 text-sm text-muted sm:px-6">
            © {new Date().getFullYear()} Neo Clark. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
