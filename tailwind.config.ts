import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand voltage and surfaces lifted from the Airbnb design doc
        rausch: "#ff385c",
        "rausch-active": "#e00b41",
        wash: "#ffd1da",
        plum: "#460479",
        ink: "#222222",
        body: "#3f3f3f",
        muted: "#6a6a6a",
        "muted-soft": "#929292",
        hairline: "#dddddd",
        "hairline-soft": "#ebebeb",
        canvas: "#ffffff",
        soft: "#f7f7f7",
        strong: "#f2f2f2",
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "20px",
        xl: "32px",
      },
      boxShadow: {
        // The single elevation tier from the system
        float:
          "rgba(0,0,0,0.02) 0 0 0 1px, rgba(0,0,0,0.04) 0 2px 6px 0, rgba(0,0,0,0.1) 0 4px 8px 0",
        lift:
          "rgba(0,0,0,0.03) 0 0 0 1px, rgba(0,0,0,0.06) 0 10px 24px 0, rgba(0,0,0,0.12) 0 18px 40px -8px",
      },
      maxWidth: {
        shell: "1200px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-10px) rotate(-2deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulsedot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.7)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        "marquee-slow": "marquee 40s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        pulsedot: "pulsedot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
