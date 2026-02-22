/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0fa',
          100: '#cce1f5',
          200: '#99c3eb',
          300: '#66a5e0',
          400: '#3387d6',
          500: '#1a6fb8',
          600: '#0f4c81',
          700: '#0c3d68',
          800: '#082e4f',
          900: '#051f36',
        },
        accent: {
          50: '#fff8f0',
          100: '#fff1e0',
          200: '#ffe3c2',
          300: '#ffd5a3',
          400: '#ffa726',
          500: '#ff8c42',
          600: '#e67a38',
          700: '#cc6830',
          800: '#b35a28',
          900: '#994b20',
        },
        warm: {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f5ede0',
          300: '#f0e4d3',
        },
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 40px rgba(255, 140, 66, 0.3)',
        'glow-lg': '0 0 60px rgba(255, 140, 66, 0.4)',
        'inner-glow': 'inset 0 2px 20px rgba(255, 255, 255, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
