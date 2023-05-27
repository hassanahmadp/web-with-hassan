/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'bounce-down': 'cubic-bezier(0.55, -0.55, 0.43, 1.45)',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      accent: '#03dfe1',
      darkTheme: '#0F172A',
      darkThemeModal: '#08122a',
      white: 'white',
      black: 'black'
    },

  },
  plugins: [],
}
