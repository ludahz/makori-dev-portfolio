'use client'

import { ThemeColors, themes } from '@/constants/theme'
import { createContext, useContext, useEffect, useState } from 'react'
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeContextType {
	currentTheme: ThemeColors
	setTheme: (theme: ThemeColors) => void
}

// ThemeContext.tsx
export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [currentTheme, setCurrentTheme] = useState<ThemeColors>(themes[0])

	const setTheme = (theme: ThemeColors) => {
		const root = document.documentElement
		const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

		// Set background color based on theme and dark mode
		root.style.setProperty(
			'--background',
			isDarkMode ? theme.colors.surfaceDark : theme.colors.background
		)

		// Set other CSS variables
		Object.entries(theme.colors).forEach(([key, value]) => {
			const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()

			if (typeof value === 'object' && value !== null) {
				Object.entries(value).forEach(([variant, variantValue]) => {
					root.style.setProperty(`--${cssKey}-${variant}`, String(variantValue))
				})
			} else {
				root.style.setProperty(`--${cssKey}`, String(value))
			}
		})

		setCurrentTheme(theme)
		localStorage.setItem('selected-theme', theme.name)
	}

	// Listen for dark mode changes
	useEffect(() => {
		const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

		const handleChange = () => {
			// Re-apply the current theme with updated dark mode status
			setTheme(currentTheme)
		}

		darkModeMediaQuery.addEventListener('change', handleChange)
		return () => darkModeMediaQuery.removeEventListener('change', handleChange)
	}, [currentTheme])

	// Load saved theme
	useEffect(() => {
		const savedTheme = localStorage.getItem('selected-theme')
		if (savedTheme) {
			const theme = themes.find((t) => t.name === savedTheme)
			if (theme) setTheme(theme)
		}
	}, [])

	return (
		<ThemeContext.Provider value={{ currentTheme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
