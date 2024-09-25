/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      colors: {
        'facebook': '#2d88ff',
        'instagram': '#e4405f',
        'twitter': '#1da1f2',
        'linkedin': '#4a76a8',
      },
    },
  },
  plugins: [],
}
