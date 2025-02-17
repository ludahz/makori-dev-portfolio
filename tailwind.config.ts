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
					'light-alt': 'var(--section-light-alt)',
					'dark-alt': 'var(--section-dark-alt)',
				},
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				badge: {
					bg: {
						light: 'rgb(var(--badge-bg-light) / <alpha-value>)',
						dark: 'rgb(var(--badge-bg-dark) / <alpha-value>)',
					},
					text: {
						light: 'rgb(var(--badge-text-light) / <alpha-value>)',
						dark: 'rgb(var(--badge-text-dark) / <alpha-value>)',
					},
					border: {
						light: 'rgb(var(--badge-border-light) / <alpha-value>)',
						dark: 'rgb(var(--badge-border-dark) / <alpha-value>)',
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
			},
		},
	},
	plugins: [],
	darkMode: 'class',
} satisfies Config

export default config
