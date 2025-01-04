/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
          third:'var(--third)',
        default: 'var(--default)',
      
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          default: 'var(--text-default)',
        },
        btn: {
          primary: 'var(--btn-primary)',
          secondary: 'var(--btn-secondary)',
          default: 'var(--btn-default)',
        },
      },
    },
  },
  plugins: [],
};
