/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
			fontFamily: {
				sans: 'Inter, Roboto, sans-serif'
			}
		},
  },
  plugins: [],
}
