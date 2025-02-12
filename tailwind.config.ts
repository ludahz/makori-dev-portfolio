import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'rgb(var(--primary-light) / <alpha-value>)',
					dark: 'rgb(var(--primary-dark) / <alpha-value>)',
				},
				accent: {
					DEFAULT: 'rgb(var(--accent-light) / <alpha-value>)',
					dark: 'rgb(var(--accent-dark) / <alpha-value>)',
				},
				surface: {
					light: 'var(--surface-light)',
					dark: 'var(--surface-dark)',
				},
				section: {
					light: 'var(--section-light)',
					dark: 'var(--section-dark)',
					lighter: 'var(--section-lighter)',
				},
				card: {
					light: 'var(--card-light)',
					dark: 'var(--card-dark)',
				},
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				badge: {
					bg: {
						light: 'var(--badge-bg-light)',
						dark: 'var(--badge-bg-dark)',
					},
					text: {
						light: 'var(--badge-text-light)',
						dark: 'var(--badge-text-dark)',
					},
					border: {
						light: 'var(--badge-border-light)',
						dark: 'var(--badge-border-dark)',
					},
				},
			},
			gradientColorStops: {
				'gradient-start': 'var(--gradient-start)',
				'gradient-end': 'var(--gradient-end)',
			},
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(var(--gradient-start), var(--gradient-end))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--gradient-start), var(--gradient-end))',
				'gradient-primary':
					'linear-gradient(to right, rgb(var(--primary-light)), rgb(var(--accent-light)))',
				'gradient-primary-dark':
					'linear-gradient(to right, rgb(var(--primary-dark)), rgb(var(--accent-dark)))',
				'gradient-badge':
					'linear-gradient(to right, var(--badge-bg-light), var(--badge-bg-dark))',
			},
			backgroundColor: {
				'badge-light': 'var(--badge-bg-light)',
				'badge-dark': 'var(--badge-bg-dark)',
				'section-light': 'var(--section-light)',
				'section-dark': 'var(--section-dark)',
				'section-lighter': 'var(--section-lighter)',
			},
			textColor: {
				'badge-light': 'var(--badge-text-light)',
				'badge-dark': 'var(--badge-text-dark)',
			},
			borderColor: {
				'badge-light': 'var(--badge-border-light)',
				'badge-dark': 'var(--badge-border-dark)',
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
		},
	},
	plugins: [],
	darkMode: 'class', // Enable class-based dark mode
} satisfies Config

export default config
