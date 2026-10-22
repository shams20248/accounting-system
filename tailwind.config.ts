import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef8ff',
          100: '#d9f1ff',
          200: '#bfe8ff',
          300: '#8fd8ff',
          400: '#58c0ff',
          500: '#25a2ff',
          600: '#0d85e6',
          700: '#116bb3',
          800: '#15588f',
          900: '#174b78',
        },
        success: '#0ea5e9',
        accent: '#f59e0b',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
