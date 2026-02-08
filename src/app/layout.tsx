import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Srishti Suman | Mechatronics & Full Stack Developer",
  description:
    "Portfolio of Srishti Suman – Mechatronics Engineer and Full Stack Developer building systems that connect hardware, software, and AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}