import { profile } from "@/lib/data";

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 0c.7 5.6 5.7 10.6 11.3 11.3v1.4C17.7 13.4 12.7 18.4 12 24c-.7-5.6-5.7-10.6-11.3-11.3v-1.4C6.3 10.6 11.3 5.6 12 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="shell relative z-10 pb-10 pt-16 sm:pt-24">
        {/* availability + location */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-3.5 py-1.5 text-sm font-medium text-ink shadow-float">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulsedot rounded-full bg-rausch" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rausch" />
            </span>
            {profile.availability}
          </span>
          <span className="eyebrow">
            {profile.role} · {profile.location}
          </span>
        </div>

        {/* the loud moment */}
        <h1 className="mt-7 font-display text-[clamp(3.4rem,13vw,11rem)] font-extrabold leading-[0.86] tracking-[-0.04em] text-ink">
          Sunny
          <br />
          Singh
          <Sparkle className="ml-3 inline-block h-[0.42em] w-[0.42em] -translate-y-[0.5em] animate-floaty text-rausch" />
        </h1>

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <p className="max-w-xl text-lg leading-relaxed text-body sm:text-xl">
            I design products people actually get. SaaS, ERP and e-commerce
            interfaces built on systems that scale, with the messy business
            logic quietly handled underneath.
          </p>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <a href="#work" className="btn-primary">
              See the work
              <span aria-hidden>↓</span>
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              Email me
            </a>
          </div>
        </div>
      </div>

      {/* rotated sticker badges, the gen-z flourish */}
      <span className="pointer-events-none absolute right-6 top-28 hidden rotate-6 rounded-full bg-wash px-4 py-2 text-sm font-bold text-rausch-active shadow-float lg:block">
        based in Surat ✺
      </span>
      <span className="pointer-events-none absolute right-24 top-[58%] hidden -rotate-6 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white shadow-float xl:block">
        design systems nerd
      </span>
    </section>
  );
}
