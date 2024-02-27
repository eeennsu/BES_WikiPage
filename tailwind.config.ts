import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        glassmorphism: 'rgba(255, 255, 255, 0.61)',
        'glassmorphism-dark': 'rgba(1, 1, 1, 0.9)',
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px'
      },
      fontSize: {
        'xxs': ['10px', '12px']
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;