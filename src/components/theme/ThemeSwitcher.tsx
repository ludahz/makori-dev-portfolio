// src/components/ThemeSwitcher.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { themes } from '@/constants/theme'

export function ThemeSwitcher() {
	const [isOpen, setIsOpen] = useState(false)
	const { currentTheme, setTheme } = useTheme()

	return (
		<div className='fixed bottom-4 right-4 z-50'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300'
			>
				<Palette className='w-6 h-6 text-gray-700 dark:text-gray-200' />
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						className='absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64'
					>
						<h3 className='text-gray-900 dark:text-white text-lg font-semibold mb-3'>
							Select Theme
						</h3>
						<div className='space-y-2'>
							{themes.map((theme) => (
								<button
									key={theme.name}
									onClick={() => {
										setTheme(theme)
										setIsOpen(false)
									}}
									className={`w-full p-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${
										currentTheme.name === theme.name
											? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
											: 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
									}`}
								>
									<div className='relative flex items-center space-x-1'>
										<div
											className='w-6 h-6 rounded-full shadow-sm'
											style={{ background: theme.preview.primary }}
										/>
										<div
											className='w-6 h-6 rounded-full shadow-sm'
											style={{ background: theme.preview.secondary }}
										/>
									</div>
									<span className='flex-1 text-left'>{theme.name}</span>
								</button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
