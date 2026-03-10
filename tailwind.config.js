module.exports = {
  content: ['./*.html', './jp/*.html', './src/**/*.{ts,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')],
};
