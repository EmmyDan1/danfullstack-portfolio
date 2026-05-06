"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {

  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* MOBILE NAV - horizontal top bar */}
      <header
        className="md:hidden fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4  bg-black backdrop-blur-sm border-b border-white/30"
        style={{ zIndex: 9999 }}
      >
        {/* Menu Items */}
        <nav className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-xs font-medium tracking-widest transition-colors pb-1 ${
                isActive(item.href)
                  ? "text-white border-b border-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        {/* <div className="flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github size={16} className="text-white/70 hover:text-white transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin size={16} className="text-white/70 hover:text-white transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <X size={16} className="text-white/70 hover:text-white transition-colors" />
          </a>
        </div> */}
      </header>

      {/* DESKTOP NAV - vertical left side */}
      <aside
        className="hidden md:flex fixed left-0 top-0 h-full w-20 z-50 flex-col items-center justify-between py-10 bg-black/20 backdrop-blur-sm"
        style={{ zIndex: 9999 }}
      >
        {/* Menu Items */}
        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              className={`text-xs font-medium tracking-widest transition-colors ${
                isActive(item.href)
                  ? "text-white border-r border-white pr-1"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        {/* <div className="flex flex-col items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github size={18} className="text-white/70 hover:text-white transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin size={18} className="text-white/70 hover:text-white transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <X size={18} className="text-white/70 hover:text-white transition-colors" />
          </a>
        </div> */}
      </aside>
    </>
  );
}
