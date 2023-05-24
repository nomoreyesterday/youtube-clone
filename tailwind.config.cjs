	// /** @type {import('tailwindcss').Config} */
	// const colors = require('tailwindcss/colors');

	module.exports = {
			content: [
				"./index.html",
				"./src/**/*.{js,jsx,ts,tsx}"
			],
	colors: {
		'blue': '#1fb6ff',
		'purple': '#7e5bef',
		'pink': '#ff49db',
		'orange': '#ff7849',
		'green': '#13ce66',
		'yellow': '#ffc82c',
		'gray-dark': '#273444',
		'gray': '#8492a6',
		'gray-light': '#d3dce6',
	},
	fontFamily: {
		sans: ['Graphik', 'sans-serif'],
		serif: ['Merriweather', 'serif'],
	},
	theme: {
		screens: {
			'xs' : '0px',
			// => @media (min-width: 640px) { ... }
			'yt': '384px',

			'sm': '492px',
			// => @media (min-width: 768px) { ... }
			'md': '768px',
			
			// => @media (min-width: 1024px) { ... }
			'lg': '1016px',
			// => @media (min-width: 1280px) { ... }
			'xl': '1132px',
			'656' : '656px',
			'min1016' : '1016px',
			'max1016': {'max': '1015px'},

			'1168' : '1168px',
			'1244' : '1244',
			// => @media (min-width: 1550px) { ... }
			'1xl': '1550px',
			'2xl': '1600px',
			// '2xl': '1548px',
			'3xl': '1670px',
			'4xl': '1778px',
			'HD': '1800px',
			'FHD': '1920px',

			'hxs' : '95px',
		},
		extend: {
			animation: {
				transright : 'transright 0.2s ease forwards',
				transleft : 'transleft 0.2s ease forwards',
				fadeOutBorder: 'fadeOutBorder 1s ease-in-out',
				roll: 'roll 3s infinite ',
				movement: 'movement 5s infinite',
				loading: 'loading 3s linear infinite',
				spin: 'spin 3s linear infinite',
				wiggle: 'wiggle 1s ease-in-out infinite',
				slidein: 'slidein 1s ease-out',
				middleleft: 'middleleft 0.5s ease-out forwards',
				middleright: 'middleleft 0.5s ease-out forwards',
				moveleftright: 'middleleft 0.5s ease-out forwards',
				borderbottom: 'borderbottom 0.5s ease-out forwards'
			},
			keyframes: {
				borderbottom: {
					'0%' : {width:'0px', height:'0px'},
					'100%' : {width:'100%', height:'0px' },
				},
				moveleftright: {
					'0%' : {transform : 'translateX(50%)'},
					'100%' : {transform : 'translateX(100%)'},
				},
				middleleft: {
					'0%' : {transform : 'translateX(50%)'},
					'100%' : {transform : 'translateX(0)', border: '0 0 2px solid blue' },
				},
				middleright: {
					'0%' : {transform : 'translateX(-100%)'},
					'100%' : {transform : 'translateX(0)'},
				},
				transright: {
					'0%' : {transform : 'translateX(0%)'},
					// '50%' : {transform : 'translateX(-50%)'},
					'100%' : {transform : 'translateX(100%)'},
				},
				transleft: {
					'0%' : {transform : 'translateX(100%)'},
					// '50%' : {transform : 'translateX(-50%)'},
					'100%': { transform: 'translateX(0%)'},
				},
				roll: { 
					'0%, 10%, 20%, 30%, 40%, 60%, 70%, 80%, 90%, 100%': { transform: 'scale(1)'},
					'50%': { transform: 'scaleY(0)' }
				},
				movement: {
					'0%, 20%, 40%, 60%, 80%, 100%': { transform: 'translateX(0rem)' },
					'10%': { transform: 'translateX(2rem)' },
					'30%': { transform: 'translateX(-2rem)' },
					'50%': { transform: 'translateY(1rem)' },
					'70%': { transform: 'translateY(-1rem)' },
				},
				loading: {
					'0%': { left: '-100%' },
					'50%': { left: '100%' },
					'100%': { left: '-100%' },
				},
				fadeOutBorder : {
					'0%' : {border: '2px solid #d2d2d2', opacity: 1},
					// '25%' : {opacity: 0.75},
					'50%' : {border: '2px solid #d2d2d2', opacity: 0.5},
					// '75%' : {opacity: 0.25},
					'100%' : {border: '2px solid #d2d2d2', opacity: 0},
				  },
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				slidein: {
					'0%': {transform: 'translateX(-100%)',},
					'100%': {transform: 'translateX(0)',},
				},
			},
		}
	},
	extend: {
		height: {
			"10vh": "10vh",
			"20vh": "20vh",
			"30vh": "30vh",
			"40vh": "40vh",
			"50vh": "50vh",
			"60vh": "60vh",
			"70vh": "70vh",
			"80vh": "80vh",
			"90vh": "90vh",
			"100vh": "100vh",
		},
		width: {
			"10vw": "10vw",
			"20vw": "20vw",
			"30vw": "30vw",
			"40vw": "40vw",
			"50vw": "50vw",
			"60vw": "60vw",
			"70vw": "70vw",
			"80vw": "80vw",
			"90vw": "90vw",
			"100vw": "100vw",
		},
		
	},
	variants: {
		extend: {
			backgroundColor: ['dark', 'dark:hover', "active"],
			borderColor: ['dark'],
			textColor: ['dark', 'dark:hover'],
		},
	},
	plugins: [
		require("tailwind-scrollbar"),
		// require('tailwindcss'),
		// require('autoprefixer')
	],
	}
