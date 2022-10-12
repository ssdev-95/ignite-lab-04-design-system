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
			white: '#fff',
			black: '#000',
			transparent: 'transparent',
	
			gray: {
				'900': '#121214',
				'800': '#1b1b1b',
				'400': '#6a6a6a',
				'100': '#f0f2f5'
			},

			green: {
				'400': '#41b883',
				'300': '#86efac'
			},

			red: {
				'500': '#dc1637'
			}
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
