// Import necessary modules from Tailwind CSS
import { Config } from "tailwindcss";

// Define your Tailwind CSS configuration
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-color': 'linear-gradient(90deg, #c298d3, #5d62ee, #5cc2ed)',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        Archivo: ['Archivo', 'sans-serif'],
        Poppins: ['Poppins','sans-serif']
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s forwards',
        slideOut: 'slideOut 0.5s forwards',
      },
    },
  },
  plugins: [],
};

export default config;
