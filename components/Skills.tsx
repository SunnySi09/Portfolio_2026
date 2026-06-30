import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section className="shell py-20 sm:py-28">
      <Reveal>
        <span className="eyebrow">Toolbox</span>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          What I work with.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 80}
            className="border-t border-hairline pt-6"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
