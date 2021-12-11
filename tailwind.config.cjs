const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.svelte', './src/**/*.css'],
	theme: {
		colors: {
			white: colors.white,
			gray: colors.warmGray,
			'svelte-prime': '#ff5030',
			blue: {
				dark: {
					'100': '#03045E',
					'200': '#023E8A',
					'300': '#0077B6',
				},
				base: {
					dark: '#0096C7',
					main: '#00B4D8',
					light: '#48CAE4',
				},
				light: {
					'100': '#90E0Ef',
					'200': '#ADE8F4',
					'300': '#F3FDFF',
				}
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
