'use client'

import { ThemeColors, themes } from '@/constants/theme'
import { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
	currentTheme: ThemeColors
	setTheme: (theme: ThemeColors) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [currentTheme, setCurrentTheme] = useState<ThemeColors>(themes[0])

	const setTheme = (theme: ThemeColors) => {
		const root = document.documentElement

		// Set CSS variables
		Object.entries(theme.colors).forEach(([key, value]) => {
			const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
			root.style.setProperty(`--${cssKey}`, value)
		})

		// Specifically handle background in dark mode
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			root.style.setProperty('--background', theme.colors.surfaceDark)
		} else {
			root.style.setProperty('--background', theme.colors.background)
		}

		setCurrentTheme(theme)
		localStorage.setItem('selected-theme', theme.name)
	}

	// Listen for dark mode changes
	useEffect(() => {
		const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		const handleChange = (e: MediaQueryListEvent) => {
			const background = e.matches
				? currentTheme.colors.surfaceDark
				: currentTheme.colors.background
			document.documentElement.style.setProperty('--background', background)
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
