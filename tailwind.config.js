/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['var(--font-inter)', 'sans-serif'],
        'roboto': ['var(--font-roboto)', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'lato': ['var(--font-lato)', 'sans-serif'],
        'nunito': ['var(--font-nunito)', 'sans-serif'],
        'raleway': ['var(--font-raleway)', 'sans-serif'],
        'oswald': ['var(--font-oswald)', 'sans-serif'],
        'playfair-display': ['var(--font-playfair-display)', 'serif'],
        'merriweather': ['var(--font-merriweather)', 'serif'],
        'work-sans': ['var(--font-work-sans)', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        'nunito-sans': ['var(--font-nunito-sans)', 'sans-serif'],
        // These will automatically use your custom properties
        'primary': ['var(--font-primary)', 'sans-serif'],
        'secondary': ['var(--font-secondary)', 'sans-serif'],
        'accent': ['var(--font-accent)', 'sans-serif'],
      },
      colors: {
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },
  plugins: [],
}; 