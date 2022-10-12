/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
		fontSize: {
			sm: 10,
			md: 12,
			lg: 16,
			xl: 32
		},
		colors: {
			'gray-900': '#121214',
			'gray-800': '#1b1b1b',
			'gray-400': '#6a6a6a',
			'gray-100': '#f0f2f5',
			'green-400': '#41b883',
			'green-300': '#86efac',
			'red-500': '#dc1637'
		},
    extend: {
			fontFamily: {
				sans: 'Inter, Roboto, sans-serif'
			},
			screens: {
				mb: { 'max': '869px' },
				md: { 'min': '869px' }
			}
		},
  },
  plugins: [],
}
