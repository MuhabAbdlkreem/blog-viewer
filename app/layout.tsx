import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "Blog Viewer",
    template: "%s | Blog Viewer",
  },
  description: "A modern blog viewer built with Next.js, TailwindCSS, and TypeScript.",
  metadataBase: new URL("https://your-deployment-url.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <header className="w-full py-8 flex justify-center bg-background shadow-md dark:bg-[#0a0a0a]">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase">THE BLOG</h1>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
