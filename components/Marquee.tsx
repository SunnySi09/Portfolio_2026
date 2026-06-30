import { marquee } from "@/lib/data";

function Row({
  items,
  reverse = false,
  slow = false,
}: {
  items: string[];
  reverse?: boolean;
  slow?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask flex overflow-hidden">
      <div
        className={`flex shrink-0 items-center gap-4 pr-4 ${
          slow ? "animate-marquee-slow" : "animate-marquee"
        }`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4">
            <span className="whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {item}
            </span>
            <span className="text-rausch" aria-hidden>
              ✺
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  const half = Math.ceil(marquee.length / 2);
  return (
    <section
      aria-label="Tools and skills"
      className="border-y border-hairline bg-soft py-7"
    >
      <div className="flex flex-col gap-3">
        <Row items={marquee.slice(0, half)} />
        <Row items={marquee.slice(half)} reverse slow />
      </div>
    </section>
  );
}
