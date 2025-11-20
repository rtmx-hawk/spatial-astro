/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'earthy-green': '#777c62',
        'soft-cream': '#f0ece2',
        'cool-grey': '#bbbcb8',
        'warm-sand': '#d9c7b0',
        'golden-tan': '#b99668',
        'taupe': '#beb8b0',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'hero-ken-burns': 'hero-ken-burns 20s ease-in-out infinite alternate',
      },
      keyframes: {
        'hero-ken-burns': {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '100%': { transform: 'scale3d(1.08, 1.08, 1)' },
        },
      },
      willChange: {
        'transform': 'transform',
      },
    },
  },
  plugins: [],
};
