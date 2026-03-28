export default function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row items-center justify-between px-8 md:px-12 py-6 gap-3"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <span
        className="text-[11px] tracking-[0.1em]"
        style={{ color: "var(--muted)" }}
      >
        © {new Date().getFullYear()} Kartavya Arora
      </span>
      <span
        className="text-[11px] tracking-[0.1em]"
        style={{ color: "var(--muted)" }}
      >
        Built with Next.js · Framer Motion · Tailwind CSS
      </span>
      <span
        className="text-[11px] tracking-[0.1em]"
        style={{ color: "var(--muted)" }}
      >
        Jalandhar, Punjab 🇮🇳
      </span>
    </footer>
  );
}
