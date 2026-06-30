import { nav, profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline bg-white">
      <div className="shell flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="font-display text-2xl font-extrabold tracking-tight text-ink">
          sunny<span className="text-rausch">°</span>
        </a>

        <div className="flex flex-wrap gap-x-7 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-muted transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-hairline-soft">
        <div className="shell flex flex-col gap-2 py-5 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {profile.name}. Designed and built with care.
          </span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
