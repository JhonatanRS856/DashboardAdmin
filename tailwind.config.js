/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color-primary' : 'var(--color-primary)',
        'color-danger' : 'var(--color-danger)',
        'color-success' : 'var(--color-success)',
        'color-warning' : 'var(--color-warning)',
        'color-white' : 'var(--color-white)',
        'color-info-dark' : 'var(--color-info-dark)',
        'color-info-light' : 'var(--color-info-light)',
        'color-dark' : 'var(--color-dark)',
        'color-light' : 'var(--color-light)',
        'color-primary-variant': 'var(--color-primary-variant)',
        'color-dark-variant' : 'var(--color-dark-variant)',
        'color-bg' : 'var(--color-background)',
      }
    },
  },
  plugins: [],
}
