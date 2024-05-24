/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      colors: {
        blackColor: "545454",
        // blueColor: "#1ccedf",
        blueColor: "#3A7BA5",
        textColor: "#FFFFFF",
        pack: "linear-gradient(180deg, #3A7BA5 0%, rgba(42, 147, 213, 0.10) 100%)",
      },
      keyframes: {
        animation: {
          wiggle: "wiggle 1s ease-in-out infinite",
        },
      },
    },
  },
  plugins: [],
};
