"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Work", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 flex items-center justify-between px-8 md:px-12 py-5 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        background: scrolled ? "rgba(5,5,7,0.75)" : "transparent",
      }}
    >
      {/* Logo */}
      <Link
        href={"#"}
        className="font-syne font-extrabold text-[1.1rem] tracking-[-0.02em] duration-200"
        style={{ color: "var(--accent)" }}
      >
        KA
      </Link>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[11px] tracking-[0.14em] uppercase transition-colors duration-200"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted)")
              }
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="mailto:kartavya12.ka@gmail.com"
        className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-[11px] tracking-[0.12em] uppercase font-syne font-bold btn-clip transition-all duration-200 hover:-translate-y-0.5"
        style={{
          background: "var(--accent)",
          color: "#000",
        }}
      >
        Hire me
      </a>
    </nav>
  );
}
