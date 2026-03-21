export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF385C", // Airbnb red
        dark: "#222222",
        light: "#F7F7F7",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1.5rem",
      },
    },
  },
  plugins: [],
};