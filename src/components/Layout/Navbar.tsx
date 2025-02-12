'use client'

import { JSX, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Navigation } from './Navigation'

export function Navbar(): JSX.Element {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	return (
		<nav
			className='fixed top-0 left-0 right-0 
      bg-[var(--section-light)] dark:bg-[var(--section-dark)] 
      border-b border-[rgb(var(--primary-light))/10 dark:border-[rgb(var(--primary-dark))/10]
      backdrop-blur-sm
      z-50'
		>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo/Home Link */}
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='text-xl font-bold gradient-text cursor-pointer
              hover:opacity-80 transition-opacity duration-200'
						onClick={() => {
							const section = document.getElementById('/')
							if (section) {
								const offset = 90
								const bodyRect = document.body.getBoundingClientRect().top
								const sectionRect = section.getBoundingClientRect().top
								const sectionPosition = sectionRect - bodyRect
								const offsetPosition = sectionPosition - offset

								window.scrollTo({
									top: offsetPosition,
									behavior: 'smooth',
								})
							}
						}}
					>
						Makori
					</motion.h1>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-4'>
						<Navigation />
					</div>

					{/* Mobile Menu Button */}
					<div className='md:hidden'>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='p-2 rounded-lg
                text-[rgb(var(--primary-light))] dark:text-[rgb(var(--primary-light))]
                hover:bg-[rgb(var(--primary-light))]/10 
                dark:hover:bg-[rgb(var(--primary-light))]/10
                transition-colors duration-200'
							aria-label='Toggle menu'
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</motion.button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className='md:hidden absolute top-16 left-0 right-0 
            bg-[var(--surface-light)] dark:bg-[var(--surface-dark)]
            border-b border-[rgb(var(--primary-light))]/10 dark:border-[rgb(var(--primary-dark))]/10
            backdrop-blur-sm'
				>
					<div className='px-4 py-2'>
						<Navigation isMobile />
					</div>
				</motion.div>
			)}
		</nav>
	)
}
