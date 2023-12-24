/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"primary-dark": "#181818",
				"primary-blue": "#287DF9",
				"background-color": "#F3F4F3",
			},
		},
	},
	plugins: [],
};
