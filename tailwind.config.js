// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Adjust according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'Nunito',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
