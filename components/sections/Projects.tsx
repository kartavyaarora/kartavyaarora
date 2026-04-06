"use client";

import { projects } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

function NewsAggregatorVisual() {
  return (
    <div className="flex flex-col gap-4 h-full min-h-[300px]">
      {/* Pipeline Flow */}
      <div
        className="flex-1 flex flex-col gap-3 p-5 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid var(--border)",
        }}
      >
        <span
          className="text-[10px] tracking-[0.1em]"
          style={{ color: "var(--muted)" }}
        >
          DAILY PIPELINE
        </span>

        {/* Pipeline stages */}
        {[
          {
            stage: "SCRAPE",
            icon: "🔍",
            text: "YouTube + RSS Feeds",
            accent: "var(--accent)",
          },
          {
            stage: "PROCESS",
            icon: "⚙️",
            text: "Markdown + Transcripts",
            accent: "var(--accent2)",
          },
          {
            stage: "CURATE",
            icon: "🤖",
            text: "LLM Ranking by Relevance",
            accent: "var(--accent)",
          },
          {
            stage: "DELIVER",
            icon: "📧",
            text: "Personalized Email Digest",
            accent: "var(--accent2)",
          },
        ].map((item, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div
              className="flex items-center gap-3 p-4 rounded-sm relative overflow-hidden"
              style={{
                background:
                  i % 2 === 0
                    ? "rgba(200,240,78,0.08)"
                    : "rgba(94,255,216,0.08)",
                border: `1px solid ${item.accent}`,
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, transparent 40%, ${item.accent}15 100%)`,
                }}
              />

              <span className="text-lg">{item.icon}</span>
              <div className="flex-1">
                <div
                  className="text-[10px] tracking-[0.12em] font-semibold mb-0.5"
                  style={{ color: item.accent }}
                >
                  {item.stage}
                </div>
                <div
                  className="text-[11px] leading-[1.5]"
                  style={{ color: "var(--text)" }}
                >
                  {item.text}
                </div>
              </div>

              {/* Arrow to next stage */}
              {i < 3 && (
                <span
                  className="text-[10px] absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                  style={{ color: "var(--muted)" }}
                >
                  ↓
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div
        className="flex items-center justify-around px-5 py-4"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid var(--border)",
        }}
      >
        {[
          { icon: "📰", label: "Multi-Source", value: "3+" },
          { icon: "⏱️", label: "Automated", value: "Daily" },
          { icon: "🎯", label: "Personalized", value: "100%" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-base">{stat.icon}</span>
            <div
              className="font-syne font-bold text-sm"
              style={{ color: "var(--accent)" }}
            >
              {stat.value}
            </div>
            <div
              className="text-[9px] tracking-[0.08em]"
              style={{ color: "var(--muted)" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Loading indicator */}
      <div
        className="relative h-1 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.05)",
        }}
      >
        <div
          className="load-bar absolute inset-y-0 left-0 h-full"
          style={{
            background: "linear-gradient(90deg, var(--accent), var(--accent2))",
            width: "75%",
          }}
        />
      </div>
    </div>
  );
}

function ProjectVisual() {
  return (
    <div className="flex flex-col gap-4 h-full min-h-[300px]">
      {/* Waveform bar */}
      <div
        className="relative flex-1 flex items-center justify-center overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid var(--border)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, rgba(200,240,78,0.04) 100%)",
          }}
        />

        {/* Fake waveform bars */}
        <div className="flex items-end gap-1 h-16 px-6 w-full">
          {[
            4, 8, 14, 6, 12, 18, 10, 7, 16, 9, 13, 5, 11, 15, 8, 12, 6, 14, 10,
            7,
          ].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm transition-all duration-300"
              style={{
                height: `${h * 4}px`,
                background:
                  i % 3 === 0
                    ? "var(--accent)"
                    : i % 3 === 1
                      ? "var(--accent2)"
                      : "rgba(255,255,255,0.12)",
                opacity: 0.7 + (i % 4) * 0.08,
              }}
            />
          ))}
        </div>
        <div
          className="load-bar absolute bottom-0 left-0 h-[2px]"
          style={{
            background: "linear-gradient(90deg, var(--accent), var(--accent2))",
          }}
        />
      </div>

      {/* Player controls mockup */}
      <div
        className="flex-none flex items-center gap-6 px-6 py-5"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid var(--border)",
        }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
          style={{ border: "2px solid var(--accent)" }}
        >
          <span style={{ color: "var(--accent)", fontSize: 14 }}>▶</span>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div
            className="h-1 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <div
              className="h-full rounded-full"
              style={{ width: "58%", background: "var(--accent)" }}
            />
          </div>
          <div className="flex justify-between">
            {["1:24", "2:38"].map((t) => (
              <span
                key={t}
                className="text-[10px] tracking-[0.1em]"
                style={{ color: "var(--muted)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          {["♡", "⊞"].map((ic) => (
            <span
              key={ic}
              className="text-sm"
              style={{ color: "var(--muted)" }}
            >
              {ic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
function RAGBotVisual() {
  return (
    <div className="flex flex-col gap-4 h-full min-h-[300px]">
      {/* Query Box */}
      <div
        className="px-5 py-4 text-sm"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid var(--border)",
          color: "var(--text)",
        }}
      >
        <span style={{ color: "var(--muted)", fontSize: 11 }}>USER QUERY</span>
        <div className="mt-1">How does refund policy work?</div>
      </div>

      {/* Retrieval Section */}
      <div
        className="flex-1 flex flex-col gap-3 p-4 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid var(--border)",
        }}
      >
        <span
          className="text-[10px] tracking-[0.1em]"
          style={{ color: "var(--muted)" }}
        >
          RETRIEVED CONTEXT
        </span>

        {/* Fake chunks */}
        {[
          "Refunds are processed within 5-7 business days...",
          "Users are eligible if cancellation is within 24 hours...",
          "Partial refunds may apply based on usage...",
        ].map((chunk, i) => (
          <div
            key={i}
            className="text-[11px] leading-[1.6] p-3 rounded-sm"
            style={{
              background:
                i === 0 ? "rgba(200,240,78,0.08)" : "rgba(255,255,255,0.04)",
              border:
                i === 0 ? "1px solid var(--accent)" : "1px solid transparent",
              color: "var(--muted)",
            }}
          >
            {chunk}
          </div>
        ))}
      </div>

      {/* Answer Box */}
      <div
        className="px-5 py-4 text-sm relative overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid var(--border)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, rgba(94,255,216,0.06) 100%)",
          }}
        />

        <span
          className="text-[10px] tracking-[0.1em]"
          style={{ color: "var(--muted)" }}
        >
          AI ANSWER
        </span>

        <div className="mt-1 text-[12px] leading-[1.7] text-[var(--text)]">
          Refunds are processed within 5–7 business days. Users are eligible if
          cancellation occurs within 24 hours. Partial refunds may apply
          depending on usage.
        </div>

        {/* bottom loading bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-[60%]"
          style={{
            background: "linear-gradient(90deg, var(--accent), var(--accent2))",
          }}
        />
      </div>
    </div>
  );
}
export default function Projects() {
  return (
    <section
      id="projects"
      className="px-8 md:px-12 py-28 max-w-[1300px] mx-auto"
    >
      <SectionHeader
        num="03 — Projects"
        heading={
          <>
            Things I've
            <br />
            shipped
          </>
        }
      />

      <div className="flex flex-col gap-8">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1}>
            <div
              className="relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              {/* BG accent */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at bottom left, rgba(94,255,216,0.04) 0%, transparent 60%)",
                }}
              />

              {/* Left — info */}
              <div className="relative z-10 flex flex-col justify-center">
                <div
                  className="font-syne font-extrabold leading-none tracking-[-0.06em] mb-2 select-none"
                  style={{
                    fontSize: "5rem",
                    color: "rgba(255,255,255,0.04)",
                  }}
                >
                  {project.num}
                </div>

                <h3
                  className="font-syne font-extrabold tracking-[-0.03em] leading-[1.05] mb-4 mt-[-1.5rem]"
                  style={{
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    color: "var(--text)",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-[13.5px] leading-[1.85] mb-6"
                  style={{ color: "var(--muted)" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-[0.12em] uppercase px-3 py-1.5"
                      style={{
                        border: "1px solid rgba(94,255,216,0.3)",
                        color: "var(--accent2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {project.stats.map((s) => (
                    <div key={s.label}>
                      <div
                        className="font-syne font-extrabold tracking-[-0.03em]"
                        style={{
                          fontSize: "1.3rem",
                          color: "var(--accent)",
                        }}
                      >
                        {s.num}
                      </div>
                      <div
                        className="text-[10px] tracking-[0.08em] mt-1"
                        style={{ color: "var(--muted)" }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="flex flex-col gap-2 mb-8">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-[12px] leading-[1.7] pl-4 relative"
                      style={{ color: "var(--muted)" }}
                    >
                      <span
                        className="absolute left-0"
                        style={{ color: "var(--accent)" }}
                      >
                        ·
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] tracking-[0.12em] uppercase px-5 py-3 font-syne font-bold transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "var(--accent)";
                      el.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "var(--border)";
                      el.style.color = "var(--text)";
                    }}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              {/* Right — visual */}
              <div className="relative z-10 hidden lg:block">
                {project.title === "Q&A Support Bot" ? (
                  <RAGBotVisual />
                ) : project.title === "AI News Aggregator" ? (
                  <NewsAggregatorVisual />
                ) : (
                  <ProjectVisual />
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
