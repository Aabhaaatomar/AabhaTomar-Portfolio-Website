/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#09090B',
        surface: '#0F0F13',
        surface2: '#141418',
        line: 'rgba(255,255,255,0.08)',
        line2: 'rgba(255,255,255,0.14)',
        ink: '#FAFAFA',
        muted: '#9497A6',
        dim: '#6B6E7B',
        violet: {
          50: '#F5EBFF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7C3AED',
          900: '#3B0764',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'glow-sm': '0 0 24px rgba(168,85,247,0.25)',
        'glow-md': '0 0 60px rgba(168,85,247,0.22)',
        'glow-lg': '0 0 120px rgba(124,58,237,0.25)',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.94)' },
        },
        caret: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        blob: 'blob 14s infinite ease-in-out',
        caret: 'caret 1s step-start infinite',
        marquee: 'marquee 28s linear infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
      },
    },
  },
  plugins: [],
}
