import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3E9',
        mocha: '#3F2D2E',
        tabby: '#C6A58B',
        paw: '#F2C14E',
        midnight: '#0F172A'
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};
export default config;