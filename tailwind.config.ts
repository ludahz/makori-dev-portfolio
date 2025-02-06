/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// Base theme colors
				primary: {
					DEFAULT: 'rgb(var(--primary-light) / <alpha-value>)',
					dark: 'rgb(var(--primary-dark) / <alpha-value>)',
				},
				accent: {
					DEFAULT: 'rgb(var(--accent-light) / <alpha-value>)',
					dark: 'rgb(var(--accent-dark) / <alpha-value>)',
				},
				surface: {
					light: 'rgb(var(--surface-light) / <alpha-value>)',
					dark: 'rgb(var(--surface-dark) / <alpha-value>)',
				},
			},
			backgroundColor: {
				primary: 'var(--primary)',
				accent: 'var(--accent)',
			},
			textColor: {
				primary: 'var(--primary)',
				accent: 'var(--accent)',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(var(--gradient-start), var(--gradient-end))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--gradient-start), var(--gradient-end))',
			},
		},
	},
	plugins: [],
	darkMode: 'media',
}

// // tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	content: [
// 		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
// 		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
// 		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
// 	],
// 	theme: {
// 		extend: {
// 			colors: {
// 				primary: {
// 					DEFAULT: '#4ADE80', // Bright Green
// 					dark: '#16A34A', // Deep Green
// 				},
// 				accent: {
// 					DEFAULT: '#22D3EE', // Cyan
// 					dark: '#0891B2', // Deep Cyan
// 				},
// 				surface: {
// 					light: '#ECFDF5', // Green White
// 					dark: '#0F1A1A', // Dark Teal
// 				},
// 			},

// 			animation: {
// 				'fade-in': 'fadeIn 0.5s ease-in-out',
// 				'slide-up': 'slideUp 0.5s ease-out',
// 				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
// 			},
// 			keyframes: {
// 				fadeIn: {
// 					'0%': { opacity: '0' },
// 					'100%': { opacity: '1' },
// 				},
// 				slideUp: {
// 					'0%': { transform: 'translateY(20px)', opacity: '0' },
// 					'100%': { transform: 'translateY(0)', opacity: '1' },
// 				},
// 			},
// 			backgroundImage: {
// 				'gradient-radial':
// 					'radial-gradient(var(--gradient-start), var(--gradient-end))',
// 				'gradient-conic':
// 					'conic-gradient(from 180deg at 50% 50%, var(--gradient-start), var(--gradient-end))',
// 			},
// 		},
// 	},
// 	plugins: [],
// 	darkMode: 'media',
// }
