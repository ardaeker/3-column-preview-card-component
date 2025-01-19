import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['var(--font-lexend-deca)'],
        shoulders: ['var(--font-big-shoulders-display)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
