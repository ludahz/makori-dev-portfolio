'use client'

import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

const ThemeModeToggle = () => {
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		// Check initial theme
		const darkModeMediaQuery: MediaQueryList = window.matchMedia(
			'(prefers-color-scheme: dark)'
		)
		setIsDark(darkModeMediaQuery.matches)

		// Listen for theme changes
		const handleChange = (e: MediaQueryListEvent) => {
			setIsDark(e.matches)
			updateTheme(e.matches)
		}

		darkModeMediaQuery.addEventListener('change', handleChange)

		return () => darkModeMediaQuery.removeEventListener('change', handleChange)
	}, [])

	const updateTheme = (dark: boolean) => {
		// Update the document class
		if (dark) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}

	const toggleTheme = () => {
		const newIsDark = !isDark
		setIsDark(newIsDark)
		updateTheme(newIsDark)
	}

	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			onClick={toggleTheme}
			className='fixed top-4 right-20 z-50 p-2 rounded-full 
        bg-white dark:bg-gray-800 
        shadow-lg hover:shadow-xl 
        transition-all duration-300
        border border-gray-200 dark:border-gray-700'
			aria-label='Toggle theme'
		>
			{isDark ? (
				<Sun className='w-5 h-5 text-gray-700 dark:text-gray-200' />
			) : (
				<Moon className='w-5 h-5 text-gray-700 dark:text-gray-200' />
			)}
		</motion.button>
	)
}

export default ThemeModeToggle
