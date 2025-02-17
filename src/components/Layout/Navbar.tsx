'use client'

import { JSX, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Navigation } from './Navigation'

export function Navbar(): JSX.Element {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
	const [scrolled, setScrolled] = useState<boolean>(false)

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 20
			setScrolled(isScrolled)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<nav
			className={`fixed top-0 left-0 right-0 
        transition-all duration-300
        border-b backdrop-blur-sm z-50
        ${
					scrolled
						? 'bg-[var(--section-light-alt)] dark:bg-[var(--section-dark-alt)] border-[rgb(var(--primary-light))]/10'
						: 'bg-transparent border-transparent'
				}`}
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
							className={`p-2 rounded-lg
                text-[rgb(var(--primary-light))] dark:text-[rgb(var(--primary-light))]
                ${
									scrolled
										? 'hover:bg-[rgb(var(--primary-light))]/10 dark:hover:bg-[rgb(var(--primary-light))]/10'
										: 'hover:bg-white/10 dark:hover:bg-white/10'
								}
                transition-colors duration-200`}
							aria-label='Toggle menu'
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</motion.button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className={`md:hidden absolute top-16 left-0 right-0 
              border-b backdrop-blur-sm
              ${
								scrolled
									? 'bg-[var(--section-light)] dark:bg-[var(--section-dark)] border-[rgb(var(--primary-light))]/10'
									: 'bg-[var(--section-light-alt)]/95 dark:bg-[var(--section-dark-alt)]/95 border-[rgb(var(--primary-light))]/5'
							}`}
					>
						<div className='px-4 py-2'>
							<Navigation isMobile />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}
