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
			primaryLight: '168, 85, 247', // Purple
			primaryDark: '126, 34, 206',
			accentLight: '236, 72, 153', // Pink
			accentDark: '219, 39, 119',
			gradientStart: '#A855F7',
			gradientEnd: '#EC4899',
			surfaceLight: '#FAF5FF',
			surfaceDark: '#1E1B4B',
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
			primaryLight: '245, 158, 11', // Amber
			primaryDark: '217, 119, 6',
			accentLight: '239, 68, 68', // Red
			accentDark: '220, 38, 38',
			gradientStart: '#F59E0B',
			gradientEnd: '#EF4444',
			surfaceLight: '#FFFBEB',
			surfaceDark: '#27272A',
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
			primaryLight: '16, 185, 129', // Emerald
			primaryDark: '4, 120, 87',
			accentLight: '99, 102, 241', // Indigo
			accentDark: '67, 56, 202',
			gradientStart: '#10B981',
			gradientEnd: '#6366F1',
			surfaceLight: '#ECFDF5',
			surfaceDark: '#0F172A',
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
			primaryLight: '59, 130, 246', // Blue
			primaryDark: '37, 99, 235',
			accentLight: '139, 92, 246', // Purple
			accentDark: '109, 40, 217',
			gradientStart: '#3B82F6',
			gradientEnd: '#8B5CF6',
			surfaceLight: '#EFF6FF',
			surfaceDark: '#020617',
		},
		preview: {
			primary: '#3B82F6',
			secondary: '#8B5CF6',
		},
	},
]
