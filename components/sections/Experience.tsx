"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="px-8 md:px-12 py-28 max-w-[1300px] mx-auto"
    >
      <SectionHeader num="01 — Experience" heading={<>Where I've<br />built things</>} />

      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.1}>
            <div
              className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 cursor-default"
              style={{ borderBottom: "1px solid var(--border)" }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Hover bg glow */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "rgba(200,240,78,0.02)",
                  marginLeft: "-3rem",
                  marginRight: "-3rem",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Meta */}
              <div className="relative z-10">
                <div
                  className="font-syne font-bold text-[15px] mb-1"
                  style={{ color: "var(--accent)" }}
                >
                  {exp.company}
                </div>
                <div
                  className="text-[11px] tracking-[0.08em] mb-1"
                  style={{ color: "var(--muted)" }}
                >
                  {exp.period}
                </div>
                <div
                  className="text-[11px]"
                  style={{ color: "var(--muted)" }}
                >
                  {exp.location}
                </div>

                {/* Stack chips */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[9px] tracking-[0.1em] uppercase px-2 py-1"
                      style={{
                        border: "1px solid var(--border)",
                        color: "var(--muted)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div
                  className="font-syne font-bold text-[1.3rem] tracking-[-0.025em] mb-5"
                  style={{ color: "var(--text)" }}
                >
                  {exp.role}
                </div>
                <ul className="flex flex-col gap-3">
                  {exp.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="relative pl-5 text-[13px] leading-[1.75]"
                      style={{ color: "var(--muted)" }}
                    >
                      <span
                        className="absolute left-0 top-0 text-[12px]"
                        style={{ color: "var(--accent2)" }}
                      >
                        →
                      </span>
                      <span
                        dangerouslySetInnerHTML={{ __html: b }}
                        style={{ color: "var(--muted)" }}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Index number — large ghost */}
              <motion.span
                className="absolute right-0 bottom-4 font-syne font-extrabold select-none pointer-events-none"
                style={{
                  fontSize: "4rem",
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.03)",
                  letterSpacing: "-0.05em",
                }}
                animate={{ opacity: active === i ? 1 : 0.4 }}
              >
                0{i + 1}
              </motion.span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
