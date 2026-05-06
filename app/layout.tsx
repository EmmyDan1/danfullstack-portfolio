import type { Metadata } from "next";
import { Smooch_Sans, Inter } from "next/font/google";
import "./globals.css";

const smoochSans = Smooch_Sans({
  variable: "--font-smooch",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Emmanuel | Fullstack Developer",
  description: "Fullstack Developer based in Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${smoochSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}