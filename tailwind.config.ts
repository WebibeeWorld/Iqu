/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',   
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#4a7c43',
          90: '#292C27',
        },

        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        blue: {
          70: '#000262',
        },
        pink: {
          50: '#d41788',
        },
      },
      fontFamily: {
        Lato: ['var(--font-lato)'],
        Montserrat: ['var(--font-montserrat)'],
      },
      keyframes: {
        marquee_h: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(calc(-100% - 1rem))' }
        },
      },
      animation: {
        horizontal_carousel: 'marquee_h 40s linear infinite',
        },
      backgroundImage: {
        'bg-img-1': "url('/therapy3.jpg')",
        'bg-img-2': "url('/therapy3.jpg')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [ require('@tailwindcss/typography'),
  nextui({
    themes: {
      light: {
        colors: {
          primary: "#b970f2", // Adjusted purple to a deeper shade
          secondary: "#f7e683", // Adjusted yellow to a warmer tone
          success: "#8cbd73", // Adjusted green to a vibrant shade
          warning: "#FFEB3B", // Adjusted warning to a brighter yellow
          default: "#FFFFFF" // Keeping white as default
        }
      },
    },
  }),]
};
