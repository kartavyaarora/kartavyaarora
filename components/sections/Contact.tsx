"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const contactLinks = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: personal.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "See the code",
    href: personal.github,
    external: true,
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
];

function ContactLink({
  label,
  value,
  href,
  external,
  index,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.08}>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group flex items-center justify-between px-7 py-5 transition-all duration-200"
        style={{ border: "1px solid var(--border)" }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "var(--accent)";
          el.style.background = "rgba(200,240,78,0.03)";
          el.style.transform = "translateX(6px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "var(--border)";
          el.style.background = "transparent";
          el.style.transform = "translateX(0)";
        }}
      >
        <div>
          <div
            className="font-syne font-bold text-[15px]"
            style={{ color: "var(--text)" }}
          >
            {label}
          </div>
          <div
            className="text-[12px] mt-0.5"
            style={{ color: "var(--muted)" }}
          >
            {value}
          </div>
        </div>
        <span
          className="text-xl transition-transform duration-200 group-hover:translate-x-1"
          style={{ color: "var(--accent)" }}
        >
          →
        </span>
      </a>
    </Reveal>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-8 md:px-12 py-28 max-w-[1300px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
        {/* Left */}
        <div>
          <Reveal>
            <span
              className="block text-[11px] tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              04 — Contact
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-syne font-extrabold tracking-[-0.04em] leading-[0.93] mb-7"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Let's build
              <br />
              something
              <br />
              <span style={{ color: "var(--accent)" }}>great.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="text-[14px] leading-[1.85] max-w-[400px]"
              style={{ color: "var(--muted)" }}
            >
              Open to full-time roles, freelance projects, and interesting
              collaborations. Based in{" "}
              <span style={{ color: "var(--text)" }}>Jalandhar, Punjab</span> —
              available remotely worldwide.
            </p>
          </Reveal>
        </div>

        {/* Right — Link rows */}
        <div className="flex flex-col gap-3">
          {contactLinks.map((cl, i) => (
            <ContactLink key={cl.label} {...cl} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
