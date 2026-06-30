import { profile, education } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="shell py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Graphic portrait placeholder. Swap for a real photo when ready. */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rotate-3 rounded-xl bg-wash" />
            <div className="absolute inset-0 -rotate-2 overflow-hidden rounded-xl bg-ink">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
                <span className="font-display text-[7rem] font-extrabold leading-none text-rausch">
                  S
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                  add your photo here
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={80}>
          <span className="eyebrow">About</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            A designer who likes the hard,
            <span className="text-rausch"> unglamorous</span> problems.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
            {profile.intro}
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-body">
            Lately that means leading design on a B2B diamond commerce platform,
            shaping ERP modules, running usability sessions, and keeping a
            consistent system across every screen so the build team never has to
            guess.
          </p>

          <div className="mt-8 inline-flex flex-col gap-1 rounded-md border border-hairline bg-soft px-5 py-4">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
              Education
            </span>
            <span className="font-display text-lg font-bold text-ink">
              {education.degree}
            </span>
            <span className="text-sm text-muted">
              {education.school} · {education.period} · {education.detail}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
