import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-hairline bg-soft">
      <div className="shell py-20 sm:py-28">
        <Reveal>
          <span className="eyebrow">The path so far</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Experience.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col">
          {experience.map((job, i) => (
            <Reveal
              key={job.company}
              delay={i * 70}
              className="group grid gap-5 border-t border-hairline py-9 lg:grid-cols-[0.9fr_1.6fr] lg:gap-12"
            >
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                    {job.company}
                  </h3>
                  <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-muted">
                    {job.mode}
                  </span>
                </div>
                <p className="mt-1 text-base font-semibold text-rausch">
                  {job.role}
                </p>
                <p className="mt-1 text-sm text-muted">{job.period}</p>
              </div>

              <ul className="flex flex-col gap-3">
                {job.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-body">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rausch" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
          <div className="border-t border-hairline" />
        </div>
      </div>
    </section>
  );
}
