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
				light: '100, 219, 251', // Bright cyan
				dark: '14, 165, 233', // Deep blue
			},
			badgeText: {
				light: '2, 132, 199', // Dark blue text for light mode
				dark: '226, 246, 255', // Light cyan text for dark mode
			},
			badgeBorder: {
				light: '72, 191, 227', // Medium cyan border
				dark: '2, 132, 199', // Dark blue border
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

			// Matrix Theme
			badgeBg: {
				light: '74, 222, 128', // Matrix green
				dark: '22, 163, 74', // Darker matrix green
			},
			badgeText: {
				light: '21, 128, 61', // Dark green text for light mode
				dark: '187, 247, 208', // Light green text for dark mode
			},
			badgeBorder: {
				light: '34, 197, 94', // Medium green border
				dark: '22, 163, 74', // Dark green border
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
				light: '244, 63, 94', // Primary red
				dark: '225, 29, 72', // Darker red
			},
			badgeText: {
				light: '159, 18, 57', // Dark red for contrast in light mode
				dark: '255, 228, 230', // Light pink for contrast in dark mode
			},
			badgeBorder: {
				light: '225, 29, 72', // Medium red border
				dark: '159, 18, 57', // Dark red border
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
				light: '168, 85, 247', // Primary purple
				dark: '126, 34, 206', // Darker purple
			},
			badgeText: {
				light: '88, 28, 135', // Dark purple for contrast in light mode
				dark: '233, 213, 255', // Light purple for contrast in dark mode
			},
			badgeBorder: {
				light: '147, 51, 234', // Medium purple border
				dark: '88, 28, 135', // Dark purple border
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
				light: '245, 158, 11', // Primary orange
				dark: '217, 119, 6', // Darker orange
			},
			badgeText: {
				light: '180, 83, 9', // Dark orange for contrast in light mode
				dark: '255, 237, 213', // Light orange for contrast in dark mode
			},
			badgeBorder: {
				light: '234, 88, 12', // Medium orange border
				dark: '180, 83, 9', // Dark orange border
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
				light: '16, 185, 129', // Primary green
				dark: '4, 120, 87', // Darker green
			},
			badgeText: {
				light: '6, 95, 70', // Dark green for contrast in light mode
				dark: '209, 250, 229', // Light green for contrast in dark mode
			},
			badgeBorder: {
				light: '10, 147, 105', // Medium green border
				dark: '4, 120, 87', // Dark green border
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
				light: '59, 130, 246', // Primary blue
				dark: '37, 99, 235', // Darker blue
			},
			badgeText: {
				light: '29, 78, 216', // Dark blue for contrast in light mode
				dark: '219, 234, 254', // Light blue for contrast in dark mode
			},
			badgeBorder: {
				light: '37, 99, 235', // Medium blue border
				dark: '29, 78, 216', // Dark blue border
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
				light: '82, 196, 255', // Vibranium blue
				dark: '163, 90, 255', // Kinetic purple
			},
			badgeText: {
				light: '0, 108, 171', // Dark blue for contrast in light mode
				dark: '226, 232, 255', // Light blue for contrast in dark mode
			},
			badgeBorder: {
				light: '0, 144, 227', // Medium vibranium blue border
				dark: '93, 48, 203', // Dark purple border
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
				light: '255, 232, 31', // Lightsaber yellow bg
				dark: '33, 150, 243', // Force blue bg
			},
			badgeText: {
				light: '23, 23, 23', // Dark text for contrast in light mode
				dark: '241, 241, 241', // Light text for contrast in dark mode
			},
			badgeBorder: {
				light: '204, 185, 25', // Darker yellow border
				dark: '25, 118, 210', // Darker blue border
			},
		},
		preview: {
			primary: '#FFE81F',
			secondary: '#2196F3',
		},
	},
	{
		name: 'Star Wars II',
		colors: {
			// Base colors
			background: '#ffffff',
			foreground: '#171717',

			// Light side colors (Jedi/Rebellion)
			primaryLight: '255, 232, 31', // Lightsaber yellow/gold
			primaryDark: '204, 185, 25', // Deeper gold

			// Dark side colors (Sith/Empire)
			accentLight: '231, 35, 35', // Sith red
			accentDark: '176, 26, 26', // Dark sith red

			// Gradient colors
			gradientStart: '#FFE81F', // Yellow saber
			gradientEnd: '#E72323', // Red saber

			// Surface colors
			surfaceLight: '#F5F6FA', // Light imperial gray
			surfaceDark: '#1A1B1F', // Dark imperial gray

			// Section colors
			sectionLight: '#F8F9FC', // Light side white
			sectionLightAlt: '#FBFCFD', // Lighter variation
			sectionDark: '#13151A', // Empire dark
			sectionDarkAlt: '#1A1C22', // Lighter empire

			// Card colors
			cardLight: '#FFFFFF', // Light side white
			cardDark: '#1E2027', // Dark side gray

			// Badge system
			badgeBg: {
				light: '255, 232, 31', // Light side gold
				dark: '231, 35, 35', // Dark side red
			},
			badgeText: {
				light: '23, 23, 23', // Dark text for gold badges
				dark: '255, 255, 255', // White text for red badges
			},
			badgeBorder: {
				light: '204, 185, 25', // Darker gold border
				dark: '176, 26, 26', // Darker red border
			},
		},
		preview: {
			primary: '#FFE81F', // Classic Star Wars yellow
			secondary: '#E72323', // Sith red
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
				light: '244, 67, 54', // Spider-red
				dark: '33, 150, 243', // Spider-blue
			},
			badgeText: {
				light: '185, 28, 28', // Dark red for contrast in light mode
				dark: '239, 246, 255', // Light blue for contrast in dark mode
			},
			badgeBorder: {
				light: '220, 38, 38', // Medium red border
				dark: '25, 118, 210', // Dark blue border
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
				light: '61, 82, 160', // Steel blue
				dark: '112, 145, 196', // Lighter steel blue
			},
			badgeText: {
				light: '30, 58, 138', // Dark blue for contrast in light mode
				dark: '226, 232, 240', // Light gray for contrast in dark mode
			},
			badgeBorder: {
				light: '48, 66, 145', // Medium steel blue border
				dark: '71, 85, 105', // Dark steel blue border
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
				light: '97, 137, 47', // Fresh green
				dark: '134, 194, 50', // Bright green
			},
			badgeText: {
				light: '63, 98, 18', // Dark green for contrast in light mode
				dark: '236, 252, 203', // Light green for contrast in dark mode
			},
			badgeBorder: {
				light: '77, 124, 15', // Medium green border
				dark: '101, 163, 13', // Dark green border
			},
		},
		preview: {
			primary: '#61892F',
			secondary: '#86C232',
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
