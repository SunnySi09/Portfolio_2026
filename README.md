# Sunny Singh — Portfolio

A single-page portfolio for product designer Sunny Singh. Built with Next.js (App Router) and TypeScript. The brand foundation (coral voltage `#ff385c`, ink-on-white canvas, soft pill shapes, single shadow tier, modest body type with one loud display moment) is lifted from the Airbnb design system doc and pushed into a bolder, gen-z direction.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

Build for production:

```bash
npm run build
npm start
```

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3 with brand tokens in `tailwind.config.ts`
- Fonts are self-hosted in `app/fonts` (Bricolage Grotesque for display, Inter for body). No external font request at build or runtime.

## Structure

```
app/
  layout.tsx        fonts + metadata
  page.tsx          section composition
  globals.css       base styles, chips, buttons, marquee mask, reduced-motion
  fonts/            self-hosted woff2 files
components/         one file per section + Reveal + CursorGlow
lib/data.ts         ALL copy and content lives here
```

## Where the content comes from

Every fact on the page is taken from the resume. Nothing was invented. All copy lives in `lib/data.ts`, so editing text never means touching components.

## Things to fill in (left blank on purpose, not guessed)

These were referenced on the resume but no value was provided, so they are empty placeholders rather than made-up data. Search `lib/data.ts` for `TODO`:

1. `profile.portfolio` — the resume lists a "Portfolio" link with no URL.
2. `projects[].href` for **Tatva Krti** and **Industrial Websites** — both are marked "Live Site" on the resume but no URL was given. Until a URL is added, the card shows a "Live" badge but is not clickable.
3. Real project images. There were no screenshots, so each project uses a designed graphic tile. To use real shots instead, drop images in `public/` and replace the `Tile` component in `components/Work.tsx`.
4. A profile photo. `components/About.tsx` has a graphic placeholder reading "add your photo here".

## Accessibility and polish

- Responsive from mobile up.
- `prefers-reduced-motion` disables the marquee, cursor glow, and reveals.
- Visible focus on interactive elements (browser default kept intact).
- Coral selection and scrollbar carry the brand voltage throughout.
