import type { Config } from "tailwindcss";

/* Tema escuro CPPEM. Os nomes de cor do Tailwind (gray, green, red…) são
   REMAPEADOS para o novo tema, então as classes existentes nos componentes
   continuam valendo — só a aparência muda:
   - gray  : escala invertida (50 = painel interno … 900 = texto principal)
   - cores semânticas (green, red, blue…): 50–300 viram fundos/bordas escuros
     já misturados com a superfície; 600–900 viram textos claros. */

const SURFACE = "#111115";

function hex(n: number) {
  return Math.round(n).toString(16).padStart(2, "0");
}
function mix(a: string, b: string, t: number) {
  const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
  const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
  return "#" + pa.map((v, i) => hex(v + (pb[i] - v) * t)).join("");
}
function scale(base: string) {
  return {
    50: mix(SURFACE, base, 0.1),
    100: mix(SURFACE, base, 0.17),
    200: mix(SURFACE, base, 0.3),
    300: mix(SURFACE, base, 0.46),
    400: mix(base, "#ffffff", 0.12),
    500: base,
    600: mix(base, "#ffffff", 0.2),
    700: mix(base, "#ffffff", 0.38),
    800: mix(base, "#ffffff", 0.52),
    900: mix(base, "#ffffff", 0.68),
  };
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#AF9256",
          pale: "#F0DCB0",
          light: "#C9AE7A",
          dark: "#8A7040",
        },
        ink: {
          950: "#0A0A0B",
          900: "#111115",
          800: "#18181E",
          700: "#1F1F28",
        },
        gray: {
          50: "#16161b",
          100: "#1c1c23",
          200: "#2a2822",
          300: "#3b372d",
          400: "#6c685d",
          500: "#8a8678",
          600: "#a8a495",
          700: "#c4c0b3",
          800: "#e2ded2",
          900: "#f3efe4",
        },
        green: scale("#5BA87B"),
        emerald: scale("#4FB08C"),
        red: scale("#DC6060"),
        rose: scale("#D9728F"),
        blue: scale("#5B8AF0"),
        sky: scale("#5BA8D6"),
        indigo: scale("#7C83E8"),
        purple: scale("#A07BF0"),
        amber: scale("#E0A84A"),
        orange: scale("#E8875A"),
        yellow: scale("#E3C04A"),
        pink: scale("#E07AB0"),
        teal: scale("#4FB0A8"),
        cyan: scale("#5BB8D0"),
        lime: scale("#9BC85A"),
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        ui: ["var(--font-ui)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
