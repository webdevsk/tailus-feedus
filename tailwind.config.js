const plugin = require('tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				center: 'true',
				padding: {
					DEFAULT: '.5rem',
					md: '3rem',
					lg: '1.75rem'
				},
			},
			spacing: {
				'nav-height': 'var(--navbar-height)',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		// plugin(({ addUtilities, addComponents }) => {
		// 	addUtilities({ "nav-height": "var(--navbar-height)" }, ["responsive"])
		// })
	],
}
