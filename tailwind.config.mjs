/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // ICareFM Color Palette
        red: {
          dark: '#E64B35',
          light: '#F39B7F',
        },
        blue: {
          light: '#4DBBD5',
          dark: '#8491B4',
        },
        green: {
          dark: '#00A087',
          light: '#91D1C2',
        },
        brown: {
          dark: '#7E6148',
          light: '#B09C85',
        },
        purple: {
          dark: '#6A3D9A',
          light: '#CAB2D6',
        },
        yellow: {
          dark: '#D4B013',
          light: '#F7E8AA',
        },
        accent: {
          blue: '#3C5488',
          red: '#DC0000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
