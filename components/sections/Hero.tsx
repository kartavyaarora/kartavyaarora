"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { personal, stats } from "@/lib/data";
import Link from "next/link";

const HERO_WORDS = ["Full Stack", "Developer", "Kartavya."];

function HeroWord({ text, delay, accent }: { text: string; delay: number; accent?: boolean }) {
  return (
    <span className="line block overflow-hidden">
      <motion.span
        className="block"
        style={accent ? { color: "var(--accent)" } : {}}
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}

function TiltCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform =
        "perspective(700px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="w-full col-span-2"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden p-10 transition-transform duration-200"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Radial glow inside card */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(200,240,78,0.07) 0%, transparent 70%)",
          }}
        />

        <p
          className="text-[11px] tracking-[0.2em] uppercase mb-8"
          style={{ color: "var(--muted)" }}
        >
          // at a glance
        </p>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="font-syne font-extrabold text-[2.2rem] leading-none tracking-[-0.04em]"
                style={{ color: "var(--accent)" }}
              >
                {s.num}
              </div>
              <div
                className="text-[11px] tracking-[0.08em] mt-1"
                style={{ color: "var(--muted)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {["Next.js", "Django", "TypeScript", "PostgreSQL", "Redis", "Docker"].map(
            (tech) => (
              <span
                key={tech}
                className="text-[10px] tracking-[0.1em] uppercase px-3 py-1.5 transition-colors duration-200"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                }}
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-8 md:px-12 pt-32 pb-16 overflow-hidden"
    >
      {/* Glow blobs */}
      <div
        className="blob-float absolute rounded-full pointer-events-none"
        style={{
          width: 420,
          height: 420,
          background: "rgba(200,240,78,0.04)",
          filter: "blur(80px)",
          top: "10%",
          right: "-8%",
        }}
      />
      <div
        className="blob-float-delayed absolute rounded-full pointer-events-none"
        style={{
          width: 300,
          height: 300,
          background: "rgba(94,255,216,0.04)",
          filter: "blur(80px)",
          bottom: "10%",
          left: "3%",
        }}
      />

      <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
        {/* Left */}
        <div className="col-span-3">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--accent2)" }}
            />
            <span
              className="text-[11px] tracking-[0.2em] uppercase"
              style={{ color: "var(--accent2)" }}
            >
              Available for opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            className="font-syne font-extrabold leading-[0.93] tracking-[-0.04em] mb-7"
            style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
          >
            <HeroWord text="Full Stack" delay={0.15} />
            <HeroWord text="Developer" delay={0.25} />
            <HeroWord text="Kartavya." delay={0.35} accent />
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] leading-[1.85] mb-10 max-w-[440px]"
            style={{ color: "var(--muted)" }}
          >
            {personal.tagline} Currently at{" "}
            <span style={{ color: "var(--text)" }}>SATnPaper</span>, previously{" "}
            <span style={{ color: "var(--text)" }}>Leadzen.ai</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-syne font-bold text-[13px] tracking-[0.05em] uppercase btn-clip transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "var(--accent)",
                color: "#000",
                boxShadow: "0 0 0 rgba(200,240,78,0)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow =
                  "0 14px 40px rgba(200,240,78,0.3)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 0 rgba(200,240,78,0)")
              }
            >
              Get in touch ↗
            </Link>
            <Link
              href="#experience"
              className="inline-flex items-center gap-2 px-8 py-4 font-syne font-bold text-[13px] tracking-[0.05em] uppercase transition-all duration-200 hover:-translate-y-1"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--accent2)";
                el.style.color = "var(--accent2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text)";
              }}
            >
              View work
            </Link>
          </motion.div>
        </div>

        {/* Right — Tilt card */}
        <TiltCard />
      </div>
    </section>
  );
}
