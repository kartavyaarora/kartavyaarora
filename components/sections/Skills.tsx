"use client";

import { skillGroups } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-8 md:px-12 py-28 max-w-[1300px] mx-auto"
    >
      <SectionHeader num="02 — Skills" heading={<>Tools of<br />the trade</>} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <div
              className="group relative overflow-hidden p-8 transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(200,240,78,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
              }}
            >
              {/* Gradient bar that reveals on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent), var(--accent2))",
                }}
              />

              {/* Top glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, rgba(200,240,78,0.05), transparent 70%)",
                }}
              />

              <div className="text-2xl mb-5">{group.icon}</div>

              <div
                className="font-syne font-bold text-[13px] tracking-[0.06em] uppercase mb-5"
                style={{ color: "var(--text)" }}
              >
                {group.title}
              </div>

              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.08em] uppercase px-2.5 py-1.5 transition-colors duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      color: "var(--muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
