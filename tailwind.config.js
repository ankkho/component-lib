module.exports = {
	purge: [],
	purge: ['./pages/**/*.js', './components/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		backgroundColor: (theme) => ({
			...theme('colors'),
			sidebar: '#0C2556',
			sidebarHover: '#102d68',
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
