import { projects, type Project } from "@/lib/data";
import Reveal from "./Reveal";
import Link from "next/link";

const tile: Record<
  Project["accent"],
  { bg: string; mark: string; ring: string }
> = {
  rausch: { bg: "bg-rausch", mark: "text-white", ring: "bg-white/15" },
  ink: { bg: "bg-ink", mark: "text-rausch", ring: "bg-white/10" },
  wash: { bg: "bg-wash", mark: "text-rausch-active", ring: "bg-white/40" },
  plum: { bg: "bg-plum", mark: "text-wash", ring: "bg-white/10" },
};

function Tile({ project }: { project: Project }) {
  const t = tile[project.accent];
  const initial = project.title.charAt(0);
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-md ${t.bg}`}
    >
      {/* abstract geometry so the tile reads as designed, not empty */}
      <div
        className={`absolute -right-10 -top-10 h-40 w-40 rounded-full ${t.ring}`}
      />
      <div
        className={`absolute -bottom-12 -left-8 h-44 w-44 rounded-full ${t.ring}`}
      />
      <span
        className={`absolute right-5 top-4 text-2xl ${t.mark}`}
        aria-hidden
      >
        ✺
      </span>
      <span
        className={`absolute bottom-3 left-6 font-display text-[8rem] font-extrabold leading-none ${t.mark}`}
        aria-hidden
      >
        {initial}
      </span>
    </div>
  );
}

function Card({ project }: { project: Project }) {
  const inner = (
    <>
      <Tile project={project} />
      <div className="mt-5">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
            {project.tag}
          </span>
          {project.live && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-rausch" />
              Live
            </span>
          )}
        </div>
        <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-body">
          {project.blurb}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-hairline px-3 py-1 text-xs font-medium text-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const shell =
    "group block rounded-lg bg-white p-3 transition-shadow duration-300 hover:shadow-lift";

  // Only render a link when a real URL exists. Use Next.js Link for local routes.
  if (project.href) {
    if (project.href.startsWith("/")) {
      return (
        <Link href={project.href} className={shell}>
          {inner}
        </Link>
      );
    }
    return (
      <a href={project.href} target="_blank" rel="noreferrer" className={shell}>
        {inner}
      </a>
    );
  }
  return <article className={shell}>{inner}</article>;
}

export default function Work() {
  return (
    <section id="work" className="shell py-20 sm:py-28">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="eyebrow">Selected work</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Stuff I&apos;ve shipped.
          </h2>
        </div>
        <p className="max-w-sm text-base text-muted">
          Four products across ERP, e-commerce and B2B web. Tap through for the
          full story.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 90} as="div">
            <Card project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
