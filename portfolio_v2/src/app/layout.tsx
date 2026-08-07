import type { Metadata } from "next";
import { Inter, Clicker_Script, Doto } from "next/font/google";

import Nav from "@/components/nav";

import "./globals.css";

// Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const clicker_script = Clicker_Script({
  variable: "--font-clicker-script",
  subsets: ["latin"],
  weight: ["400"]
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["700"],
  // roundness: "100"
});

// Metadata
export const metadata: Metadata = {
  title: "Thomas Eleveld - Portfolio",
  description: "Portfolio of Thomas Eleveld, web and game developer",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
  manifest: "/favicon/site.webmanifest",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${clicker_script.variable} ${doto.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
