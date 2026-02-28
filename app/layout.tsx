import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mukesh Technologies | Crafting Digital Excellence",
  description: "Premier technology services including software development, mobile app development, and UI/UX design.",
  keywords: ["software development", "mobile apps", "UI/UX design", "IT services", "Mukesh Technologies"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-inter antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
