// src/constants/themes.ts
export interface ThemeColors {
	name: string
	colors: {
		background: string
		foreground: string
		primaryLight: string
		primaryDark: string
		accentLight: string
		accentDark: string
		gradientStart: string
		gradientEnd: string
		surfaceLight: string
		surfaceDark: string
		sectionLight: string
		sectionDark: string
		cardLight: string
		cardDark: string
		badgeBg: {
			light: string
			dark: string
		}
		badgeText: {
			light: string
			dark: string
		}
		badgeBorder: {
			light: string
			dark: string
		}
	}
	preview: {
		primary: string
		secondary: string
	}
}

export const themes: ThemeColors[] = [
	{
		name: 'Metallic Chic',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '61, 82, 160', // 3D52A0
			primaryDark: '48, 66, 145', // 304291
			accentLight: '112, 145, 196', // 7091E6
			accentDark: '134, 151, 196', // 8697C4
			gradientStart: '#3D52A0',
			gradientEnd: '#7091E6',
			surfaceLight: '#EDF2FF',
			surfaceDark: '#1A1F2E',
			sectionLight: '#EDF2FF',
			sectionDark: '#15192A',
			cardLight: '#FFFFFF',
			cardDark: '#2E3446',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(134, 151, 196)',
				dark: 'rgb(112, 145, 196)',
			},
			badgeBorder: {
				light: 'rgba(134, 151, 196, 0.3)',
				dark: 'rgba(112, 145, 196, 0.3)',
			},
		},
		preview: {
			primary: '#3D52A0',
			secondary: '#7091E6',
		},
	},
	{
		name: 'Cool Tech',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '0, 49, 53', // 003135
			primaryDark: '2, 73, 80', // 024950
			accentLight: '15, 164, 175', // 0FA4AF
			accentDark: '175, 221, 229', // AFDDE5
			gradientStart: '#003135',
			gradientEnd: '#0FA4AF',
			surfaceLight: '#E6FFFA',
			surfaceDark: '#002428',
			sectionLight: '#E6FFFA',
			sectionDark: '#001A1D',
			cardLight: '#FFFFFF',
			cardDark: '#003A40',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(15, 164, 175)',
				dark: 'rgb(175, 221, 229)',
			},
			badgeBorder: {
				light: 'rgba(15, 164, 175, 0.3)',
				dark: 'rgba(175, 221, 229, 0.3)',
			},
		},
		preview: {
			primary: '#003135',
			secondary: '#0FA4AF',
		},
	},
	{
		name: 'Vintage Drive',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '36, 72, 85', // 244855
			primaryDark: '230, 72, 51', // E64833
			accentLight: '135, 74, 65', // 874F41
			accentDark: '144, 174, 173', // 90AEAD
			gradientStart: '#244855',
			gradientEnd: '#E64833',
			surfaceLight: '#FDF2F0',
			surfaceDark: '#1A2428',
			sectionLight: '#FDF2F0',
			sectionDark: '#151D20',
			cardLight: '#FFFFFF',
			cardDark: '#2E3C40',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(230, 72, 51)',
				dark: 'rgb(144, 174, 173)',
			},
			badgeBorder: {
				light: 'rgba(230, 72, 51, 0.3)',
				dark: 'rgba(144, 174, 173, 0.3)',
			},
		},
		preview: {
			primary: '#244855',
			secondary: '#E64833',
		},
	},
	{
		name: 'Mechanical Float',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '20, 35, 58', // 141619
			primaryDark: '44, 46, 58', // 2C2E3A
			accentLight: '5, 4, 68', // 050444
			accentDark: '179, 180, 189', // B3B4BD
			gradientStart: '#141619',
			gradientEnd: '#050444',
			surfaceLight: '#F8F9FA',
			surfaceDark: '#0A0B0F',
			sectionLight: '#F8F9FA',
			sectionDark: '#07080B',
			cardLight: '#FFFFFF',
			cardDark: '#1C1E24',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(5, 4, 68)',
				dark: 'rgb(179, 180, 189)',
			},
			badgeBorder: {
				light: 'rgba(5, 4, 68, 0.3)',
				dark: 'rgba(179, 180, 189, 0.3)',
			},
		},
		preview: {
			primary: '#141619',
			secondary: '#050444',
		},
	},
	{
		name: 'Cosmic Night',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '33, 41, 68', // 212A44
			primaryDark: '46, 57, 68', // 2E3944
			accentLight: '18, 78, 102', // 124E66
			accentDark: '116, 141, 146', // 748D92
			gradientStart: '#212A44',
			gradientEnd: '#124E66',
			surfaceLight: '#F0F4F8',
			surfaceDark: '#131720',
			sectionLight: '#F0F4F8',
			sectionDark: '#0E1218',
			cardLight: '#FFFFFF',
			cardDark: '#242B36',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(18, 78, 102)',
				dark: 'rgb(116, 141, 146)',
			},
			badgeBorder: {
				light: 'rgba(18, 78, 102, 0.3)',
				dark: 'rgba(116, 141, 146, 0.3)',
			},
		},
		preview: {
			primary: '#212A44',
			secondary: '#124E66',
		},
	},
	{
		name: 'Red Lively',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '93, 0, 30', // 5D001E
			primaryDark: '227, 62, 45', // E33E2D
			accentLight: '227, 175, 188', // E3AFBC
			accentDark: '154, 23, 80', // 9A1750
			gradientStart: '#5D001E',
			gradientEnd: '#E33E2D',
			surfaceLight: '#FFF1F3',
			surfaceDark: '#1F0A0E',
			sectionLight: '#FFF1F3',
			sectionDark: '#1A080C',
			cardLight: '#FFFFFF',
			cardDark: '#351219',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(227, 62, 45)',
				dark: 'rgb(227, 175, 188)',
			},
			badgeBorder: {
				light: 'rgba(227, 62, 45, 0.3)',
				dark: 'rgba(227, 175, 188, 0.3)',
			},
		},
		preview: {
			primary: '#5D001E',
			secondary: '#E33E2D',
		},
	},
	{
		name: 'Tech Future',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '44, 53, 49', // 2C3531
			primaryDark: '17, 100, 102', // 116466
			accentLight: '217, 176, 140', // D9B08C
			accentDark: '255, 203, 154', // FFCB9A
			gradientStart: '#2C3531',
			gradientEnd: '#116466',
			surfaceLight: '#F0FAF9',
			surfaceDark: '#161B19',
			sectionLight: '#F0FAF9',
			sectionDark: '#111614',
			cardLight: '#FFFFFF',
			cardDark: '#2A2F2D',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(17, 100, 102)',
				dark: 'rgb(217, 176, 140)',
			},
			badgeBorder: {
				light: 'rgba(17, 100, 102, 0.3)',
				dark: 'rgba(217, 176, 140, 0.3)',
			},
		},
		preview: {
			primary: '#2C3531',
			secondary: '#116466',
		},
	},
	{
		name: 'Dynamic Texture',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '47, 68, 84', // 2F4454
			primaryDark: '46, 21, 27', // 2E151B
			accentLight: '218, 123, 147', // DA7B93
			accentDark: '55, 110, 111', // 376E6F
			gradientStart: '#2F4454',
			gradientEnd: '#DA7B93',
			surfaceLight: '#F8F9FA',
			surfaceDark: '#171E24',
			sectionLight: '#F8F9FA',
			sectionDark: '#13181D',
			cardLight: '#FFFFFF',
			cardDark: '#2A333B',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(218, 123, 147)',
				dark: 'rgb(55, 110, 111)',
			},
			badgeBorder: {
				light: 'rgba(218, 123, 147, 0.3)',
				dark: 'rgba(55, 110, 111, 0.3)',
			},
		},
		preview: {
			primary: '#2F4454',
			secondary: '#DA7B93',
		},
	},
	{
		name: 'Fresh Contrast',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '97, 137, 47', // 61892F
			primaryDark: '134, 194, 50', // 86C232
			accentLight: '34, 34, 41', // 222229
			accentDark: '71, 75, 79', // 474B4F
			gradientStart: '#61892F',
			gradientEnd: '#86C232',
			surfaceLight: '#F7FBF4',
			surfaceDark: '#1A1A1C',
			sectionLight: '#F7FBF4',
			sectionDark: '#151517',
			cardLight: '#FFFFFF',
			cardDark: '#2D2D31',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(134, 194, 50)',
				dark: 'rgb(97, 137, 47)',
			},
			badgeBorder: {
				light: 'rgba(134, 194, 50, 0.3)',
				dark: 'rgba(97, 137, 47, 0.3)',
			},
		},
		preview: {
			primary: '#61892F',
			secondary: '#86C232',
		},
	},
	// src/constants/themes.ts
	// Previous themes remain the same...

	{
		name: 'Citrus Energy',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '31, 38, 5', // 1F2605
			primaryDark: '31, 101, 33', // 1F6521
			accentLight: '83, 144, 15', // 53900F
			accentDark: '164, 167, 30', // A4A71E
			gradientStart: '#1F2605',
			gradientEnd: '#D6CE15', // Bright citrus yellow
			surfaceLight: '#F7FAE5', // Light citrus tint
			surfaceDark: '#131702', // Deep green dark
			sectionLight: '#F7FAE5',
			sectionDark: '#0F1301',
			cardLight: '#FFFFFF',
			cardDark: '#1F2605',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(164, 167, 30)', // Bright citrus
				dark: 'rgb(214, 206, 21)', // Brighter citrus for dark mode
			},
			badgeBorder: {
				light: 'rgba(164, 167, 30, 0.3)',
				dark: 'rgba(214, 206, 21, 0.3)',
			},
		},
		preview: {
			primary: '#1F2605', // Dark green
			secondary: '#D6CE15', // Bright citrus
		},
	},
]

// CSS variable names for badges
export const badgeVariables = {
	bg: {
		light: '--badge-bg-light',
		dark: '--badge-bg-dark',
	},
	text: {
		light: '--badge-text-light',
		dark: '--badge-text-dark',
	},
	border: {
		light: '--badge-border-light',
		dark: '--badge-border-dark',
	},
}
