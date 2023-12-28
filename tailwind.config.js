/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 6s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          '0%, 37.5%': {
            transform: 'translateY(-100%)',
          },
          '50%, 87.5%': {
            transform: 'translateY(-60%)',
          },
          '100%': {
            transform: 'translateY(-20%)',
          },
        }
      }                    
    },
  },
  plugins: [],
}

