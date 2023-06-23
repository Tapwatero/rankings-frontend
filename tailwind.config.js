/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx, jsx}"],
  theme: {
    extend: {
      animation: {
        'better-fade-in': 'better-fade-in 0.5s linear',
        'fast-spin': 'spin 0.35s linear infinite',
      },
      width: {
        '7/25': '28%'
      },
      keyframes: {
        "better-fade-in": {
          '100%': { opacity: 1 },
          '75%': { opacity: 0.75 },
          '50%': { opacity: 0.50 },
          '25%': { opacity: 0.25 },
          '0%': { opacity: 0 }
        },
      },
    }
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
}

