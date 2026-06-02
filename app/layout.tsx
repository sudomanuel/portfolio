import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Backdrop from "@/components/Backdrop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manuel Pusma Jurado",
  description:
    "Electronic Engineer & Data Builder. Final-year at UNI Lima, exchange at HFU Germany. Open to Working Student / Internship from Nov 2025.",
  keywords: [
    "electronic engineer",
    "data engineering",
    "Python",
    "Power BI",
    "working student",
    "Germany",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-black text-[#ededed] font-mono antialiased">
        <Backdrop />
        {children}
      </body>
    </html>
  );
}
