/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['Allura', 'ui-serif', 'serif'],
      },
      colors: {
        ink: {
          950: '#07080b',
          900: '#0b0d12',
          850: '#10131a',
          800: '#141824',
          700: '#1b2130',
          600: '#222b3d',
        },
      },
      boxShadow: {
        soft: '0 12px 30px rgba(0,0,0,0.35)',
        lift: '0 18px 50px rgba(0,0,0,0.45)',
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(120%)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

