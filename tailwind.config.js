/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#0a2477',

					secondary: '#5ae876',

					accent: '#f9b8c5',

					neutral: '#1E1424',

					'base-100': '#E6E3E8',

					info: '#1BA4F3',

					success: '#117462',

					warning: '#F6AD0E',

					error: '#F5425D'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
