import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kartavya Arora — Full Stack Developer",
  description:
    "Full Stack Developer with 3+ years building high-performance web products. Specializing in Next.js, React, TypeScript, and Django.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Django", "TypeScript"],
  authors: [{ name: "Kartavya Arora" }],
  openGraph: {
    title: "Kartavya Arora — Full Stack Developer",
    description: "3+ years building high-performance web products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable}`}>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
