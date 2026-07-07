import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0c1424",
        navy: "#071a38",
        bluebrand: "#08256b",
        gold: "#c3aa71",
        champagne: "#f3ead8",
        cloud: "#f5f7fb",
        mist: "#e8edf5",
        teal: "#2fb7a5",
      },
      boxShadow: {
        glass: "0 24px 70px rgba(5, 18, 42, 0.18)",
        soft: "0 18px 45px rgba(8, 37, 107, 0.12)",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(circle at 18% 18%, rgba(195, 170, 113, 0.26), transparent 26%), radial-gradient(circle at 78% 12%, rgba(47, 183, 165, 0.16), transparent 26%), linear-gradient(135deg, #06152d 0%, #08256b 54%, #0b1731 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
