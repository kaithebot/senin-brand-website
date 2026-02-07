import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sənin Hekayən - Uşağınızın Şəxsi Nağıl Kitabı",
  description: "Uşağınızın şəkli və maraqları ilə fərdiləşdirilmiş nağıl kitabı. Hər kitab dünyada tək olan əsərdir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
