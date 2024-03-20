import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '1.5xl': '1420px',
      '2xl': '1536px',
    },
    fontSize: {
               'xs': '.75rem',
              'sm': '.875rem',
             'tiny': '.875rem',
              'base': '1rem',
              'lg': '1.125rem',
              'xl': '1.25rem',
              '2xl': '1.5rem',
              '3xl': '1.875rem',
              '4xl': '2.25rem',
              '5xl': '3rem',
              '6xl': '4rem',
              '7xl': '5rem',//portfolio items
              '7.5xl': '8rem',
              '8xl': '14.5rem',
              'portfolio': '5rem',//portfolio items

            },
    extend: {
      fontFamily: {
        TrapMedium: ["var(--Trap-Medium)"],
      }
    },
  },
  plugins: [require("daisyui")],
}
export default config
