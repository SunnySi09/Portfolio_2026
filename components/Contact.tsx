import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="shell pb-20 pt-4 sm:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-xl bg-ink px-7 py-16 sm:px-14 sm:py-24">
          {/* ambient coral wash inside the dark panel */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-rausch/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-rausch/20 blur-[90px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-rausch">
              <span className="h-2 w-2 rounded-full bg-rausch" />
              {profile.availability}
            </span>

            <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em] text-white">
              Let&apos;s build something
              <span className="text-rausch"> people love.</span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Got a product that needs sharper UX or a design system that
              scales? I reply fast and I love a good brief.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-rausch px-7 text-[16px] font-medium text-white transition-colors hover:bg-rausch-active"
              >
                {profile.email}
                <span aria-hidden>→</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-white/25 px-7 text-[16px] font-medium text-white transition-colors hover:bg-white hover:text-ink"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/50">
              <span>{profile.location}</span>
              <span>{profile.phone}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
