"use client";

import { useEffect, useRef } from "react";

// A soft Rausch glow that trails the cursor inside the hero.
// This is the page's one ambient motion flourish. It is purely decorative,
// pointer-events-none, and skips itself on touch or reduced-motion setups.
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight * 0.35;
    let cx = tx;
    let cy = ty;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    el.style.opacity = "1";

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[420px] w-[420px] rounded-full opacity-0 blur-[90px] transition-opacity duration-700"
      style={{
        background:
          "radial-gradient(circle, rgba(255,56,92,0.30) 0%, rgba(255,56,92,0.10) 45%, rgba(255,56,92,0) 70%)",
      }}
    />
  );
}
