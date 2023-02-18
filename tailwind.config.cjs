/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	mode: 'jit',
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'linkedin-blue': '#0A65C2',
				'twitter-blue': '#1D9BF0',
			}
		},
	},
	plugins: [],
}
