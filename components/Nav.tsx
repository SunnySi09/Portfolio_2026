"use client";

import { useState } from "react";
import { nav, profile } from "@/lib/data";
import Link from "next/link";

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

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/85 backdrop-blur-md">
      <nav className="shell flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-rausch">
            <Sparkle className="h-3.5 w-3.5" />
          </span>
          <span className="text-[17px] font-extrabold tracking-tight">
            sunny
            <span className="text-rausch">°</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-semibold text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-rausch px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rausch-active sm:inline-flex"
          >
            Hire me
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink md:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-ink transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-ink transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-ink transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-white md:hidden">
          <div className="shell flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline-soft py-3 text-lg font-semibold text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex h-12 items-center justify-center rounded-sm bg-rausch font-medium text-white"
            >
              Email me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
