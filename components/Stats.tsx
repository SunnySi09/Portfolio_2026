import { stats } from "@/lib/data";
import Reveal from "./Reveal";

function Laurel({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 48"
      className={`h-12 w-6 text-ink ${flip ? "scale-x-[-1]" : ""}`}
      fill="none"
      aria-hidden
    >
      <path
        d="M20 2C10 8 6 18 8 28c1 5 4 10 9 16M20 8c-7 2-10 8-10 14M19 16c-6 1-8 5-8 10M18 24c-4 1-6 4-6 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-hairline bg-white">
      <div className="shell py-20 sm:py-24">
        <Reveal>
          <span className="eyebrow">By the numbers</span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Receipts, not vibes.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <div className="flex items-center justify-center">
                <Laurel />
                <span className="font-display text-[64px] font-bold leading-[1.1] tracking-[-1px] text-ink">
                  {s.value}
                </span>
                <Laurel flip />
              </div>
              <p className="mt-1 font-display text-lg font-bold text-rausch">
                {s.label}
              </p>
              <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-snug text-muted">
                {s.note}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
