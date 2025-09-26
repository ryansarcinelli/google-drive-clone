import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
// tailwind.config.js
theme: {
  extend: {
    colors: {
      brand: {
        100: '#1B3C53',   // cor principal mais escura
        200: '#456882',   // azul médio
        300: '#D2C1B6',   // bege suave
        400: '#F9F3EF',   // fundo claro
        DEFAULT: '#1B3C53'
      },
      red: '#FF7474',
      error: '#b80000',
      green: '#3DD9B3',
      blue: '#56B8FF',
      pink: '#EEA8FD',
      orange: '#F9AB72',
      light: {
        100: '#333F4E',
        200: '#A3B2C7',
        300: '#F2F5F9',
        400: '#F2F4F8'
      },
      dark: {
        100: '#04050C',
        200: '#131524'
      },
      background: '#F9F3EF', // fundo claro padrão
      foreground: '#1B3C53', // texto escuro
      primary: {
        DEFAULT: '#1B3C53',
        foreground: '#F9F3EF'
      },
      secondary: {
        DEFAULT: '#456882',
        foreground: '#F9F3EF'
      },
      accent: {
        DEFAULT: '#D2C1B6',
        foreground: '#1B3C53'
      },
      border: '#D2C1B6',
      input: '#F9F3EF',
      ring: '#456882',
      chart: {
        1: '#1B3C53',
        2: '#456882',
        3: '#D2C1B6',
        4: '#F9F3EF',
        5: '#56B8FF'
      }
    },
    fontFamily: {
      poppins: ['var(--font-poppins)']
    },
    boxShadow: {
      'drop-1': '0px 10px 30px 0px rgba(27, 60, 83, 0.1)',
      'drop-2': '0 8px 30px 0 rgba(69, 104, 130, 0.3)',
      'drop-3': '0 8px 30px 0 rgba(69, 104, 130, 0.1)'
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
    keyframes: {
      'caret-blink': {
        '0%,70%,100%': { opacity: '1' },
        '20%,50%': { opacity: '0' }
      }
    },
    animation: {
      'caret-blink': 'caret-blink 1.25s ease-out infinite'
    }
  }
}
,
  plugins: [require("tailwindcss-animate")],
};
export default config;
