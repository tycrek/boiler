const primary = '#HEX';
const secondary = '#HEX';
const accent = '#HEX';

module.exports = {
	separator: '_',
	darkMode: 'class',
	plugins: [
		//require('tailwindcss-textshadow')
	],
	content: ['./frontend/**/*.pug'],
	theme: {
		extend: {
			fontFamily: {
			},
			backgroundColor: {
				primary,
				secondary,
				accent,
			},
			colors: {
				primary,
				secondary,
				accent,
			}
		}
	}
};
