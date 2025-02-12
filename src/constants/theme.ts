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
		sectionLight: string // Primary light mode section color
		sectionLightAlt: string // Lighter variation for light mode
		sectionDark: string // Primary dark mode section color
		sectionDarkAlt: string
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
		name: 'Ocean Breeze',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '100, 219, 251',
			primaryDark: '14, 165, 233',
			accentLight: '72, 191, 227',
			accentDark: '2, 132, 199',
			gradientStart: '#64FFDA',
			gradientEnd: '#48BFE3',
			surfaceLight: '#F0FDFA',
			surfaceDark: '#0F172A',
			sectionLight: '#F0FDFA', // Cool cyan base
			sectionLightAlt: '#F7FDFB', // Lighter cyan
			sectionDark: '#0B1221', // Deep ocean blue
			sectionDarkAlt: '#0F1729', // Slightly lighter ocean blue
			cardLight: '#FFFFFF',
			cardDark: '#1E293B',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(125, 255, 255)', // Brighter cyan
				dark: 'rgb(85, 255, 255)',
			},
			badgeBorder: {
				light: 'rgba(125, 255, 255, 0.3)', // Matching glow
				dark: 'rgba(85, 255, 255, 0.3)',
			},
		},
		preview: {
			primary: '#64FFDA',
			secondary: '#48BFE3',
		},
	},
	{
		name: 'Matrix',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '74, 222, 128',
			primaryDark: '22, 163, 74',
			accentLight: '34, 211, 238',
			accentDark: '8, 145, 178',
			gradientStart: '#4ADE80',
			gradientEnd: '#22D3EE',
			surfaceLight: '#ECFDF5',
			surfaceDark: '#0F1A1A',
			sectionLight: '#ECFDF5', // Mint green base
			sectionLightAlt: '#F5FDF8', // Lighter mint
			sectionDark: '#0A1614', // Matrix dark green
			sectionDarkAlt: '#0E1A18', // Slightly lighter matrix green
			cardLight: '#FFFFFF',
			cardDark: '#1A2625',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(132, 255, 132)', // Brighter green
				dark: 'rgb(92, 255, 92)',
			},
			badgeBorder: {
				light: 'rgba(132, 255, 132, 0.3)',
				dark: 'rgba(92, 255, 92, 0.3)',
			},
		},
		preview: {
			primary: '#4ADE80',
			secondary: '#22D3EE',
		},
	},
	{
		name: 'Ruby Fusion',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '244, 63, 94',
			primaryDark: '225, 29, 72',
			accentLight: '251, 146, 60',
			accentDark: '234, 88, 12',
			gradientStart: '#f43f5e',
			gradientEnd: '#fb923c',
			surfaceLight: '#fff1f2',
			surfaceDark: '#1c1917',
			sectionLight: '#FFF1F2', // Soft pink base
			sectionLightAlt: '#FFF5F6', // Lighter pink
			sectionDark: '#1A1515', // Deep ruby
			sectionDarkAlt: '#1E1919', // Slightly lighter ruby
			cardLight: '#FFFFFF',
			cardDark: '#2C2524',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(255, 105, 105)', // Brighter red
				dark: 'rgb(255, 85, 85)',
			},
			badgeBorder: {
				light: 'rgba(255, 105, 105, 0.3)',
				dark: 'rgba(255, 85, 85, 0.3)',
			},
		},
		preview: {
			primary: '#f43f5e',
			secondary: '#fb923c',
		},
	},
	{
		name: 'Purple Rain',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '168, 85, 247',
			primaryDark: '126, 34, 206',
			accentLight: '236, 72, 153',
			accentDark: '219, 39, 119',
			gradientStart: '#A855F7',
			gradientEnd: '#EC4899',
			surfaceLight: '#FAF5FF',
			surfaceDark: '#1E1B4B',
			sectionLight: '#FAF5FF', // Lavender base
			sectionLightAlt: '#FCF9FF', // Lighter lavender
			sectionDark: '#1A1744', // Deep purple
			sectionDarkAlt: '#1E1B4B', // Slightly lighter purple
			cardLight: '#FFFFFF',
			cardDark: '#2D2A5F',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(200, 125, 255)', // Brighter purple
				dark: 'rgb(180, 105, 255)',
			},
			badgeBorder: {
				light: 'rgba(200, 125, 255, 0.3)',
				dark: 'rgba(180, 105, 255, 0.3)',
			},
		},
		preview: {
			primary: '#A855F7',
			secondary: '#EC4899',
		},
	},
	{
		name: 'Golden Hour',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '245, 158, 11',
			primaryDark: '217, 119, 6',
			accentLight: '239, 68, 68',
			accentDark: '220, 38, 38',
			gradientStart: '#F59E0B',
			gradientEnd: '#EF4444',
			surfaceLight: '#FFFBEB',
			surfaceDark: '#27272A',
			sectionLight: '#FFFBEB', // Warm yellow base
			sectionLightAlt: '#FFFDF2', // Lighter yellow
			sectionDark: '#1C1C1F', // Deep gold
			sectionDarkAlt: '#202024', // Slightly lighter gold
			cardLight: '#FFFFFF',
			cardDark: '#2D2D31',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(255, 175, 55)', // Brighter orange
				dark: 'rgb(255, 155, 35)',
			},
			badgeBorder: {
				light: 'rgba(255, 175, 55, 0.3)',
				dark: 'rgba(255, 155, 35, 0.3)',
			},
		},
		preview: {
			primary: '#F59E0B',
			secondary: '#EF4444',
		},
	},
	{
		name: 'Northern Lights',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '16, 185, 129',
			primaryDark: '4, 120, 87',
			accentLight: '99, 102, 241',
			accentDark: '67, 56, 202',
			gradientStart: '#10B981',
			gradientEnd: '#6366F1',
			surfaceLight: '#ECFDF5',
			surfaceDark: '#0F172A',
			sectionLight: '#ECFDF5', // Aurora green base
			sectionLightAlt: '#F2FDF8', // Lighter aurora green
			sectionDark: '#0B1222', // Deep arctic blue
			sectionDarkAlt: '#0F1729', // Slightly lighter arctic blue
			cardLight: '#FFFFFF',
			cardDark: '#1E293B',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(45, 255, 175)', // Brighter teal
				dark: 'rgb(25, 255, 155)',
			},
			badgeBorder: {
				light: 'rgba(45, 255, 175, 0.3)',
				dark: 'rgba(25, 255, 155, 0.3)',
			},
		},
		preview: {
			primary: '#10B981',
			secondary: '#6366F1',
		},
	},
	{
		name: 'Midnight Blue',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '59, 130, 246',
			primaryDark: '37, 99, 235',
			accentLight: '139, 92, 246',
			accentDark: '109, 40, 217',
			gradientStart: '#3B82F6',
			gradientEnd: '#8B5CF6',
			surfaceLight: '#EFF6FF',
			surfaceDark: '#020617',
			sectionLight: '#EFF6FF', // Sky blue base
			sectionLightAlt: '#F5F9FF', // Lighter sky blue
			sectionDark: '#010614', // Deep midnight
			sectionDarkAlt: '#020A1C', // Slightly lighter midnight
			cardLight: '#FFFFFF',
			cardDark: '#1E293B',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(85, 155, 255)', // Brighter blue
				dark: 'rgb(65, 135, 255)',
			},
			badgeBorder: {
				light: 'rgba(85, 155, 255, 0.3)',
				dark: 'rgba(65, 135, 255, 0.3)',
			},
		},
		preview: {
			primary: '#3B82F6',
			secondary: '#8B5CF6',
		},
	},
	{
		name: 'Black Panther',
		colors: {
			background: '#0A0A0F', // Deeper black with slight blue undertone
			foreground: '#E6E6FF', // Soft white with slight blue tint for better contrast
			primaryLight: '82, 196, 255', // Vibranium energy blue (#52C4FF)
			primaryDark: '0, 108, 171', // Deep vibranium blue (#006CAB)
			accentLight: '163, 90, 255', // Kinetic energy purple (#A35AFF)
			accentDark: '93, 48, 203', // Deep suit purple (#5D30CB)
			gradientStart: '#52C4FF', // Vibranium blue glow
			gradientEnd: '#A35AFF', // Kinetic purple glow
			surfaceLight: '#1A1A24', // Suit texture with blue undertone
			surfaceDark: '#090912', // Deep suit texture
			sectionLight: '#1E1E2A', // Vibranium metal light
			sectionLightAlt: '#24243A', // Charged vibranium light
			sectionDark: '#0D0D14', // Vibranium metal dark
			sectionDarkAlt: '#12121C', // Charged vibranium dark
			cardLight: '#242433', // Suit panel with purple undertone
			cardDark: '#151520', // Dark suit panel
			badgeBg: {
				light: 'rgba(82, 196, 255, 0.1)', // Vibranium blue glow
				dark: 'rgba(163, 90, 255, 0.1)', // Kinetic purple glow
			},
			badgeText: {
				light: 'rgb(130, 210, 255)', // Bright vibranium blue
				dark: 'rgb(180, 130, 255)', // Bright kinetic purple
			},
			badgeBorder: {
				light: 'rgba(82, 196, 255, 0.3)', // Vibranium blue outline
				dark: 'rgba(163, 90, 255, 0.3)', // Kinetic purple outline
			},
		},
		preview: {
			primary: '#52C4FF', // Vibranium energy
			secondary: '#A35AFF', // Kinetic energy
		},
	},
	{
		name: 'Star Wars',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '255, 232, 31', // Lightsaber yellow
			primaryDark: '204, 185, 25', // Dark yellow
			accentLight: '33, 150, 243', // Force blue
			accentDark: '25, 118, 210', // Dark force
			gradientStart: '#FFE81F', // Yellow
			gradientEnd: '#2196F3', // Blue
			surfaceLight: '#FFFDE7', // Light imperial
			surfaceDark: '#121212', // Dark side
			sectionLight: '#FFFDE7', // Light side base
			sectionLightAlt: '#FFFEF0', // Lighter force
			sectionDark: '#0D0D0D', // Dark side
			sectionDarkAlt: '#121212', // Slightly lighter dark side
			cardLight: '#FFFFFF',
			cardDark: '#1E1E1E',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(255, 235, 85)', // Bright yellow
				dark: 'rgb(255, 215, 65)',
			},
			badgeBorder: {
				light: 'rgba(255, 235, 85, 0.3)',
				dark: 'rgba(255, 215, 65, 0.3)',
			},
		},
		preview: {
			primary: '#FFE81F',
			secondary: '#2196F3',
		},
	},
	{
		name: 'Spider-Man',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '244, 67, 54', // Spider red
			primaryDark: '211, 47, 47', // Dark red
			accentLight: '33, 150, 243', // Spider blue
			accentDark: '25, 118, 210', // Dark blue
			gradientStart: '#F44336', // Red
			gradientEnd: '#2196F3', // Blue
			surfaceLight: '#FFEBEE', // Light web
			surfaceDark: '#1A1A1A', // Night NYC
			sectionLight: '#FFEBEE', // Spider red base
			sectionLightAlt: '#FFF0F2', // Lighter web red
			sectionDark: '#151515', // Night NYC
			sectionDarkAlt: '#1A1A1A', // Lighter NYC night
			cardLight: '#FFFFFF',
			cardDark: '#262626',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(255, 95, 85)', // Bright red
				dark: 'rgb(255, 75, 65)',
			},
			badgeBorder: {
				light: 'rgba(255, 95, 85, 0.3)',
				dark: 'rgba(255, 75, 65, 0.3)',
			},
		},
		preview: {
			primary: '#F44336',
			secondary: '#2196F3',
		},
	},
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
			sectionLight: '#EDF2FF', // Steel blue base
			sectionLightAlt: '#F2F6FF', // Lighter steel
			sectionDark: '#15192A', // Deep metallic
			sectionDarkAlt: '#1A1F32', // Slightly lighter metallic
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
			sectionLight: '#F7FBF4', // Fresh green base
			sectionLightAlt: '#FAFDF8', // Lighter fresh
			sectionDark: '#151517', // Deep contrast
			sectionDarkAlt: '#1A1A1C', // Slightly lighter contrast
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
			sectionLight: '#F0FAF9', // Tech mint base
			sectionLightAlt: '#F5FCFB', // Lighter tech
			sectionDark: '#111614', // Deep future
			sectionDarkAlt: '#151A18', // Slightly lighter future
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
		name: 'Red Lively',
		colors: {
			background: '#E3E2DF', // Light gray background
			foreground: '#171717', // Dark text color
			primaryLight: '93, 1, 30', // 5D001E - Dark red
			primaryDark: '154, 23, 80', // 9A1750 - Deep pink
			accentLight: '227, 63, 76', // E33F4C - Bright red
			accentDark: '238, 76, 124', // EE4C7C - Pink
			gradientStart: '#5D001E', // Dark red gradient start
			gradientEnd: '#9A1750', // Deep pink gradient end
			surfaceLight: '#E3E2DF', // Light gray surface
			surfaceDark: '#1F0A0E', // Very dark red surface
			sectionLight: '#E3E2DF', // Light gray base
			sectionLightAlt: '#EBEAE8', // Lighter gray
			sectionDark: '#1A080C', // Deep red
			sectionDarkAlt: '#1F0A0E', // Slightly lighter red
			cardLight: '#FFFFFF', // White cards
			cardDark: '#351219', // Dark red cards
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.4)',
				dark: 'rgba(0, 0, 0, 0.5)',
			},
			badgeText: {
				light: 'rgb(227, 63, 76)', // Bright red text
				dark: 'rgb(238, 76, 124)', // Pink text
			},
			badgeBorder: {
				light: 'rgba(227, 63, 76, 0.3)',
				dark: 'rgba(238, 76, 124, 0.3)',
			},
		},
		preview: {
			primary: '#5D001E', // Dark red
			secondary: '#9A1750', // Deep pink
		},
	},
	{
		name: 'Monochrome',
		colors: {
			background: '#ffffff',
			foreground: '#171717',
			primaryLight: '26, 26, 26', // #1A1A1A - Near black
			primaryDark: '0, 0, 0', // #000000 - Pure black
			accentLight: '128, 128, 128', // #808080 - Mid gray
			accentDark: '64, 64, 64', // #404040 - Darker gray
			gradientStart: '#1A1A1A',
			gradientEnd: '#404040',
			surfaceLight: '#F8F8F8',
			surfaceDark: '#121212',
			sectionLight: '#F5F5F5', // Light gray base
			sectionLightAlt: '#FAFAFA', // Lighter gray
			sectionDark: '#141414', // Deep black
			sectionDarkAlt: '#1A1A1A', // Slightly lighter black
			cardLight: '#FFFFFF',
			cardDark: '#1D1D1D',
			badgeBg: {
				light: 'rgba(0, 0, 0, 0.05)',
				dark: 'rgba(255, 255, 255, 0.1)',
			},
			badgeText: {
				light: 'rgb(64, 64, 64)', // Dark gray for light mode
				dark: 'rgb(229, 229, 229)', // Light gray for dark mode
			},
			badgeBorder: {
				light: 'rgba(0, 0, 0, 0.1)',
				dark: 'rgba(255, 255, 255, 0.2)',
			},
		},
		preview: {
			primary: '#1A1A1A',
			secondary: '#404040',
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
