import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#0000008C",
        Text: "#ffff",
        zero: "#00000000",
      },
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      //   link: "var(--linkColor)",
      //   pointerLightColor: "var(--pointerLightColor)",
      //   mainTextColor: "var(--mainTextColor)",
      //   footerBackground: "var(--footerBackground)",
      // },
      fontFamily: {
        fontFamily: "var(--fontFamily)",
        mono: "var(--fontMono)",
      },
    },
  },
  plugins: [],
} satisfies Config;
