"use client";

import { useEffect, useRef, useState } from "react";
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

interface PhysicalTag {
  text: string;
  className: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  angle: number;
  angularVelocity: number;
}

const TAG_TEMPLATES = [
  { text: "based in Surat ✺", className: "bg-wash text-rausch-active border border-[#fbd3db]" },
  { text: "design systems nerd", className: "bg-ink text-white" },
  { text: "Figma wizard ✦", className: "bg-sky-100 text-sky-900 border border-sky-200" },
  { text: "SaaS architect", className: "bg-emerald-100 text-emerald-900 border border-emerald-200" },
  { text: "pixel perfect", className: "bg-purple-100 text-purple-900 border border-purple-200" },
  { text: "React & Next.js", className: "bg-blue-100 text-blue-900 border border-blue-200" },
  { text: "UX researcher", className: "bg-amber-100 text-amber-900 border border-amber-200" },
  { text: "ERP expert ⚙", className: "bg-rose-100 text-rose-900 border border-rose-200" },
  { text: "interaction design", className: "bg-indigo-100 text-indigo-900 border border-indigo-200" },
  { text: "user centered 🎯", className: "bg-teal-100 text-teal-900 border border-teal-200" },
  { text: "toss me! ☄", className: "bg-[#ff385c] text-white shadow-float font-extrabold" },
  { text: "clean code", className: "bg-slate-100 text-slate-900 border border-slate-200" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tags, setTags] = useState<PhysicalTag[]>([]);
  const tagsRef = useRef<PhysicalTag[]>([]);
  const requestRef = useRef<number | null>(null);

  // Mouse & Touch Tracking State Ref
  const mouseRef = useRef({
    x: 0,
    y: 0,
    draggedIdx: -1,
    offsetLeft: 0,
    offsetTop: 0,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    // Get parent bounds
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width || 1200;
    const height = rect.height || 500;

    // Initial positioning: falling from top of container
    const initialTags = TAG_TEMPLATES.map((tpl, i) => {
      const tagWidth = Math.max(90, tpl.text.length * 7.5 + 28);
      const tagHeight = 36;
      
      // Horizontal spacing
      const spacing = width / (TAG_TEMPLATES.length + 1);
      
      return {
        text: tpl.text,
        className: tpl.className,
        x: spacing * (i + 1),
        y: -50 - i * 30, // Drop sequentially from above
        vx: (Math.random() - 0.5) * 6,
        vy: Math.random() * 3 + 2,
        width: tagWidth,
        height: tagHeight,
        angle: (Math.random() - 0.5) * 20,
        angularVelocity: (Math.random() - 0.5) * 2,
      };
    });

    tagsRef.current = initialTags;
    setTags([...initialTags]);

    // Setup events for drag tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseRef.current.draggedIdx === -1 || !containerRef.current) return;
      const cRect = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = e.clientX - cRect.left;
      mouseRef.current.y = e.clientY - cRect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (mouseRef.current.draggedIdx === -1 || !containerRef.current || !e.touches[0]) return;
      const cRect = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = e.touches[0].clientX - cRect.left;
      mouseRef.current.y = e.touches[0].clientY - cRect.top;
    };

    const handleMouseUp = () => {
      mouseRef.current.draggedIdx = -1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleMouseUp, { passive: true });

    // 2D Physics Animation Loop
    const gravity = 0.38;
    const airResistance = 0.985;
    const bounceElasticity = 0.45;
    const groundFriction = 0.95;

    const animate = () => {
      if (!containerRef.current) return;

      const cBounds = containerRef.current.getBoundingClientRect();
      const currentWidth = cBounds.width;
      const currentHeight = cBounds.height;

      const list = [...tagsRef.current];
      const dragged = mouseRef.current.draggedIdx;

      // Update positions & forces
      for (let i = 0; i < list.length; i++) {
        const item = list[i];

        if (i === dragged) {
          // If being dragged, calculate target based on cursor position
          const targetX = mouseRef.current.x - mouseRef.current.offsetLeft;
          const targetY = mouseRef.current.y - mouseRef.current.offsetTop;
          
          // Smooth springy drag velocity transfer
          item.vx = (targetX - item.x) * 0.28;
          item.vy = (targetY - item.y) * 0.28;
          item.x = targetX;
          item.y = targetY;
          
          // Angular velocity matches drag speed
          item.angularVelocity = item.vx * 0.6;
          item.angle += item.angularVelocity;
        } else {
          // Apply gravity
          item.vy += gravity;
          // Apply air friction
          item.vx *= airResistance;
          item.vy *= airResistance;
          item.angularVelocity *= 0.96;

          // Update position values
          item.x += item.vx;
          item.y += item.vy;
          item.angle += item.angularVelocity;
        }

        // Bouncing Boundaries Checks
        const halfW = item.width / 2;
        const halfH = item.height / 2;

        // Bottom border
        if (item.y > currentHeight - halfH) {
          item.y = currentHeight - halfH;
          item.vy = -item.vy * bounceElasticity;
          item.vx *= groundFriction;
          item.angularVelocity = -item.vx * 0.6;
        }
        // Top border
        if (item.y < halfH) {
          item.y = halfH;
          item.vy = -item.vy * bounceElasticity;
        }
        // Left border
        if (item.x < halfW) {
          item.x = halfW;
          item.vx = -item.vx * bounceElasticity;
        }
        // Right border
        if (item.x > currentWidth - halfW) {
          item.x = currentWidth - halfW;
          item.vx = -item.vx * bounceElasticity;
        }
      }

      // Handle simple physical circle overlaps between tags
      for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
          const tA = list[i];
          const tB = list[j];

          const dx = tB.x - tA.x;
          const dy = tB.y - tA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Combine radii + cushion
          const radiusA = tA.width / 2.1;
          const radiusB = tB.width / 2.1;
          const minDist = radiusA + radiusB;

          if (dist < minDist && dist > 0) {
            const overlap = minDist - dist;
            const nx = dx / dist;
            const ny = dy / dist;

            // Shift positions apart
            if (i === dragged) {
              tB.x += nx * overlap;
              tB.y += ny * overlap;
              tB.vx += nx * 0.5;
              tB.vy += ny * 0.5;
            } else if (j === dragged) {
              tA.x -= nx * overlap;
              tA.y -= ny * overlap;
              tA.vx -= nx * 0.5;
              tA.vy -= ny * 0.5;
            } else {
              // Mutual displacement
              tA.x -= nx * overlap * 0.5;
              tA.y -= ny * overlap * 0.5;
              tB.x += nx * overlap * 0.5;
              tB.y += ny * overlap * 0.5;

              // Elastic momentum transfer
              const kx = tA.vx - tB.vx;
              const ky = tA.vy - tB.vy;
              tA.vx -= kx * 0.35;
              tA.vy -= ky * 0.35;
              tB.vx += kx * 0.35;
              tB.vy += ky * 0.35;
            }
          }
        }
      }

      tagsRef.current = list;
      setTags(list);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  // Set drag state values
  const startDrag = (idx: number, clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mX = clientX - rect.left;
    const mY = clientY - rect.top;
    
    const item = tagsRef.current[idx];
    if (!item) return;

    mouseRef.current.draggedIdx = idx;
    mouseRef.current.x = mX;
    mouseRef.current.y = mY;
    mouseRef.current.offsetLeft = mX - item.x;
    mouseRef.current.offsetTop = mY - item.y;
  };

  return (
    <section id="top" ref={containerRef} className="relative overflow-hidden min-h-[480px] sm:min-h-[540px]">
      <div className="shell relative z-10 pb-10 pt-16 sm:pt-24 pointer-events-none">
        
        {/* availability + location */}
        <div className="flex flex-wrap items-center gap-3 pointer-events-auto">
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
        <h1 className="mt-7 font-display text-[clamp(3.4rem,13vw,11rem)] font-extrabold leading-[0.86] tracking-[-0.04em] text-ink select-none">
          Sunny
          <br />
          Singh
          <Sparkle className="ml-3 inline-block h-[0.42em] w-[0.42em] -translate-y-[0.5em] animate-floaty text-rausch" />
        </h1>

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <p className="max-w-xl text-lg leading-relaxed text-body sm:text-xl select-none">
            I design products people actually get. SaaS, ERP and e-commerce
            interfaces built on systems that scale, with the messy business
            logic quietly handled underneath.
          </p>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end pointer-events-auto">
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

      {/* Physics Simulated interactive tag element renderers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {tags.map((tag, idx) => (
          <div
            key={idx}
            onMouseDown={(e) => startDrag(idx, e.clientX, e.clientY)}
            onTouchStart={(e) => {
              if (e.touches[0]) {
                startDrag(idx, e.touches[0].clientX, e.touches[0].clientY);
              }
            }}
            style={{
              position: "absolute",
              left: tag.x - tag.width / 2,
              top: tag.y - tag.height / 2,
              width: tag.width,
              height: tag.height,
              transform: `rotate(${tag.angle}deg)`,
              transformOrigin: "center center",
              userSelect: "none",
            }}
            className={`absolute pointer-events-auto cursor-grab active:cursor-grabbing rounded-full px-4 py-2 text-xs sm:text-sm font-bold shadow-float select-none flex items-center justify-center whitespace-nowrap transition-shadow hover:shadow-md ${tag.className}`}
          >
            {tag.text}
          </div>
        ))}
      </div>
    </section>
  );
}
