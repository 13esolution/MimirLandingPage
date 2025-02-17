/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"./*.html",
		"./scripts/**/*.js",
		"./css/**/*.css",
	],
	darkMode: 'class',
	theme: {
		extend: {
			 
			fontFamily: {
				poly: ['"poly"', "serif"],
			},
		},
	},
	plugins: [
		function({ addVariant }) {
			addVariant('firefox', ':-moz-any(&)')
		}
	],
}
