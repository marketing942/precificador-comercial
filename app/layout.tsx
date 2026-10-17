import type { Metadata } from "next";
import { Inter, Oxanium, Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Oxanium({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const ui = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Facilitadores Comercial",
  description: "Ferramentas para o time comercial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${body.variable} ${display.variable} ${ui.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
