/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        white: '#d4cccc',
        primary: {
          100: '#6497bd',
          500: '#64A6BD'
        }
      }
    },
  },
  plugins: [],
}
