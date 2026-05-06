import type { Metadata } from "next";
import { Smooch_Sans, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Beams from "@/components/HeroBackground";
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
    <html lang="en" className={`${smoochSans.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Global Background */}
        <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        {/* Global Navbar */}
        <Navbar />
        {/* Page Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}