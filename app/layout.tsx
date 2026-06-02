import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Manuel Pusma Jurado — Electronic Engineer",
  description:
    "Final-year Electronic Engineering student at UNI Lima, exchange at HFU Germany. Building data tools and operational solutions with Python, DuckDB & Power BI.",
  keywords: [
    "electronic engineer",
    "data engineering",
    "Python",
    "Power BI",
    "working student",
    "Germany",
    "HFU",
    "UNI Lima",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-sans bg-[#0a0a0f] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
