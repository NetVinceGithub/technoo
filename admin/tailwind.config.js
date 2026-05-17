/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#06111a",
        panel: "#0b1722",
        panelSoft: "#0f202e",
        line: "rgba(255,255,255,0.08)",
        cyan: "#68e7ff",
        mint: "#7cf8c5",
        amber: "#ffcf70",
        coral: "#ff8b8b",
      },
      boxShadow: {
        glow: "0 0 40px rgba(104,231,255,0.16)",
        mint: "0 0 40px rgba(124,248,197,0.14)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
