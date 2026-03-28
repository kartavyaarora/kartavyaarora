import Reveal from "./Reveal";

interface SectionHeaderProps {
  num: string;
  heading: React.ReactNode;
}

export default function SectionHeader({ num, heading }: SectionHeaderProps) {
  return (
    <div className="mb-16">
      <Reveal>
        <span
          className="block text-[11px] tracking-[0.25em] uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          {num}
        </span>
        <h2
          className="font-syne font-extrabold leading-[0.95] tracking-[-0.04em]"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {heading}
        </h2>
      </Reveal>
    </div>
  );
}
