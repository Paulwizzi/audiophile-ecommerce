import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': 'hsl(22, 63%, 52%)',
        'primary-black': 'hsl(0, 0%, 6%)',
    },
    fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
  },
  plugins: [],
}
}
export default config;